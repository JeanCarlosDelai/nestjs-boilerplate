import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import { folderStructureConfig } from './folder-structure.mjs';
import { projectStructurePlugin } from 'eslint-plugin-project-structure';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    ignores: [
      '**/stryker.config.mjs',
      '**/eslint.config.mjs',
      'folder-structure.mjs',
      'commitlint.config.js'
    ]
  },
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier,
      'no-relative-import-paths': noRelativeImportPaths,
      'project-structure': projectStructurePlugin
    },

    languageOptions: {
      globals: {
        ...globals.node
      },

      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'module',

      parserOptions: {
        project: 'tsconfig.json'
      }
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        }
      }
    },

    rules: {
      'project-structure/folder-structure': ['warn', folderStructureConfig],
      'no-console': 'warn',
      'prettier/prettier': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',

      'no-relative-import-paths/no-relative-import-paths': [
        'warn',
        {
          allowSameFolder: true,
          prefix: '@src',
          rootDir: 'src'
        }
      ],

      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@nestjs/config',
              importNames: ['ConfigModule', 'ConfigService'],
              message: 'Please use classes from @src/shared/module/config instead'
            }
          ]
        }
      ]
    }
  }
];
