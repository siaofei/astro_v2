// @ts-check
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

import globals from 'globals'

export default tseslint.config(
  {
    ignores: ['**/dist/**', '.astro/'],
  },
  eslint.configs.recommended, // js
  ...tseslint.configs.recommended, // ts
  ...eslintPluginAstro.configs.recommended, // astro
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'], // astro components A11Y
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    rules: {
      'no-const-assign': 'warn',
      'no-extra-boolean-cast': 'warn',
      'no-irregular-whitespace': 'warn',
      'prefer-const': 'warn',
      'no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'astro/jsx-a11y/iframe-has-title': 'off',
    },
  },
  eslintConfigPrettier, // disable formatting rules
)
