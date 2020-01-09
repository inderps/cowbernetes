const childProcess = require('child_process');
const { getPods } = require('./kubectl');

const cmdExec = command => (childProcess.execSync(command).toString());

exports.getPods = () => (getPods(cmdExec)());
