const fs = require('fs');
const { fetchFarms } = require('./fetch-farms');

const readPodsData = filePath => (fs.readFileSync(filePath, 'utf8'));

exports.fetchFarms = filePath => () => (fetchFarms(readPodsData)(filePath));
