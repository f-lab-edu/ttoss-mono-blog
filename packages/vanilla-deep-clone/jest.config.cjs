/** @type {import('jest').Config} */
const config = {
  verbose: true,
  transform: {
    '^.+\\.(js|jsx)?$': ['babel-jest', { rootMode: 'upward' }],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['**/*.test.{js,ts,jsx,tsx}'],
  testEnvironment: 'jest-environment-jsdom',
  roots: ['./'],
};

module.exports = config;
