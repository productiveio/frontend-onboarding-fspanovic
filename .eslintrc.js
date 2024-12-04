'use strict';

const { configs } = require('@nullvoxpopuli/eslint-configs');
const { configBuilder: baseNode } = require('@nullvoxpopuli/eslint-configs/configs/node');

const config = configs.ember();
const nodeConfig = baseNode();

module.exports = {
  ...config,
  overrides: [
    ...config.overrides,

    /// ALL ///
    {
      files: '**/*.{gjs,js,gts,ts}',
      rules: {
        '@typescript-eslint/comma-dangle': ['error', { // Stylistic - enable comma-dangle
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          enums: 'always-multiline',
          tuples: 'always-multiline',
          generics: 'always-multiline',
          functions: 'never',
        }],
      },
    },
    {
      files: [
        '{src,app,addon,addon-test-support,tests}/**/*.gts',
      ],
      rules: {
        'no-undef': 'off', // @nullvoxpopuli/eslint-configs extends eslint:recommended but does not override this for gts files
      },
    },

    /// MIRAGE ///
    {
      files: ['mirage/**/*.{js,ts}'],
      parserOptions: {
        sourceType: 'module',
      },
      env: {
        browser: true,
        es2024: true,
        embertest: true,
      },
    },

    /// NODE ///
    {
      ...nodeConfig.commonjs.js,
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'config/**/*.js',
        'ember-cli-build.js',
        'testem.js',
      ],
    },

    /// TYPES ///
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/ban-types': 'off', // will be turned of with @typescript-eslint v8
      },
    },
  ],
};
