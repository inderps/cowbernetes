const assert = require('assert');
const {
  describe, it, beforeEach, afterEach
} = require('mocha');
const sinon = require('sinon');
const { start } = require('./../../src/server/fetch-pods-worker/fetch-pods-worker');

describe('start', () => {
  beforeEach(() => {
    this.clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    this.clock = sinon.restore();
  });

  it('fetches pods data from kubernetes and saves it to a file', (done) => {
    const getPods = () => ([{ foo: 'bar' }]);

    const saveToFile = (filePath, data) => {
      assert.equal(filePath, './test/data/pods.json');
      assert.equal(data, '[{"foo":"bar"}]');
      done();
    };

    start(getPods, saveToFile)(10000, './test/data/pods.json');

    this.clock.tick(10001);
  });
});
