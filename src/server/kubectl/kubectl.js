const { listOfYamls, yamlToObject } = require('./../utils/yaml-processor');

const listOfPods = (singleYaml) => {
  const podsYaml = listOfYamls(singleYaml);
  return podsYaml.map(yaml => yamlToObject(yaml, ['Name', 'Status', 'Controlled By', 'Restart Count', 'Start Time', 'Image']));
};

exports.getPods = cmdExec => () => {
  const podsYaml = cmdExec('kubectl describe pods');
  return listOfPods(podsYaml);
};
