/** @type {import('jest').Config} */
const config = {
  verbose: true,
  setupFiles: ['./jest.polyfills.cjs'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)?$': ['babel-jest', { rootMode: 'upward' }],
  },
  transformIgnorePatterns: ['node_modules'],
  testMatch: ['**/*.test.{js,ts,jsx,tsx}'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
};

module.exports = config;
