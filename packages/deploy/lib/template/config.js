/**
 * CI/CD 配置文件，必填
 */

module.exports = {

  // 任务中文名
  name: '',

  // 项目基本URL，前后必须带有 / 斜杠
  publicPath: process.env.BUILD_ID ? '//cq1.jianzhishuyuan.net/assets/xxx/' : '/xxx/',

  // 应用分发，host 为主机id，dir 为部署目录
  ansible: {

    // 测试
    test: {
      host: 'test',
      dir: ''
    },

    // 预发布
    pre: {
      host: 'pre',
      dir: ''
    },

    // 线上，host 一般不固定
    prod: {
      host: '',
      dir: ''
    }
  },

  // 企微机器人
  robot: {

    // 指定开启环境
    open: ['test', 'pre', 'prod']
  }
}

