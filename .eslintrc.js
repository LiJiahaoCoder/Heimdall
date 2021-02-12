'use strict';

const confusingBrowserGlobals = require('confusing-browser-globals');

const __PROD__ = process.env.NODE_ENV === 'production';

const config = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'xo/esnext',
    require.resolve('xo/config/plugins'),
    'xo-react',
    'plugin:prettier/recommended',
    'prettier/unicorn',
    'prettier/react',
  ],
  ignorePatterns: ['dist'],
  rules: {
    'no-console': 'error',
    'no-implicit-coercion': ['error', { allow: ['!!'] }],
    'no-restricted-globals': ['error', ...confusingBrowserGlobals],
    'unicorn/prevent-abbreviations': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['xo-typescript', 'prettier/@typescript-eslint'],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'unicorn/import-style': 'off',
        '@typescript-eslint/no-shadow': 'error',
        '@typescript-eslint/promise-function-async': 'off',
        '@typescript-eslint/no-implicit-any-catch': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
};

if (!__PROD__) {
  config.extends = [
    ...config.extends,
    'silent',
    'silent/import',
    'silent/prettier',
    'silent/unicorn',
    'silent/react',
  ];
  config.overrides[0].extends = [
    ...config.overrides[0].extends,
    'silent/@typescript-eslint',
  ];
}

module.exports = config;
