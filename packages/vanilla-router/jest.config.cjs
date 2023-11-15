/** @type {import('jest').Config} */
const config = {
  verbose: true,
  testMatch: ['**/*.test.{js,ts,jsx,tsx}'],
  testEnvironment: 'jsdom',
  roots: ['./src'],
};

module.exports = config;
