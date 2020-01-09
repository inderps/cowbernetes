const fs = require('fs');
const { getPods } = require('./../kubectl');
const { start } = require('./fetch-pods-worker');

const saveToFile = (filePath, data) => {
  fs.writeFileSync(filePath, data);
};

exports.start = (interval, filePath) => (start(getPods, saveToFile)(interval, filePath));
