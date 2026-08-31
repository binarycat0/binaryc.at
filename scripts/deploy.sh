#!/usr/bin/env bash
# Build, publish to S3, invalidate CloudFront. Reads BUCKET and
# DISTRIBUTION_ID from .env (see .env.example).
set -euo pipefail

cd "$(dirname "$0")/.."
if [ -f .env ]; then set -a; . ./.env; set +a; fi

: "${BUCKET:?not set}" "${DISTRIBUTION_ID:?not set}"

npm run build

# Hashed assets first, so no page is live before the assets it references.
aws s3 sync dist/ "s3://${BUCKET}/" --delete --exclude '*' --include '_astro/*' \
  --cache-control 'public, max-age=31536000, immutable'
aws s3 sync dist/ "s3://${BUCKET}/" --delete --exclude '_astro/*' \
  --cache-control 'public, max-age=0, must-revalidate'

aws cloudfront create-invalidation --distribution-id "${DISTRIBUTION_ID}" \
  --paths '/*' --query 'Invalidation.Id' --output text
