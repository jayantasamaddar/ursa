module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['../../config/jest/storybook-setup.js'],
  snapshotSerializers: [
    /* if needed other snapshotSerializers should go here */
    '@emotion/jest/serializer'
  ]
};
