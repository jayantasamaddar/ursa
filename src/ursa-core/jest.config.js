module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['../../config/jest/storybook-setup.js'],
  snapshotSerializers: [
    /* if needed other snapshotSerializers should go here */
    '@emotion/jest/serializer',
    '<rootDir>/config/jest/dynamic-id-serializer.js' // Serializes Dynamic IDs
  ],
  snapshotResolver: '<rootDir>/config/jest/snapshot-resolver.js',
  moduleNameMapper: {
    '^.+\\.svg.*js$': '<rootDir>/config/jest/__mocks__/SvgMock.tsx'
  }
};
