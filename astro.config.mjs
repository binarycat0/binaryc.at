// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://binaryc.at',

  integrations: [sitemap()],

  // 'directory' emits /about/index.html and links to /about/.
  // The CloudFront function in deploy/cloudfront-rewrite.js maps both
  // /about and /about/ onto that file. See DEPLOY.md.
  build: {
    format: 'directory',
    // Inline small stylesheets rather than emitting a request for them.
    inlineStylesheets: 'auto',
  },

  // No trailing-slash redirects to worry about on S3 as long as the
  // rewrite function and this setting agree.
  trailingSlash: 'ignore',
});
