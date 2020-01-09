const childProcess = require('child_process');
const { getPods } = require('./kubectl');

cmdExec = command => {
  return childProcess.execSync(command).toString();
} 

exports.getPods = () => {
  return getPods(cmdExec)();
};
