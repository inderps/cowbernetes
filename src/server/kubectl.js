const childProcess = require('child_process');
const { listOfYamls, yamlToObject } = require('./utils/yaml-processor');

const listOfPods = (singleYaml) => {
  const podsYaml = listOfYamls(singleYaml);
  return podsYaml.map(yaml => yamlToObject(yaml, ['Name', 'Status', 'Controlled By', 'Restart Count', 'Start Time']));
};

exports.getPods = () => {
  const podsYaml = childProcess.execSync('kubectl describe pods').toString();
  return listOfPods(podsYaml);
};

exports.getControllers = () => {
  const pods = exports.getPods();

  const controllers = [];

  pods.forEach((pod) => {
    if (controllers.filter(c => c.fullName === pod['Controlled By']).length === 0 && !pod['Controlled By'].startsWith('Job')) {
      controllers.push({
        fullName: pod['Controlled By'],
        name: pod['Controlled By'].split('/')[1],
        pods: pods.filter(p => p['Controlled By'] === pod['Controlled By']).map(p => ({ status: p.Status, name: p.Name }))
      });
    }
  });

  controllers.push({
    fullName: 'Jobs',
    name: 'Jobs',
    pods: pods.filter(p => p['Controlled By'].startsWith('Job')).map(p => ({ status: p.Status, name: p.Name }))
  });

  return controllers;
};
