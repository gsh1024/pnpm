/**
 * 初始化配置
 */

const fs = require('fs')
const { EOL, type } = require('os')
const log = require('../log')

module.exports = (service) => {

  const args = service.params[0]
  const env = service.env()

  // 服务端
  if (args.server) {
    try {
      fs.statSync(service.serverConfigDir).isDirectory()
    } catch (error) {
      fs.mkdirSync(service.serverConfigDir)
    }
    let obj = {}
    args.server.forEach(item => {
      if (item.includes('=') && item.split('=')[1]) {
        obj[item.split('=')[0]] = item.split('=')[1]
      } else {
        log.error(`请配置好选项 - ${log.yellow(item.split('=')[0])}`)
      }
    })
    let serverConfig = Object.assign(service.serverConfig || {}, obj)
    fs.writeFileSync(service.serverConfigUrl, `module.exports=${JSON.stringify(serverConfig)}`, {
      encoding: 'utf-8'
    })
    log.info('服务配置初始化成功~')
  }

  // 项目端
  if (args.project) {
    if (env === 'client') {
      const config = service.checkDeployConfig()
      if (config) {
        log.warn(`${log.green('deploy.config.js')} 文件已经存在。`)
      } else {
        const tplConfig = fs.readFileSync(service.tplConfigUrl, {
          encoding: 'utf-8'
        })
        const lines = tplConfig.split(/\r?\n/g)
        fs.writeFileSync(service.deployConfigUrl, lines.join(EOL), {
          encoding: 'utf-8'
        })
        log.info('配置初始化成功~')
      }
    } else {
      log.warn('不允许在服务端允许该命令')
    }
  }
}