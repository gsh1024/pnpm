/**
 * 构建
 */

const shell = require('shelljs')

module.exports = () => {
  const build = shell.exec('npm run build')
  console.log(build.code)
}