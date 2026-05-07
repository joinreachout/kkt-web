import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// URLs that carry <meta robots="noindex"> — must also be excluded
// from /sitemap-index.xml so search engines don't try to crawl them.
const NOINDEX_PATHS = [
  '/galaga',
  '/galaga/',
  '/404',
  '/404.html',
];

export default defineConfig({
  site: 'https://kittykat.tech',
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/+$/, '') || '/';
        return !NOINDEX_PATHS.some((np) => path === np.replace(/\/+$/, '') || path === np);
      },
    }),
  ],
  build: {
    assets: 'assets',
  },
  vite: {
    server: {
      watch: {
        ignored: ['**/dist/**'],
      },
    },
  },
});
