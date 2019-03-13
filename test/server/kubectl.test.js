const assert = require('assert');
const {
  describe, it, beforeEach, afterEach
} = require('mocha');
const { stub } = require('sinon');
const fs = require('fs');
const childProcess = require('child_process');
const { getPods, getControllers } = require('./../../src/server/kubectl');

const describePodsResponse = fs.readFileSync('./test/data/describe-pods.yaml');

describe('getPods', () => {
  let execSync;
  beforeEach(() => {
    execSync = stub(childProcess, 'execSync');
    execSync.withArgs('kubectl describe pods').returns(describePodsResponse);
  });

  afterEach(() => {
    execSync.restore();
  });

  it('should return pods', () => {
    const pods = getPods();
    assert.equal(pods.length, 29);
  });

  it('should return controllers', () => {
    const controllers = getControllers();
    assert.equal(controllers.length, 17);
  });
});
