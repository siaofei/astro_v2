/** @type {import("prettier").Config} */
export default {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
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
  importOrder: [
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@components|@layouts)/(.*)$',
    '^[./]',
    '',
    '^(@data|@utils)/(.*)$',
    // '^@styles/(.*)$', // import @styles/*.css: as side-effect imports
    '',
    '<TYPES>^(astro:)', // astro builtin types
    '<TYPES>',
    '<TYPES>^@/(.*)$', // local type file: @/types.ts
  ],
  importOrderMergeDuplicateImports: true,
  importOrderSortSpecifiers: true,
  trailingComma: 'all',
}
