exports.fetchFarms = readPodsData => (filePath) => {
  const pods = JSON.parse(readPodsData(filePath));

  const farms = [];

  pods.forEach((pod) => {
    if (farms.filter(c => c.fullName === pod['Controlled By']).length === 0 && !pod['Controlled By'].startsWith('Job')) {
      farms.push({
        fullName: pod['Controlled By'],
        name: pod['Controlled By'].split('/')[1],
        cows: pods.filter(p => p['Controlled By'] === pod['Controlled By']).map(p => ({ status: p.Status, name: p.Name }))
      });
    }
  });

  farms.push({
    fullName: 'Jobs',
    name: 'Jobs',
    cows: pods.filter(p => p['Controlled By'].startsWith('Job')).map(p => ({ status: p.Status, name: p.Name }))
  });

  return farms;
};
