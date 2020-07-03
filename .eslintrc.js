module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Движку нужен проект TS для правил с типами
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    // Базовый набор правил eslint
    'eslint:recommended',
    // Отключаем правила из базового набора
    'plugin:@typescript-eslint/eslint-recommended',
    // Базовые правила для TypeScript
    'plugin:@typescript-eslint/recommended',
    // Правила TS, требующие инфо о типах
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  env: {
    browser: false,
    commonjs: true,
    es6: true,
    es2017: true,
    jest: true,
    node: true,
  },
  rules: {},
};
