/** @type {import("prettier").Config} */
export default {
  plugins: [
    'prettier-plugin-astro',
    'prettier-plugin-tailwindcss', // MUST come last
  ],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  experimentalTernaries: true,
  arrowParens: 'always',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  bracketSameLine: false,
  printWidth: 80,
  trailingComma: 'all',
}
