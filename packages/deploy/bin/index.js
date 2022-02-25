#!/usr/bin/env node

/**
 * 可自行命令入口
 */

const { EOL, type } = require('os')
const { Command } = require('commander')
const program = new Command()
const log = require('../lib/log')
const Service = require('../lib/service')

// 命令 - 描述
program
  .name('jz-deploy')
  .description('jz-deploy 是一款由简知前端研发的应用部署 CLI 工具，旨在让 CD 持续部署流程更加简单高效~')
  .version('0.1.0', '-v, --version', '输出版本信息')
  .usage('<command> [options]')
  .helpOption('-h, --help', '显示命令帮助信息')
  .addHelpCommand(false)
  .addHelpText('after', `\n运行 ${log.cyan('jz-deploy <command> -h')} 可查看指定命令帮助信息`)

// 命令 - 初始化配置
program
  .command('init')
  .description('初始化配置')
  .option('-s --server <options...>', '服务端，<属性=值 + 空格 + 属性=值>')
  .option('-c --client', '客户端')
  .action((...params) => new Service(params).cmd('init'))

// 命令 - 启动部署服务
program
  .command('start')
  .description('启动部署服务')
  .option('-e --env <option>', '指定运行环境: test、pre、prod')
  .action((...params) => {
    const service = new Service(params)
    const serverConfig = service.checkServerConfig(true)
    const deployConfig = service.checkDeployConfig(true)
    if (deployConfig && serverConfig) {
      service.cmd('build')
      service.cmd('qiniu')
      service.cmd('robot', {
        code: 200
      })
      console.log(EOL + log.green('CI/CD 任务执行完成~'))
    }
  })

// 命令 - 解析配置
program.parse()