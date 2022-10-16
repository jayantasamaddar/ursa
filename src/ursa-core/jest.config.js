module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['../../config/jest/storybook-setup.js'],
  snapshotSerializers: [
    /* if needed other snapshotSerializers should go here */
    '@emotion/jest/serializer',
    '<rootDir>/config/dynamic-id-serializer.js' // Serializes Dynamic IDs
  ],
  moduleNameMapper: {
    '^.+\\.svg.*js$': '<rootDir>/config/__mocks__/SvgMock.tsx'
  }
};
