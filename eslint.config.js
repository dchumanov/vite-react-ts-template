import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';
import a11y from 'eslint-plugin-jsx-a11y';
import eslintComments from 'eslint-plugin-eslint-comments';
import tseslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: typescriptParser, // Указываем парсер TypeScript
    },
    settings: {
      react: { version: 'detect' },
    },
    plugins: {
      react, // Подключаем плагин react
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
      import: importPlugin,
      'jsx-a11y': a11y,
      'eslint-comments': eslintComments,
      '@typescript-eslint': tseslint, // Добавляем плагин @typescript-eslint
    },
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-var-requires': 'off',
      'react/prop-types': 'off',
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      'prettier/prettier': 'warn',
      'import/order': ['error', { 'newlines-between': 'always' }],
      'eslint-comments/no-unused-disable': 'error',
      'jsx-a11y/anchor-is-valid': 'warn',

      // Убираем plugin:react/recommended и добавляем правила вручную
      'react/jsx-uses-vars': 'error', // добавляем правило для использования переменных
      'react/prop-types': 'off', // отключаем проверку prop-types
    },
    ignores: [
      'node_modules/**/*',
      'public/**/*',
      'eslint.config.js',
      'storybook-static/**/*',
      'build/**/*',
      'dist/**/*',
      'webpack/*.js',
      'package*.json',
      '**/*.d.ts',
    ],
  },
];
