// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The live address of the site.
// It is used for canonical URLs, Open Graph tags, the sitemap and robots.txt.
const SITE_URL = 'https://www.simplyspace.space';

export default defineConfig({
  site: SITE_URL,
  // Clean URLs: /blog/what-is-a-black-hole (no trailing slash, no .html)
  trailingSlash: 'never',
  // Each page is built as a folder with an index.html (e.g. blog/index.html).
  // Don't switch this to 'file': that creates blog.html next to a blog/ folder,
  // and Vercel then returns 404 for /blog.
  build: { format: 'directory' },
  integrations: [sitemap()],
});
