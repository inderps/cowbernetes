exports.listOfYamls = (singleYaml) => {
  const list = [];
  let podYaml = '';

  singleYaml.split('\n').forEach((line) => {
    if (line === '' && podYaml !== '') {
      list.push(podYaml);
      podYaml = '';
    } else if (line !== '') {
      podYaml += `${line}\n`;
    }
  });

  return list;
};

exports.yamlToObject = (yaml, keys) => {
  const object = {};

  yaml.split('\n').forEach((line) => {
    if (line.startsWith('-')) {
      return;
    }
    const key = line.split(':')[0].trim();
    const val = line.split(':').slice(1).join('').trim();

    if (keys.includes(key) && object[key] === undefined) {
      object[key] = val;
    }
  });

  return object;
};
