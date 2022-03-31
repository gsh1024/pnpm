/**
 * 应用构建
 */

const fs = require('fs')
const shell = require('shelljs')
const log = require('../log')

module.exports = (service) => {
  const options = Object.assign(service.tplConfigDefault.build, service.deployConfig.build || {})
  const packageJson = require(service.packageJson)
  const scripts = packageJson.scripts || {}
  if (service.deployConfig.mpa) {
    shell.echo(log.green('--- 指令检测 ---'))

    // const env = {
    //   giteeActionType: 'MERGE',
    //   giteePullRequestDescription: '[ci-build](123,122)',
    //   jsonBody: {
    //     head_commit: {
    //       message: 'build123,12),[ci-build](a,f,s)\n'
    //     }
    //   }
    // }

    const env = process.env
    if (env.jsonBody) {
      const jsonBody = JSON.parse(env.jsonBody)
      const reg = /(?<=\[ci-build\]\().*?(?=\))/
      const setPages = msg => {
        const arr = msg.match(reg)
        if (arr && arr[0]) {
          let pages = arr[0].split(',')
          fs.writeFileSync(service.devConfigUrl, `module.exports=${JSON.stringify({
            build: pages
          })}`, {
            encoding: 'utf-8'
          })
          shell.echo(`pages: ${arr[0]}`)
        } else {
          service.cmd('robot', {
            code: 207,
            exec: {
              stdout: 'Missing [ci-build] parameter or parameter passing error.'
            }
          })
          shell.exit(1)
        }
      }
      if (env.giteeActionType === 'PUSH') {
        setPages(jsonBody.head_commit.message)
      }
      if (env.giteeActionType === 'MERGE' || env.giteeActionType === 'NOTE') {
        setPages(env.giteePullRequestDescription)
      }
    }
  }

  shell.echo(log.green('--- 环境信息 ---'))

  if (shell.exec('node -v').code || shell.exec('npm -v').code) {
    shell.exit(1)
  }

  shell.echo(log.green('--- 安装依赖 ---'))

  const execInstall = shell.exec('npm install')
  if (execInstall.code) {
    service.cmd('robot', {
      code: 201,
      exec: execInstall
    })
    shell.exit(1)
  }

  shell.echo(log.green('--- 代码检测 ---'))

  let execLint = shell.exec(scripts.lint ? 'npm run lint' : 'npx vue-cli-service lint')
  console.error(execLint)
  if (execLint.code) {
    service.cmd('robot', {
      code: 202,
      exec: execLint
    })
    shell.exit(1)
  }

  // 非必须
  if (scripts.test) {
    shell.echo(log.green('--- 自动测试 ---'))

    const execTest = shell.exec('npm run test')
    if (execTest.code) {
      service.cmd('robot', {
        code: 203,
        exec: execTest
      })
      shell.exit(1)
    }
  }

  shell.echo(log.green('--- 应用构建 ---'))

  let execBuild = {}
  if (scripts.build) {
    execBuild = shell.exec('npm run build')
  } else {
    let report = ''
    let clean = ''
    if (options.report === 'html') {
      report = ' --report'
    } else if (options.report === 'json') {
      report = ' --report-json'
    }
    if (!options.clean) {
      clean = ' --no-clean'
    }
    execBuild = shell.exec(`npx vue-cli-service build${report}${clean}`)
  }
  if (execBuild.code) {
    service.cmd('robot', {
      code: 204,
      exec: execBuild
    })
    shell.exit(1)
  }
}