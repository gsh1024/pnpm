/**
 * 企微机器人
 * 200: 任务执行成功
 * 201: 依赖安装错误
 * 202: 代码检测错误
 * 203: 自动测试错误
 * 204: 应用构建错误
 * 205: 资源部署错误
 * 206: 应用分发错误
 */

const { EOL } = require('os')
const shell = require('shelljs')
const log = require('../log')

module.exports = (service, options) => {
  const env = process.env
  const args = service.params[0]
  const serverConfig = service.serverConfig
  const { name, robot } = service.deployConfig

  // 测试数据
  // env.BUILD_URL = 'https://baidu.com'
  // env.JOB_NAME = '测试'
  // env.JOB_URL = 'https://baidu.com'
  // env.GIT_BRANCH = '测试'
  // env.GIT_COMMIT = '测试'
  // env.BUILD_ID = 100
  // env.BUILD_URL = 'https://baidu.com'

  // 开启通知
  if (
    robot &&
    robot.open &&
    robot.open.length &&
    robot.open.includes(args.env)
  ) {
    shell.echo(log.green('--- 企微机器人通知 ---'))

    let key = serverConfig[`${args.env}Key`]
    if (key) {
      const consoleUrl = `${env.BUILD_URL}consoleText`
      const info = {
        msgtype: 'template_card',
        template_card: {
          card_type: 'text_notice',
          source: {
            desc: '前端应用发布通知',
            desc_color: options.code === 200 ? 3 : 2,
            icon_url: `https://cq1.jianzhishuyuan.net/static/img/${options.code === 200 ? 'success' : 'fail'}.png?v=123`
          },
          main_title: {
            title: name || '未知',
            desc: service.formatDate()
          },
          emphasis_content: {
            title: `${options.code || '未知'}`,
            desc: service.getCodeTips(options.code)
          },
          quote_area: {
            type: 0,
            quote_text: options.exec ? options.exec.stdout || options.exec.stderr : '',
            url: consoleUrl
          },
          horizontal_content_list: [
            {
              keyname: '任务环境',
              value: service.getTaskEnv(args.env),
              type: 0
            },
            {
              keyname: '任务名称',
              value: env.JOB_NAME || '未知',
              type: 0
            },
            {
              keyname: '任务分支',
              value: env.GIT_BRANCH || '未知',
              type: 0
            },
            {
              keyname: '执行次数',
              value: env.BUILD_ID || '0',
              type: 0
            },
            {
              keyname: '执行耗时',
              value: service.getExecTime(),
              type: 0
            },
            {
              keyname: '构建版本',
              value: env.GIT_COMMIT || '未知',
              type: 0
            }
          ],
          jump_list: [
            {
              title: '查看任务执行FAQ',
              type: 1,
              url: 'https://jz-tech.yuque.com/jz-tech/fe-cicd/tk8uqt'
            },
            {
              title: '查看控制台详情',
              type: 1,
              url: consoleUrl
            },
            {
              title: '查看资源部署日志',
              type: 1,
              url: env.JOB_URL + 'ws/qupload.log'
            }
          ],
          card_action: {
            type: 1,
            url: env.BUILD_URL
          }
        }
      }

      if (shell.exec(`curl 'https://qyapi.weixin.qq.com/cgi-bin/webhook/send?debug=1&key=${key}' -H 'Content-Type:application/json' -d '${JSON.stringify(info)}'`).code) {
        shell.echo(EOL)
        shell.exit(1)
      }

      if (options.code === 200) {
        shell.echo(EOL)
        shell.exit(0)
      }
    } else {
      log.error(`请检查通知机器人的 key 是否配置正确，可通过 ${log.green('jz-deploy show -t server')} 查看配置信息`)
      shell.exit(1)
    }
  }
}