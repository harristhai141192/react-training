module.exports = {
  parser: '@typescript-eslint/parser',
  // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020,
    // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:storybook/recommended',
  ],
  plugins: ['eslint-plugin-prettier', 'react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
      {
        usePrettierrc: true,
      },
    ],
    'react/prop-types': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        allow: ['arrowFunctions'],
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/no-non-null-assertion': 'warn',
  },
};
