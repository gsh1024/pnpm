/**
 * 显示配置
 */

const log = require('../log')

module.exports = (service) => {
  const args = service.params[0]

  // 服务端配置
  if (args.server) {
    console.log(log.green('--- 服务端配置 ---'))
    console.log(service.serverConfig)
  }

  // 客户端配置
  if (args.project) {
    console.log(log.green('--- 项目端配置 ---'))
    console.log(service.deployConfig)
  }
}