import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';

/**
 * Flat config for ESLint 9+.
 *
 * Replaces .eslintrc.json: Next.js 16 removed `next lint`, so `npm run lint`
 * calls the ESLint CLI directly (`eslint .`) instead. The rule overrides below
 * are carried over from the old .eslintrc.json unchanged.
 *
 * Order matters: a later object overrides an earlier one for the files it
 * matches, so the file-specific overrides come last.
 */
const config = [
  {
    ignores: ['.next/**', 'out/**', 'node_modules/**', 'next-env.d.ts'],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
  prettier,
  {
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'func-names': 'off',
      'no-process-exit': 'off',
      'object-shorthand': 'off',
      'class-methods-use-this': 'off',
      // New in eslint-plugin-react-hooks v7, which ships with eslint-config-next 16.
      // Five client components already set state inside an effect (mobile menu close,
      // cookie-consent hydration). Warning keeps those findings visible without
      // failing `npm run lint`; reworking them touches client behaviour and does not
      // belong in a dependency upgrade.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
  {
    // These are CLI scripts; printing to stdout is their job.
    files: ['scripts/**/*.mjs'],
    rules: {'no-console': 'off'},
  },
];

export default config;
