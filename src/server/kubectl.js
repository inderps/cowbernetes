const execSync = require('child_process').execSync;

exports.getPods = () => {

  const podsYaml = execSync('kubectl describe pods').toString().split('\n')

  const pods = []
  let pod = {}

  podsYaml.forEach(line => {
    if (line.startsWith('Name:')) {
      pod.name = line.match(/Name:               (.*)/)[1]
    } else if(line.startsWith('Status:')) {
      pod.status = line.match(/Status:             (.*)/)[1]
    } else if(line.startsWith('Controlled By:')) {
      pod.controller = line.match(/Controlled By:      (.*)/)[1]
      pods.push(pod)
      pod = {}
    }
  })

  return pods
}

exports.getControllers = () => {
  const pods = exports.getPods()

  const controllers = []
  const controller = {}

  pods.forEach(pod => {
    if (controllers.filter(c => c.fullName === pod.controller).length === 0) {
      controllers.push({
        fullName: pod.controller,
        name: pod.controller.split('/')[1],
        pods: pods.filter(p => p.controller === pod.controller).map(p => ({ status: p.status, name: p.name }))
      })
    }
  })

  return controllers;
}
