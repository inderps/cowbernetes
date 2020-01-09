const assert = require('assert');
const {
  describe, it, beforeEach
} = require('mocha');
const fs = require('fs');
const { start } = require('./../../src/server/fetch-pods-worker');

describe('start', () => {
  beforeEach(() => {
    try {
      fs.unlinkSync('./integration/data/pods.json');
    } catch (err) { console.log(err); }
  });

  it('fetches pods data from kubernetes and saves it to a file', (done) => {
    const interval = start(10000, './integration/data/pods.json');

    setTimeout(() => {
      clearInterval(interval);
      const content = fs.readFileSync('./integration/data/pods.json', 'utf8');
      const pods = JSON.parse(content);
      // console.log(pods);
      assert.notEqual(pods.length, 0);
      done();
    }, 10000);
  });
});
