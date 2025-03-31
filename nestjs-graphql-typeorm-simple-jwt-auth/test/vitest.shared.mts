import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';
import swc from 'unplugin-swc';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    swc.vite({
      module: { type: 'es6' }
    })
  ],
  resolve: {
    alias: {
      '@src': '/src'
    }
  },
  test: {
    globals: true,
    root: './',
    clearMocks: true
  }
});
