'use strict';

const babelRuntimeVersion = require('@babel/runtime/package.json').version;

module.exports = ({ env }) => ({
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: env('test') ? 'commonjs' : false,
        useBuiltIns: 'usage',
        corejs: 3,
        targets: env('test') ? { node: 'current' } : undefined,
        bugfixes: true,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
      },
    ],
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        regenerator: false,
        useESModules: !env('test'),
        version: babelRuntimeVersion,
      },
    ],
    [
      '@babel/plugin-proposal-optional-chaining',
      {
        loose: true,
      },
    ],
    [
      '@babel/plugin-proposal-nullish-coalescing-operator',
      {
        loose: true,
      },
    ],
  ].filter(Boolean),
});
