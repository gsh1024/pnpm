/**
 * 信息打印
 */

const chalk = require("chalk")

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