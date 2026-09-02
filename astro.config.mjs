// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://binaryc.at',
  // 'directory' emits cv/index.html; deploy/cloudfront-rewrite.js maps /cv
  // onto that key, since the S3 REST origin has no index document.
  build: { format: 'directory', inlineStylesheets: 'auto' },
  trailingSlash: 'never',
});
