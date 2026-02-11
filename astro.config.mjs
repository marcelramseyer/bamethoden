// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeRapide()],
      title: '❖ Methodensammlung',
      description: 'Meine Dokumentation über BA Methoden',
      defaultLocale: 'de',
      // components: {
      //   ThemeSelect: './src/components/ThemeSelect.astro',
      // },
      // customCss: [
      //   './src/styles/custom.css',
      // ],

      // logo: {
      //   light: './src/assets/light-logo.svg',
      //   dark: './src/assets/dark-logo.svg',
      // },
      locales: {
        root: {
          label: 'Deusch',
          lang: 'de',
        },
      },
      social: [
        {
          label: 'GitHub',
          icon: 'github',
          href: 'https://github.com/marcelramseyer/bamethoden',
        },
      ],
      sidebar: [
        {
          label: 'Strategie',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Anforderungen',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Priorisierung',
          autogenerate: { directory: 'test' },
        },
      ],
    }),
  ],
});
