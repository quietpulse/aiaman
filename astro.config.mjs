import { defineConfig } from 'astro/config';

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: 'https://aiamanme.github.io',
  base: '/aiaman',
  integrations: [image()]
});