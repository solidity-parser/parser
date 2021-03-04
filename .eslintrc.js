module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],

  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },

  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'max-len': ['error', {
      "ignoreComments": true
    }],
  },
  env: {
    es6: true,
    mocha: true,
    node: true,
  },
}
