// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://binaryc.at',
  // 'file' emits cv.html, so the object key matches the URL exactly. The S3
  // REST origin has no index-document behaviour, and this way it needs none.
  build: { format: 'file', inlineStylesheets: 'auto' },
});
