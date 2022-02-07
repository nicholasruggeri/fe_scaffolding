module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    sourceType: 'module',
    ecmaVersion: 2018,
  },
  plugins: ['babel'],
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {},
};
