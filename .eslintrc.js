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
    // @fixable 必須使用 === 或 !==，禁止使用 == 或 !=，與 null 比較時除外
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    // 類別和介面的命名必須遵守帕斯卡命名法，比如 PersianCat
    'typescript/class-name-casing': 'error'
  }
}