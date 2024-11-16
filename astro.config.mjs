import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://herramientaseo.netlify.app/',
  i18n: {
    defaultLocale: 'es',
    locales: ['es']
  }
});
base: '/Herramientas-Seo/', // Si usas un subdirectorio
