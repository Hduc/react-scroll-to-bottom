const { relative } = require('path');
const AbortController = require('abort-controller');
const NodeEnvironment = require('jest-environment-node');

const { browserName } = require('../constants');

class ChromeEnvironment extends NodeEnvironment {
  constructor(config, context) {
    super(config, context);

    this.abortController = new AbortController();
    this.relativeTestPath = relative(process.cwd(), context.testPath);
    this.global.docker = browserName === 'chrome-docker';
  }

  async setup() {
    super.setup();

    const { signal } = this.abortController;

    this.global.abortSignal = signal;
  }

  async teardown() {
    this.abortController.abort();

    await super.teardown();
  }
}

module.exports = ChromeEnvironment;
