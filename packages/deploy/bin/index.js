#!/usr/bin/env node

/**
 * 可自行命令入口
 */

// const { EOL } = require('os')
const { Command } = require('commander')
const program = new Command()
const package = require('../package.json')
const log = require('../lib/log')
const Service = require('../lib/service')

// 命令 - 描述
program
  .name('jz-deploy')
  .description('JZ-Deploy 是一款由简知前端自研，致力于让简知前端应用 CI/CD 流程更加简单高效的 CLI 工具~')
  .version(package.version, '-v, --version', '输出版本信息')
  .usage('<command> [options]')
  .helpOption('-h, --help', '显示命令帮助信息')
  .addHelpCommand(false)
  .addHelpText('after', `\n运行 ${log.cyan('jz-deploy <command> -h')} 可查看指定命令帮助信息，或查看在线文档 https://jz-tech.yuque.com/jz-tech/fe-cicd`)

// 命令 - 初始化配置
program
  .command('init')
  .description('初始化配置')
  .option('-s --server <options...>', '服务端，<属性=值 + 空格 + 属性=值>')
  .option('-p --project', '项目端')
  .action((...params) => {
    const argsLength = Object.keys(params[0]).length
    if (argsLength === 0) {
      log.warn('请指定初始化环境，可通过 -h 查看帮助')
      return
    }
    if (argsLength > 1) {
      log.warn('不允许同时初始化服务端和项目端配置')
      return
    }
    new Service(params).cmd('init')
  })

// 命令 - 启动部署服务
program
  .command('start')
  .description('启动部署服务')
  .option('-e --env <option>', '指定运行环境: test、pre、prod')
  .action((...params) => {
    const argsLength = Object.keys(params[0]).length
    if (argsLength === 0) {
      log.warn('请指定启动环境，可通过 -h 查看帮助')
      return
    }
    const service = new Service(params)
    const serverConfig = service.checkServerConfig(true)
    const deployConfig = service.checkDeployConfig(true)
    if (deployConfig && serverConfig) {
      service.cmd('build')
      service.cmd('qiniu')
      service.cmd('robot', {
        code: 200
      })
      // console.log(EOL + log.green('--- CI/CD 任务执行完成 ---'))
    }
  })

// 命令 - 查看配置
program
  .command('show')
  .description('查看配置信息')
  .option('-s --server', '查看服务端配置')
  .option('-p --project', '查看项目端配置')
  .action((...params) => {
    const argsLength = Object.keys(params[0]).length
    if (argsLength === 0) {
      log.warn('请指定查看环境，可通过 -h 查看帮助')
      return
    }
    new Service(params).cmd('show')
  })

// 命令 - 解析配置
program.parse()