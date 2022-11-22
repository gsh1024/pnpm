/**
 * 信息打印
 */

const chalk = require("chalk")

// 注意，只有以下自定义方法是带直接输出的，其他 chalk 自带方法需要外层包 console.log(log.red('xxx'))

// 提示
chalk.info = msg => {
  console.log(`${chalk.green('提示: ')}${msg}`)
}

// 警告
chalk.warn = msg => {
  console.log(`${chalk.yellow('警告: ')}${msg}`)
}

// 错误
chalk.error = msg => {
  console.log(`${chalk.red('错误: ')}${msg}`)
}

module.exports = chalk