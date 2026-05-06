import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kittykat.tech',
  integrations: [react(), mdx(), sitemap()],
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
