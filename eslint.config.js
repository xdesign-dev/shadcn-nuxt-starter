// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      unocss: true,
      formatters: true,
    },
    {
      // Without `files`, they are general rules for all files
      rules: {
        'vue/no-multiple-template-root': 'off',
      },
    },
  ),
)
