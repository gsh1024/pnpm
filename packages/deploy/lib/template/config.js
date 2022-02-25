module.exports = {

  // 构建
  build: {

    // 生成包分析信息，html 或 json
    report: 'html',

    // 构建之前清除目标目录
    clean: false
  },

  // qshell 配置
  qshell: {

    // qupload 方法
    qupload: {

      // 空间
      bucket: 'picture',

      // 本地路径
      src_dir: 'dist',

      // 线上路径，xxx 为当前项目文件名
      key_prefix: 'static/xxx/',

      // 排除文件后缀
      skip_suffixes: '.html,.ico',

      // 日志文件
      log_file: 'qupload.log',

      // 检测新增
      rescan_local: true,

      // 并发数量
      thread_count: 2
    }
  },

  // 企微机器人
  robot: {

    // 指定开启环境
    open: ['test', 'pre', 'prod']
  }
}
