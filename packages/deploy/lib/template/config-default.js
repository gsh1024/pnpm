/**
 * CI/CD 配置文件，默认非必填
 */

module.exports = {

  // 构建
  build: {

    // 生成包分析信息，html 或 json
    report: 'html',

    // 构建之前清除目标目录
    clean: true
  },

  // 资源部署
  qshell: {

    // qupload 方法
    qupload: {

      // 并发数量
      thread_count: 2,

      // 空间
      bucket: 'picture',

      // 本地路径
      src_dir: 'dist',

      // 线上路径，xxx 为当前项目文件名
      key_prefix: 'assets/xxx/',

      // 排除文件后缀
      skip_suffixes: '.html,.ico',

      // 检测新增
      rescan_local: true,

      // 检测是否在空间中存在
      check_exists: true,

      // 检测大小，避免同名内容不同
      check_size: true
    }
  }
}

