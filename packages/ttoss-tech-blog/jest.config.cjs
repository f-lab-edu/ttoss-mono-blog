/** @type {import('jest').Config} */
const config = {
  verbose: true,
  cache: false,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/build/coverage/',
  setupFiles: ['./jest.polyfills.cjs'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.(js|jsx)?$': ['babel-jest', { rootMode: 'upward' }],
  },
  transformIgnorePatterns: ['/node_modules/', '<rootDir>/node_modules/'],
  testMatch: ['**/*.test.{js,ts,jsx,tsx}'],
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};

module.exports = config;
