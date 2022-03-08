/**
 * 资源部署
 */

const shell = require('shelljs')
const log = require('../log')

module.exports = (service) => {
  const deployConfig = service.deployConfig

  shell.echo(log.green('--- 资源部署 ---'))

  const qupload = service.tplConfigDefault.qshell.qupload

  if (deployConfig.qshell && deployConfig.qshell.qupload) {
    Object.assign(qupload, deployConfig.qshell.qupload)
  }

  if (deployConfig.publicPath) {
    Object.assign(qupload, {
      key_prefix: `assets${deployConfig.publicPath}`
    })
  }

  let options = ''
  for (let i in qupload) {
    options += ` --${i.replace(/_/g, '-')}=${qupload[i]}`
  }

  const execUpload = shell.exec(`qshell qupload2${options}`)
  if (execUpload.code) {
    service.cmd('robot', {
      code: 205,
      exec: execUpload
    })
    shell.exit(1)
  }

  shell.rm('-rf', 'dist/css')
  shell.rm('-rf', 'dist/img')
  shell.rm('-rf', 'dist/js')
}