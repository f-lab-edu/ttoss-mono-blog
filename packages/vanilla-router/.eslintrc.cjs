module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  extends: ['airbnb', 'eslint:recommended'],
  rules: {
    'func-names': ['error', 'never'],
    'import/prefer-default-export': 'off',
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
