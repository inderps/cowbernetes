const assert = require('assert');
const { describe, it } = require('mocha');
const { getPods } = require('./../../src/server/kubectl');

describe('getPods', () => {
  it('should return pods', () => {
    const pods = getPods();
    // console.log(pods);
    assert.notEqual(pods.length, 0);
  });
});
