// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://binaryc.at',
  // 'directory' emits about/index.html; deploy/cloudfront-rewrite.js maps
  // /about and /about/ onto that key, since S3 has no index document.
  build: { format: 'directory', inlineStylesheets: 'auto' },
  trailingSlash: 'ignore',
});
