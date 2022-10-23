module.exports = {
  testPathForConsistencyCheck: 'src/components/some/Component.test.ts',
  resolveSnapshotPath: (testPath, snapshotExtension) => {
    return testPath
      .replace(/.test.([tj]s)x?/, `.test${snapshotExtension}.$1`)
      .replace(/src\/components\/some/, 'tests/__snapshots__');
  },
  resolveTestPath: (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath
      .replace(snapshotExtension, '')
      .replace('tests/__snapshots__', 'src/components/some');
  }
};
