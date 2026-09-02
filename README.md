# binaryc.at

CV site. [binaryc.at](https://binaryc.at) — Astro, static, S3 + CloudFront.

Content lives in [`src/data/cv.ts`](src/data/cv.ts).

```sh
npm run dev              # localhost:4321
npm run build            # -> dist/
./scripts/deploy.sh      # needs .env
```

Pretty URLs (`/cv`) depend on the viewer-request CloudFront Function in
[`deploy/cloudfront-rewrite.js`](deploy/cloudfront-rewrite.js), which is
already attached to the distribution.
