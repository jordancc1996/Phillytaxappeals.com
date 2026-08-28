import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://phillytaxappeals.com',
  output: 'static',
  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
    sitemap({
      filter: (page) =>
        !page.includes('/privacy-policy') &&
        !page.includes('/404') &&
        !page.includes('/news'),
    }),
  ],
  trailingSlash: 'never',
});
