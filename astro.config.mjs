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
  '/tools/cost-of-doing-nothing',
  '/tools/cost-of-doing-nothing/',
  '/security',
  '/security/',
];

export default defineConfig({
  site: 'https://kittykat.tech',
  // Per-case pages were consolidated into the single /case-studies page (cases
  // expand in place). Old per-case URLs redirect to the matching anchor.
  redirects: {
    '/case-studies/red-petroleum': '/case-studies/#red-petroleum',
    '/case-studies/click-and-grow': '/case-studies/#click-grow',
    '/case-studies/csc-telecom': '/case-studies/#csc-telecom',
    '/case-studies/gte': '/case-studies/#gte',
    '/case-studies/kricon': '/case-studies/#kricon',
    '/case-studies/taxi': '/case-studies/#forrest-taxi',
  },
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
