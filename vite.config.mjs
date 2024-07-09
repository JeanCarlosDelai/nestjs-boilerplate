import dotenv from 'dotenv';
import swc from 'unplugin-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

dotenv.config();

export const userConfig = {
  plugins: [
    tsconfigPaths(),
    swc.vite({
      module: { type: 'es6' },
    }),
  ],
  test: {
    globals: true,
    root: './',
    coverage: {
      exclude: [
        '**/*.module.ts',
        '**/*spec.ts',
        '**/*.filter.ts',
        '**/*.js',
        '**/*config.ts',
        '**/*.interceptor.ts',
        '**/*main.ts',
        '**/*setup.ts',
        '**/*setup.e2e.ts',
        '**/*.mjs',
      ],
    },
  },
};

export default defineConfig(userConfig);
