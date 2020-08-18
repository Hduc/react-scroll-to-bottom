import { configureToMatchImageSnapshot } from 'jest-image-snapshot';

import { imageSnapshotOptions } from '../constants';

const toMatchImageSnapshot = configureToMatchImageSnapshot(imageSnapshotOptions);

global.expect && global.expect.extend({ toMatchImageSnapshot });
