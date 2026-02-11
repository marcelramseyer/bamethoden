// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: '❖ Methodensammlung',
      description: 'Meine Dokumentation über BA Methoden',
      defaultLocale: 'de',
      components: {
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      customCss: [
        // Relativer Pfad zu deiner benutzerdefinierten CSS-Datei
        './src/styles/custom.css',
      ],

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
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Richtlinien',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Prototyping',
          autogenerate: { directory: 'test' },
        },
      ],
    }),
  ],
});
