// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'BA Methods',
			description: 'Meine Dokumentation über BA Methoden',
			defaultLocale: 'de',
			locales: {
				root: {
					label: 'Deusch',
					lang: 'de'
				}
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
