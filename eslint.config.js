// @ts-check
import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginAstro from 'eslint-plugin-astro'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
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
  /* @ts-expect-error languageOptions emcaVersion type incompatible */
  eslintPluginUnicorn.configs['flat/recommended'],
  stylistic.configs['recommended-flat'],
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
      'astro/jsx-a11y/iframe-has-title': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@stylistic/quotes': 'off',
      '@stylistic/spaced-comment': ['warn', 'always'],
      '@stylistic/max-len': [
        'warn',
        {
          code: 100,
          tabWidth: 2,
          ignoreComments: true,
          ignoreUrls: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      '@stylistic/quote-props': 'off',
    },
  },
  eslintConfigPrettier, // disable formatting rules
)
