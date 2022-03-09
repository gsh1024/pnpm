/**
 * 资源部署
 */

const path = require('path')
const shell = require('shelljs')
const log = require('../log')

module.exports = (service) => {
  const deployConfig = service.deployConfig

  shell.echo(log.green('--- 资源部署 ---'))

  const qupload = service.tplConfigDefault.qshell.qupload

  if (deployConfig.qshell && deployConfig.qshell.qupload) {
    Object.assign(qupload, deployConfig.qshell.qupload)
  }

  let pathName = deployConfig.publicPath.replace(/(^\s*)|(\s*$)/g, '')
  if (pathName === '' || pathName === '/') {
    pathName = '/xxx/'
  } else {
    pathName = `/${path.basename(pathName)}/`
  }

  Object.assign(qupload, {
    key_prefix: `assets${pathName}`
  })

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