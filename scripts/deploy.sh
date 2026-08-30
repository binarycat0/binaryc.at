#!/usr/bin/env bash
#
# Build and publish the site to S3, then invalidate CloudFront.
#
#   DISTRIBUTION_ID=E123ABC ./scripts/deploy.sh
#
# Assets under /_astro/ have content-hashed filenames, so they are cached
# forever. Everything else (HTML, robots.txt, favicon) must revalidate, or
# visitors keep seeing a stale CV after a deploy.

set -euo pipefail

BUCKET="${BUCKET:-binarycat-site}"
: "${DISTRIBUTION_ID:?set DISTRIBUTION_ID to the CloudFront distribution id}"

cd "$(dirname "$0")/.."

echo "==> Building"
npm run build

echo "==> Uploading immutable assets"
aws s3 sync dist/ "s3://${BUCKET}/" \
  --delete \
  --exclude '*' \
  --include '_astro/*' \
  --cache-control 'public, max-age=31536000, immutable'

echo "==> Uploading pages"
# Runs second so a page is never live before the assets it references.
aws s3 sync dist/ "s3://${BUCKET}/" \
  --delete \
  --exclude '_astro/*' \
  --cache-control 'public, max-age=0, must-revalidate'

echo "==> Invalidating CloudFront"
invalidation_id=$(aws cloudfront create-invalidation \
  --distribution-id "${DISTRIBUTION_ID}" \
  --paths '/*' \
  --query 'Invalidation.Id' \
  --output text)

echo "==> Waiting for invalidation ${invalidation_id}"
aws cloudfront wait invalidation-completed \
  --distribution-id "${DISTRIBUTION_ID}" \
  --id "${invalidation_id}"

echo "==> Live at https://binaryc.at"
