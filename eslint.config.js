import eslint from '@eslint/js'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import astro from 'eslint-plugin-astro'

export default defineConfig(
  { ignores: ['.astro', 'node_modules', 'dist'] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  stylistic.configs.recommended,
  {
    rules: {
      'prefer-object-spread': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      '@typescript-eslint/no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_', caughtErrors: 'all', caughtErrorsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_', varsIgnorePattern: '^_', ignoreRestSiblings: true }],
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
      '@stylistic/block-spacing': 'error',
      '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
      '@stylistic/comma-dangle': ['error', { arrays: 'always-multiline', objects: 'always-multiline', imports: 'always-multiline', exports: 'always-multiline', functions: 'never' }],
      '@stylistic/comma-spacing': ['error', { before: false, after: true }],
      '@stylistic/indent': ['error', 2],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/key-spacing': ['error', { beforeColon: false, afterColon: true }],
      '@stylistic/max-len': ['warn', { code: Infinity }],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/quote-props': ['error', 'as-needed'],
      '@stylistic/quotes': ['error', 'single', { allowTemplateLiterals: 'avoidEscape' }],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/multiline-ternary': 'off',
      '@stylistic/jsx-tag-spacing': ['error', { closingSlash: 'never', beforeSelfClosing: 'never', afterOpening: 'never', beforeClosing: 'never' }],
    },
  },
  {
    name: 'astro-bad-rules',
    files: ['**/*.astro'],
    rules: {
      '@stylistic/ts/indent': 'off',
      '@stylistic/jsx-one-expression-per-line': 'off',
    },
  },
  {
    files: ['src/**/*-snippet.*'],
    rules: {
      'no-undef': ['off'],
    },
  }
)
