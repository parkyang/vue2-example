/*
 * @Descripttion:
 * @version:
 * @Author: yangming
 * @Date: 2021-04-28 11:20:16
 * @LastEditors: yangming
 * @LastEditTime: 2021-04-28 17:05:31
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
      },
    ],
  },
}
