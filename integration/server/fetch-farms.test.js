const assert = require('assert');
const { describe, it } = require('mocha');
const { fetchFarms } = require('./../../src/server/fetch-farms');

describe('fetchFarms', () => {
  it('fetch pods data and parse it as farms', () => {
    const farms = fetchFarms('./integration/data/pods.json')();

    assert.equal(farms.length, 42);
    assert.deepEqual(Object.keys(farms[0]), ['fullName', 'name', 'cows']);
    assert.deepEqual(Object.keys(farms[0].cows[0]), ['name', 'status', 'version']);
  });
});
