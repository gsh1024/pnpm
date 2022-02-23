#!/usr/bin/env node

const path = require('path')

const shell = require('shelljs')


// const build = require('../lib/build')
// const qiniu = require('../lib/qiniu')
// const robot = require('../lib/robot')

const { Command } = require('commander')
const program = new Command()

const service = require('../lib/service')
// const qshellConfig = require(path.resolve('./qshell.config.js'))

// console.log(qshellConfig)

program
  .name('jz-deploy')
  .description('jz-deploy 是一款简知前端应用部署工具，旨在让 CD 流程更加简单高效~')
  .version('0.1.0', '-v, --version', '输出版本信息')

program
  .helpOption('-h, --help', ' 显示帮助信息')
  .option('-e, --env', '指定部署环境，test 测试，pre 预发布，prod 生产')
  .option('-r, --robot', '开启企微机器人通知')

program
  .command('init')
  .description('初始化配置文件 deploy.config.js')
  .option('-h, --help', '查看')
  .action((str, opts) => {
    console.log(str)
  })


program.parse()

const opts = program.opts()

if (opts.robot) {

}



console.log(opts)
console.log(program.args)

service.run()

// jz-deploy
// program
//   .name('jz-qshell')
//   .description('jz-qshell 是一款基于七牛 qshell 的定制化命令工具')
//   .version('0.1.0')

// program
//   .command('qupload')
//   .description('数据上传 - 配置式')
//   .action((str, options) => {
//     console.log(options.args)
//   })
