module.exports = {
  parser: 'typescript-eslint-parser',
  env: {
    browser: true,
    es2023: true
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier'],
  parserOptions: {
    ecmaVersion: 2023,
    sourceType: 'module'
  },
  plugins: ['prettier', 'typescript'],
  rules: {
    'no-undef': 'off',
    'prettier/prettier': 'error',
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    'typescript/class-name-casing': 'error'
  }
}