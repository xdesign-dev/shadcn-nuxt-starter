import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetShadcn(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  // By default, `.ts` and `.js` files are NOT extracted.
  // If you want to extract them, use the following configuration.
  // It's necessary to add the following configuration if you use shadcn-vue or shadcn-svelte.
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        // "components/**/*.{js,ts}",
      ],
    },
  },
  theme: {
    container: {
      center: true,
      padding: '2rem',
      margin: '0rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      sans: 'Geist Sans',
      serif: 'DM Serif Display',
      mono: 'Consolas',
    },
  },
})
