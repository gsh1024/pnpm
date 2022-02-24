/**
 * 命令服务
 */

const fs = require('fs')
const os = require('os')
const path = require('path')
const log = require('./log')

module.exports = class Service {

  // 配置
  constructor() {
    this.robotConfig = path.join(__dirname, './', 'template/robot-config.js')
    this.tplConfig = path.join(__dirname, './', 'template/config.js')
    this.deployConfig = path.resolve('./deploy.config.js')
    this.vueConfig = path.resolve('./vue.config.js')
  }

  // 检测配置，errorTips 为 true 则输出报错信息
  checkConfig(errorTips = false) {
    try {
      const config = require(this.deployConfig)
      if (Object.keys(config).length) {
        return config
      } else {
        if (errorTips) {
          log.error(`请检查 ${log.cyan('deploy.config.js')} 文件是否配置正确。`)
        }
        return false
      }
    } catch (error) {
      if (errorTips) {
        log.error(`没有找到 ${log.cyan('deploy.config.js')} 配置文件，请在项目中运行 ${log.green('jz-deploy init -c')} 命令生成该文件。`)
      }
      return false
    }
  }

  // 环境
  env() {
    const type = os.type()
    let str = type === 'linux' ? 'server' : 'client'
    return 'server'
  }

  // 命令
  cmd(name, arg) {
    require(`./command/${name}`)(this, arg)
  }
}
