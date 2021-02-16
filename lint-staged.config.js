"use strict";

module.exports = {
  "**/*.js?(x)": (filenames) => [
    `env NODE_ENV=production eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(" ")}`,
  ],
  "**/*.ts?(x)": (filenames) => [
    `env NODE_ENV=production eslint --fix ${filenames
      .map((filename) => `"${filename}"`)
      .join(" ")}`,
    "tsc",
  ],
};
