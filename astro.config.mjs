import alpinejs from '@astrojs/alpinejs'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://siaofei.github.io',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    alpinejs({
      entrypoint: '/src/entrypoint',
    }),
    icon(),
  ],
})
