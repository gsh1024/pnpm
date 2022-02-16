#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { Command } = require('commander')
const program = new Command()
const qshellConfig = require(path.resolve('qshell.config.js'))

console.log(qshellConfig)

// program
//   .name('jz-qshell')
//   .description('jz-qshell 是一款基于七牛 qshell 的定制化命令工具')
//   .version('0.1.0')

// program
//   .command('init')
//   .description('初始化 jz-qshell')

// program.command('qupload')
//   .description('数据上传 - 配置式')
//   .action((str, options) => {
//     console.log(options.args)
//     // console.log(options)
//     // const limit = options.first ? 1 : undefined;
//     // console.log(str.split(options.separator, limit));
//   })

// program.parse()