'use strict';

module.exports = {
  '**/*.js?(x)': (filenames) => [
    `env NODE_ENV=production eslint --fix ${filenames.join(' ')}`,
  ],
  '**/*.ts?(x)': (filenames) => [
    `env NODE_ENV=production eslint --fix ${filenames.join(' ')}`,
    'tsc',
  ],
};
