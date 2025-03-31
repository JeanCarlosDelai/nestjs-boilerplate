/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  packageManager: 'npm',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'vitest',
  coverageAnalysis: 'perTest',
  mutate: [
    '**/*.ts',
    '!**/*spec.ts',
    '!**/*js',
    '!**/*.dto.ts',
    '!**/*.filter.ts',
    '!**/*setup.ts',
    '**/*setup.e2e.ts',
    '!**/*main.ts',
    '!**/*swaggerSetup.ts',
    '!**/*interceptor.ts',
    '!**/*.decorator.ts',
  ],
};
export default config;
