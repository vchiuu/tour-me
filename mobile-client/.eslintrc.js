const fs = require('fs');
const path = require('path');

const prettierrc = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'));

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 6,
    sourceType: 'module',
  },
  plugins: ['prettier', 'react', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error', prettierrc],
    'arrow-body-style': [2, 'as-needed'],
    indent: [2, 2, { SwitchCase: 1 }],
    'no-console': 0,
    'no-undef': 2,
    'no-unused-vars': 2,
    'prefer-template': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-uses-vars': 2,
    'react/prop-types': 0,
  },
};
