exports.start = (getPods, saveToFile) => (interval, filePath) => {
  return setInterval(() => {
    const podsData = getPods();
    saveToFile(filePath, JSON.stringify(podsData));
  }, interval);
};
