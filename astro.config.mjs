// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'oxbarts/Sandstuff',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/oxbarts' },
        { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/@oxbarts' },
      ],
      sidebar: [
        { label: 'Welcome', link: '/' },
        {
          label: 'Alpha Season 6',
          badge: { text: 'Hot', variant: 'tip' },
          autogenerate: { directory: 'as6' },
        },
        {
          label: 'General Stuff',
          autogenerate: { directory: 'general-stuff' },
        },
      ],
      customCss: [
        './src/styles.css',
      ],
      components: {
        SiteTitle: './src/overrides/site-title.astro',
        ThemeSelect: './src/overrides/theme-select.astro',
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
