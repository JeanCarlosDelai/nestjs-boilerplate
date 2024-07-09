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
    include: ['**/*.e2e-spec.ts'],
    setupFiles: ['./test/e2e/vitest-setup.e2e.ts'],
    root: './',
  },
};

export default defineConfig(userConfig);
