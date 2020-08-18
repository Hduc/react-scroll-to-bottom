import { join } from 'path';

const browserName = 'chrome-docker';

const imageSnapshotOptions = {
  customDiffConfig: {
    threshold: 0.14
  },
  customSnapshotsDir: join(__dirname, '../../../__tests__/__image_snapshots__/', browserName)
};

const timeouts = {
  test: 10000
};

module.exports = { browserName, imageSnapshotOptions, timeouts };
