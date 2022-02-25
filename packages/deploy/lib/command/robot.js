/**
 * 企微机器人
 * 200: 任务执行成功
 * 201: 依赖安装错误
 * 202: 代码检测错误
 * 203: 应用构建错误
 * 204: 资源部署错误
 */

const shell = require('shelljs')
const log = require('../log')

module.exports = (service, options) => {
  const serverConfig = service.serverConfig
  const deployConfig = service.deployConfig
  const robot = serverConfig.robot
  const env = process.env

  // 校验
  const args = service.params[0]
  const argsLength = Object.keys(args).length
  if (argsLength === 0) {
    log.warn('请带上参数，可通过 -h 查看帮助')
    return
  }

  // 开启通知
  if (
    deployConfig.robot &&
    deployConfig.robot.open &&
    deployConfig.robot.open.length &&
    deployConfig.robot.open.includes(args.env)
  ) {
    shell.echo(log.green('--- 企微机器人通知 ---'))

    let key = serverConfig[`${args.env}Key`]
    if (key) {
      const info = {
        msgtype: 'template_card',
        template_card: {
          card_type: 'text_notice',
          source: {
            desc: '- 前端应用发布通知 -',
            desc_color: options.code === 200 ? 3 : 2
          },
          main_title: {
            title: '简知平台H5学习环境',
            desc: service.formatDate()
          },
          emphasis_content: {
            title: `${options.code || '未知'}`,
            desc: service.getCodeTips(options.code)
          },
          quote_area: {
            type: 0
          },
          horizontal_content_list: [
            {
              keyname: '任务分支',
              value: 'origin/master',
              type: 0
            },
            {
              keyname: '执行次数',
              value: "120",
              type: 0
            },
            {
              keyname: '执行耗时',
              value: service.getExecTime(),
              type: 0
            },
            {
              keyname: '通知员工',
              type: 3,
              userid: 'NingJingZhiYuan'
            },
            {
              keyname: '构建版本',
              value: 'fdc5127f35c022ffced763ecf47cf67b3ed706db',
              type: 0
            }
          ],
          card_action: {
            type: 1,
            url: 'https://baidu.com'
          }
        }
      }

      if (shell.exec(`curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?debug=1&key=${key}' -H 'Content-Type:application/json' -d '${JSON.stringify(info)}'`).code) {
        shell.exit(1)
      }
    } else {
      log.error(`请检查通知机器人的 key 是否配置正确，可通过 ${log.green('jz-deploy show -c server')} 查看配置信息`)
      shell.exit(1)
    }
  }
}