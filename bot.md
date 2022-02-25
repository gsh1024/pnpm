#!/usr/bin/python3
# -*- coding: iso-8859-15 -*-
import os
BuildTime=os.getenv("BUILD_TIMESTAMP")
BuildNumber=os.getenv("BUILD_NUMBER")
JobName=os.getenv("JOB_NAME")
UrlJob=os.getenv("BUILD_URL")
alarm_contact=os.getenv("AlarmContact")
GitCommit=os.getenv("GIT_COMMIT")
GIT_BRANCH=os.getenv("GIT_BRANCH")

WeChat_url = "https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=261da23b-77f9-4fa8-b5c2-902ced078fed"

import json
import requests
import sys

data = json.dumps(
            {
                "msgtype": "markdown",
                "markdown": {
                    "content": "# <font color=\"warning\">前端：持续集成与持续部署通知</font> \n"
                               ">任务名称：<font color=\"comment\">%s</font> \n"
                               ">任务分支：<font color=\"comment\">%s</font> \n"
                               ">任务地址：[%s](%s) \n"
                               ">构建时间：<font color=\"comment\">%s</font> \n"
                               ">构建次数：<font color=\"comment\">%s</font> \n"
                               ">构建版本：<font color=\"comment\">%s</font> \n"
                               ">任务状态：<font color=\"info\">已完成</font> \n"  %(JobName,GIT_BRANCH,UrlJob,UrlJob,BuildTime,BuildNumber,GitCommit),
                },
            }
        )
requests.post(WeChat_url, data, auth=('Content-Type', 'application/json'))



      // const info = {
      //   msgtype: 'markdown',
      //   markdown: {
      //     content:
      //       `<font color="info">前端 CI/CD 通知</font> \n` +
      //       `>任务名称：<font color="comment">${env.JobName}</font> \n` +
      //       `>任务分支：<font color="comment">${env.GIT_BRANCH}</font> \n` +
      //       `>任务地址：[${env.UrlJob}](${env.UrlJob}) \n` +
      //       `>构建时间：<font color="comment">${env.BuildTime}</font> \n` +
      //       `>构建次数：<font color="comment">${env.BuildNumber}</font> \n` +
      //       `>构建版本：<font color="comment">${env.GitCommit}</font> \n` +
      //       `>任务状态：<font color="info">已完成</font> \n`
      //   }
      // }