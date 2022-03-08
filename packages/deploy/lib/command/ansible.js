/**
 * 应用分发
 */

const shell = require('shelljs')
const log = require('../log')

module.exports = (service) => {
  const env = process.env
  const args = service.params[0]
  const { ansible, qshell } = service.deployConfig

  if (Object.keys(ansible).length) {

    shell.echo(log.green('--- 应用分发 ---'))

    const qupload = service.tplConfigDefault.qshell.qupload
    if (qshell && qshell.qupload) {
      Object.assign(qupload, qshell.qupload)
    }

    const command = `ansible-playbook /etc/ansible/yml/deploy-front.yml -e "key1=${ansible[args.env].host} key2=${env.JOB_NAME}/${qupload.src_dir} key3=${ansible[args.env].dir}"`

    console.log(command)

    const execAnsible = shell.exec(command)
    if (execAnsible.code) {
      service.cmd('robot', {
        code: 206,
        exec: execAnsible
      })
      shell.exit(1)
    }
  }
}