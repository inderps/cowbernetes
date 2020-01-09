exports.start = (getPods, saveToFile) => (interval, filePath) => (
  setInterval(() => {
    const podsData = getPods();
    saveToFile(filePath, JSON.stringify(podsData));
  }, interval)
);
