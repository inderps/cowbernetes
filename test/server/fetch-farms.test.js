const assert = require('assert');
const {
  describe, it
} = require('mocha');
const fs = require('fs');
const { fetchFarms } = require('./../../src/server/fetch-farms/fetch-farms');

const podsData = fs.readFileSync('./test/data/pods.json', 'utf8');

describe('fetchFarms', () => {
  it('should return farms', () => {
    const readPodsData = () => (podsData);

    const farms = fetchFarms(readPodsData)();

    assert.equal(farms.length, 42);
    assert.deepEqual(Object.keys(farms[0]), ['fullName', 'name', 'cows']);
    assert.deepEqual(Object.keys(farms[0].cows[0]), ['status', 'name']);
  });
});
