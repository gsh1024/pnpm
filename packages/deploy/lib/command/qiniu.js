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

  if (shell.exec(`qshell qupload2${options}`).code) {
    shell.exit(1)
  }
}