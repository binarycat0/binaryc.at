# Deploying to S3 + CloudFront

One-time infrastructure setup, then `./scripts/deploy.sh` for every release.

The bucket stays **private**. CloudFront reaches it through Origin Access
Control (OAC), so the only way to the content is through the distribution —
no public bucket, no website endpoint.

## 1. Bucket

The bucket already exists: **`binarycat-site`** in `eu-central-1`.

Confirm it is fully private — CloudFront reaches it via OAC, so nothing should
be reachable directly:

```sh
aws s3api put-public-access-block \
  --bucket binarycat-site \
  --public-access-block-configuration \
    "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"

aws s3api get-public-access-block --bucket binarycat-site
```

Leave "Static website hosting" **off** — it is the legacy path and forces a
public bucket.

## 2. Certificate

CloudFront only reads certificates from **us-east-1**, regardless of where the
bucket lives.

```sh
aws acm request-certificate \
  --region us-east-1 \
  --domain-name binaryc.at \
  --subject-alternative-names www.binaryc.at \
  --validation-method DNS
```

Add the returned CNAME records to your DNS, then wait for status `ISSUED`.

## 3. Rewrite function

S3 REST origins have no index-document behaviour, so `/` and `/about` would
return 404 against the raw object keys. Create a CloudFront Function from
[`deploy/cloudfront-rewrite.js`](deploy/cloudfront-rewrite.js) (runtime
`cloudfront-js-2.0`), publish it, and attach it to the default cache
behaviour on the **viewer request** event.

## 4. Distribution

Create a distribution with:

| Setting | Value |
| --- | --- |
| Origin | the S3 bucket, **REST** endpoint (not the website endpoint) |
| Origin access | Origin Access Control, signing enabled |
| Viewer protocol policy | Redirect HTTP to HTTPS |
| Default root object | `index.html` |
| Cache policy | `CachingOptimized` (`658327ea-f89d-4fab-a63d-7e88639e58f6`) |
| Response headers policy | `SecurityHeadersPolicy` (`67f7725c-6f97-4210-82d7-5512b31e9d03`) |
| Alternate domain names | `binaryc.at`, `www.binaryc.at` |
| Custom SSL certificate | the ACM certificate from step 2 |
| Function association | viewer request → the function from step 3 |

`CachingOptimized` respects the `Cache-Control` headers the deploy script
sets, so hashed assets stay cached and HTML revalidates.

After creating it, apply the generated bucket policy — the console offers a
copy-paste snippet that grants `s3:GetObject` to the distribution principal
only, conditioned on `AWS:SourceArn`.

## 5. DNS

Point both names at the distribution with alias/ALIAS records:

- `binaryc.at` → `dxxxxxxxxxxxxx.cloudfront.net`
- `www.binaryc.at` → `dxxxxxxxxxxxxx.cloudfront.net`

On Route 53 these are A-record aliases. On other providers use ALIAS/ANAME at
the apex and a CNAME for `www`.

## 6. Deploy

`BUCKET` defaults to `binarycat-site`, so once the distribution exists only its
id is needed:

```sh
DISTRIBUTION_ID=E1XXXXXXXXXXXX ./scripts/deploy.sh
```

Export it in your shell profile and it becomes a bare `./scripts/deploy.sh`.

## Notes

- The first 1,000 invalidation paths per month are free; the script
  invalidates `/*`, which counts as one path.
- To deploy from CI instead, use a GitHub OIDC role rather than long-lived
  access keys — ask and I'll add the workflow.
