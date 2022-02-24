#!/usr/bin/env node

/**
 * 可自行命令入口
 */

const path = require('path')
const shell = require('shelljs')
const { Command } = require('commander')
const program = new Command()
const log = require('../lib/log')
const Service = require('../lib/service')
const service = new Service()


// 命令 - 描述
program
  .name('jz-deploy')
  .description('jz-deploy 是一款由简知前端研发的应用部署 CLI 工具，旨在让 CD 持续部署流程更加简单高效~')
  .version('0.1.0', '-v, --version', '输出版本信息')
  .usage('<command> [options]')
  .helpOption('-h, --help', '显示命令帮助信息')
  .addHelpCommand(false)
  .addHelpText('after', `\n运行 ${log.cyan('jz-deploy <command> -h')} 可查看指定命令帮助信息`)

// .option('-e, --env', '指定部署环境，test 测试，pre 预发布，prod 生产')
// .option('-r, --robot', '开启企微机器人通知')

// 命令 - 初始化配置
program
  .command('init')
  .description('初始化配置')
  .option('-s --server <server...>', '服务端，<生产企微机器人key, 测试和预发布企微机器人key>')
  .option('-c --client', '客户端')
  .action((...params) => service.cmd('init', params))

// 命令 - 启动部署服务
program
  .command('start')
  .description('启动部署服务')
  .action((str, opts) => {
    const config = service.checkConfig(true)
    console.log(config)
    if (config) {

    }
    // console.log(str)
    // console.log(opts.args)
    // console.log(opts.optsWithGlobals())
  })

// 命令 - 解析配置
program.parse()

// const opts = program.opts()

// if (opts.robot) {

// }