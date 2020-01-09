const assert = require('assert');
const {
  describe, it
} = require('mocha');
const fs = require('fs');
const { getPods } = require('./../../src/server/kubectl/kubectl');

const describePodsResponse = fs.readFileSync('./test/data/describe-pods.yaml', 'utf8');

describe('getPods', () => {
  it('should return pods', () => {
    const cmdExec = () => (describePodsResponse);

    const pods = getPods(cmdExec)();

    assert.equal(pods.length, 26);
  });
});
