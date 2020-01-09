const childProcess = require('child_process');
const { getPods } = require('./kubectl');

cmdExec = command => {
  return childProcess.execSync(command).toString();
} 

exports.getPods = () => {
  return getPods(cmdExec)();
};

// exports.getControllers = () => {
//   const pods = exports.getPods();

//   console.log(pods);

//   const controllers = [];

//   // pods.forEach((pod) => {
//   //   if (controllers.filter(c => c.fullName === pod['Controlled By']).length === 0 && !pod['Controlled By'].startsWith('Job')) {
//   //     controllers.push({
//   //       fullName: pod['Controlled By'],
//   //       name: pod['Controlled By'].split('/')[1],
//   //       pods: pods.filter(p => p['Controlled By'] === pod['Controlled By']).map(p => ({ status: p.Status, name: p.Name }))
//   //     });
//   //   }
//   // });

//   // controllers.push({
//   //   fullName: 'Jobs',
//   //   name: 'Jobs',
//   //   pods: pods.filter(p => p['Controlled By'].startsWith('Job')).map(p => ({ status: p.Status, name: p.Name }))
//   // });

//   return controllers;
// };
