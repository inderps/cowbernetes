const fs = require('fs');
const { fetchFarms } = require('./fetch-farms');

const readPodsData = filePath => {
  return fs.readFileSync(filePath, 'utf8');
}

exports.fetchFarms = filePath => () => {
  return fetchFarms(readPodsData)(filePath);
};
