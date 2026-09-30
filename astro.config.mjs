// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Change this to your real domain before going live.
// It is used for canonical URLs, Open Graph tags, the sitemap and robots.txt.
const SITE_URL = 'https://spacesimply.in';

export default defineConfig({
  site: SITE_URL,
  // Clean URLs: /blog/what-is-a-black-hole (no trailing slash, no .html)
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
