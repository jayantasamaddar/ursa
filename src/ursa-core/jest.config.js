module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['../../config/jest/storybook-setup.js'],
  snapshotSerializers: [
    /* if needed other snapshotSerializers should go here */
    '@emotion/jest/serializer'
  ],
  moduleNameMapper: {
    '^.+\\.svg.*js$': '<rootDir>/config/__mocks__/SvgMock.tsx',
    '\\.svg$': '<rootDir>/config/jest-transform-image.js'
  }
};
