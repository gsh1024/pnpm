/**
 * 命令服务
 */
const path = require('path')

const build = require('./commands/build')
const qiniu = require('./commands/qiniu')
const robot = require('./commands/robot')

module.exports = class Serive {

  constructor() {

  }

  checkConfig() {
    console.log('a')
  }
}