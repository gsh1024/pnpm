/**
 * 应用构建
 */

const shell = require('shelljs')
const log = require('../log')

module.exports = (service) => {
  const deployConfig = service.deployConfig
  const build = deployConfig.build

  shell.echo(log.green('--- 环境信息 ---'))

  if (shell.exec('node -v').code || shell.exec('npm -v').code) {
    shell.exit(1)
  }

  shell.echo(log.green('--- 安装依赖 ---'))

  if (shell.exec('npm install').code) {
    shell.exit(1)
  }

  shell.echo(log.green('--- 代码检测 ---'))

  if (shell.exec('npx vue-cli-service lint').code) {
    shell.exit(1)
  }

  shell.echo(log.green('--- 应用构建 ---'))

  let report = ''
  let clean = ''
  if (build) {
    if (build.report) {
      if (build.report === 'html') {
        report = ' --report'
      } else if (build.report === 'json') {
        report = ' --report-json'
      }
    }
    if (!build.clean) {
      clean = ' --no-clean'
    }
  }
  if (shell.exec(`npx vue-cli-service build${report}${clean}`).code) {
    shell.exit(1)
  }
}