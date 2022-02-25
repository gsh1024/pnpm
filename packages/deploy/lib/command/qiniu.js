/**
 * 资源部署
 */

const shell = require('shelljs')
const log = require('../log')

module.exports = (service) => {
  const deployConfig = service.deployConfig
  const qupload = deployConfig.qshell.qupload

  shell.echo(log.green('--- 资源部署 ---'))

  let options = ''
  for (let i in qupload) {
    options += ` --${i.replace(/_/g, '-')}=${qupload[i]}`
  }

  const execUpload = shell.exec(`qshell qupload2${options}`)
  if (execUpload.code) {
    service.cmd('robot', {
      code: 204,
      exec: execUpload
    })
    shell.exit(1)
  }
}