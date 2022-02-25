
Skip to content
[Jenkins]Jenkins
查找
2
4
admin@admin.com
注销
Dashboard
cicd
#61

返回到工程

状态集

变更记录

控制台输出

文本方式查看

编辑编译信息

删除构建 ‘#61’

轮询日志

Environment Variables

Git Build Data

Splunk

打开 Blue Ocean

上一次构建
控制台输出
Triggered by Gitee Pull Request #15: jz-fe/dev_001 => test
Running as SYSTEM
[EnvInject] - Loading node environment variables.
Building in workspace /data/jenkins/workspace/cicd
The recommended git tool is: NONE
using credential bf1e6eee-9180-4525-b571-a4ac7a3026ac
 > git rev-parse --resolve-git-dir /data/jenkins/workspace/cicd/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url https://gitee.com/jz-fe/cicd.git # timeout=10
Fetching upstream changes from https://gitee.com/jz-fe/cicd.git
 > git --version # timeout=10
 > git --version # 'git version 1.8.3.1'
using GIT_ASKPASS to set credentials 
 > git fetch --tags --progress https://gitee.com/jz-fe/cicd.git +refs/pull/*/MERGE:refs/pull/*/MERGE # timeout=10
skipping resolution of commit be71ae51840e9f5f82862d4bf07bf69ad4a88d22, since it originates from another repository
 > git rev-parse refs/remotes/origin/pull/15/MERGE^{commit} # timeout=10
 > git rev-parse pull/15/MERGE^{commit} # timeout=10
Checking out Revision 6ae0cad18fcafc8677b79f8cbfb3e35e46372faf (pull/15/MERGE)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 6ae0cad18fcafc8677b79f8cbfb3e35e46372faf # timeout=10
Commit message: "Pre Merge pull request !15 from guoshuohui/dev_001"
First time build. Skipping changelog.
[Checks API] No suitable checks publisher found.
[cicd] $ /bin/bash /tmp/jenkins9173992631513389784.sh
--- 环境信息 ---
v14.15.5
6.14.11
--- node ---
{
  BUILD_URL: 'https://jenkins-test.jianzhikeji.com/job/cicd/61/',
  IFS: ' \t\n',
  giteeSourceRepoHttpUrl: 'https://gitee.com/jz-fe/cicd.git',
  giteeSourceRepoURL: 'https://gitee.com/jz-fe/cicd',
  giteeSourceRepoSshUrl: 'git@gitee.com:jz-fe/cicd.git',
  giteePullRequestState: 'merged',
  HUDSON_SERVER_COOKIE: '914932fbfead2c47',
  giteeTargetRepoSshUrl: 'git@gitee.com:jz-fe/cicd.git',
  giteeSourceBranch: 'dev_001',
  BUILD_TAG: 'jenkins-cicd-61',
  giteeSourceNamespace: 'jz-fe',
  ROOT_BUILD_CAUSE: 'SCMTRIGGER',
  giteeUserName: 'guoshuohui',
  WORKSPACE: '/data/jenkins/workspace/cicd',
  ref: 'refs/pull/15/MERGE',
  JOB_URL: 'https://jenkins-test.jianzhikeji.com/job/cicd/',
  giteeTargetRepoHttpUrl: 'https://gitee.com/jz-fe/cicd.git',
  RUN_CHANGES_DISPLAY_URL: 'https://jenkins-test.jianzhikeji.com/job/cicd/61/display/redirect?page=changes',
  USER: 'root',
  jsonBody: '{"action":"merge","action_desc":"merge","author":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"},"body":"env","enterprise":{"id":null,"name":"书院001","url":"https://gitee.com/shuyuan001"},"hook_id":894333,"hook_name":"merge_request_hooks","hook_url":"https://gitee.com/jz-fe/cicd/hooks/894333/edit","iid":15,"languages":["Vue","JavaScript","HTML"],"merge_commit_sha":"be71ae51840e9f5f82862d4bf07bf69ad4a88d22","merge_status":"can_be_merged","number":15,"password":"d6014813c7395e229a05adc423f55031","project":{"clone_url":"https://gitee.com/jz-fe/cicd.git","created_at":"2022-02-08T17:29:42+08:00","default_branch":"master","description":"cicd 测试仓库","fork":false,"forks_count":0,"full_name":"jz-fe/cicd","git_http_url":"https://gitee.com/jz-fe/cicd.git","git_ssh_url":"git@gitee.com:jz-fe/cicd.git","git_svn_url":"svn://gitee.com/jz-fe/cicd","git_url":"git://gitee.com/jz-fe/cicd.git","has_issues":true,"has_pages":false,"has_wiki":true,"homepage":"","html_url":"https://gitee.com/jz-fe/cicd","id":20731265,"language":null,"license":null,"name":"cicd","name_with_namespace":"简知前端/cicd","namespace":"jz-fe","open_issues_count":0,"owner":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"},"path":"cicd","path_with_namespace":"jz-fe/cicd","private":true,"pushed_at":"2022-02-25T14:57:22+08:00","ssh_url":"git@gitee.com:jz-fe/cicd.git","stargazers_count":0,"svn_url":"svn://gitee.com/jz-fe/cicd","updated_at":"2022-02-25T14:57:22+08:00","url":"https://gitee.com/jz-fe/cicd","watchers_count":1},"pull_request":{"additions":3006,"assignee":null,"assignees":[{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"}],"base":{"label":"简知前端:test","ref":"test","repo":{"clone_url":"https://gitee.com/jz-fe/cicd.git","created_at":"2022-02-08T17:29:42+08:00","default_branch":"master","description":"cicd 测试仓库","fork":false,"forks_count":0,"full_name":"jz-fe/cicd","git_http_url":"https://gitee.com/jz-fe/cicd.git","git_ssh_url":"git@gitee.com:jz-fe/cicd.git","git_svn_url":"svn://gitee.com/jz-fe/cicd","git_url":"git://gitee.com/jz-fe/cicd.git","has_issues":true,"has_pages":false,"has_wiki":true,"homepage":"","html_url":"https://gitee.com/jz-fe/cicd","id":20731265,"language":null,"license":null,"name":"cicd","name_with_namespace":"简知前端/cicd","namespace":"jz-fe","open_issues_count":0,"owner":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"},"path":"cicd","path_with_namespace":"jz-fe/cicd","private":true,"pushed_at":"2022-02-25T14:57:22+08:00","ssh_url":"git@gitee.com:jz-fe/cicd.git","stargazers_count":0,"svn_url":"svn://gitee.com/jz-fe/cicd","updated_at":"2022-02-25T14:57:22+08:00","url":"https://gitee.com/jz-fe/cicd","watchers_count":1},"sha":"aac31728011dbac51810a42bf5fe4e1f052131c7","user":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"}},"body":"env","changed_files":11,"closed_at":"2022-02-25T14:57:22+08:00","comments":0,"commits":3,"created_at":"2022-02-25T14:56:34+08:00","deletions":2830,"diff_url":"https://gitee.com/jz-fe/cicd/pulls/15.diff","head":{"label":"简知前端:dev_001","ref":"dev_001","repo":{"clone_url":"https://gitee.com/jz-fe/cicd.git","created_at":"2022-02-08T17:29:42+08:00","default_branch":"master","description":"cicd 测试仓库","fork":false,"forks_count":0,"full_name":"jz-fe/cicd","git_http_url":"https://gitee.com/jz-fe/cicd.git","git_ssh_url":"git@gitee.com:jz-fe/cicd.git","git_svn_url":"svn://gitee.com/jz-fe/cicd","git_url":"git://gitee.com/jz-fe/cicd.git","has_issues":true,"has_pages":false,"has_wiki":true,"homepage":"","html_url":"https://gitee.com/jz-fe/cicd","id":20731265,"language":null,"license":null,"name":"cicd","name_with_namespace":"简知前端/cicd","namespace":"jz-fe","open_issues_count":0,"owner":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"},"path":"cicd","path_with_namespace":"jz-fe/cicd","private":true,"pushed_at":"2022-02-25T14:57:22+08:00","ssh_url":"git@gitee.com:jz-fe/cicd.git","stargazers_count":0,"svn_url":"svn://gitee.com/jz-fe/cicd","updated_at":"2022-02-25T14:57:22+08:00","url":"https://gitee.com/jz-fe/cicd","watchers_count":1},"sha":"5dbc76b3789ad277e4cbaa1c5bffd0a524235644","user":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"}},"html_url":"https://gitee.com/jz-fe/cicd/pulls/15","id":5583800,"issues":[],"labels":[],"languages":["Vue","JavaScript","HTML"],"merge_commit_sha":"be71ae51840e9f5f82862d4bf07bf69ad4a88d22","merge_reference_name":"refs/pull/15/MERGE","merge_status":"can_be_merged","mergeable":true,"merged":true,"merged_at":"2022-02-25T14:57:22+08:00","milestone":null,"need_review":false,"need_test":false,"number":15,"patch_url":"https://gitee.com/jz-fe/cicd/pulls/15.patch","stale_issues":[],"stale_labels":[],"state":"merged","tester":null,"testers":[{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"}],"title":"env","updated_at":"2022-02-25T14:57:22+08:00","updated_by":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"},"user":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"}},"push_data":null,"repository":{"clone_url":"https://gitee.com/jz-fe/cicd.git","created_at":"2022-02-08T17:29:42+08:00","default_branch":"master","description":"cicd 测试仓库","fork":false,"forks_count":0,"full_name":"jz-fe/cicd","git_http_url":"https://gitee.com/jz-fe/cicd.git","git_ssh_url":"git@gitee.com:jz-fe/cicd.git","git_svn_url":"svn://gitee.com/jz-fe/cicd","git_url":"git://gitee.com/jz-fe/cicd.git","has_issues":true,"has_pages":false,"has_wiki":true,"homepage":"","html_url":"https://gitee.com/jz-fe/cicd","id":20731265,"language":null,"license":null,"name":"cicd","name_with_namespace":"简知前端/cicd","namespace":"jz-fe","open_issues_count":0,"owner":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"},"path":"cicd","path_with_namespace":"jz-fe/cicd","private":true,"pushed_at":"2022-02-25T14:57:22+08:00","ssh_url":"git@gitee.com:jz-fe/cicd.git","stargazers_count":0,"svn_url":"svn://gitee.com/jz-fe/cicd","updated_at":"2022-02-25T14:57:22+08:00","url":"https://gitee.com/jz-fe/cicd","watchers_count":1},"sender":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":"郭烁辉","site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"},"sign":"","source_branch":"dev_001","source_repo":{"project":{"clone_url":"https://gitee.com/jz-fe/cicd.git","created_at":"2022-02-08T17:29:42+08:00","default_branch":"master","description":"cicd 测试仓库","fork":false,"forks_count":0,"full_name":"jz-fe/cicd","git_http_url":"https://gitee.com/jz-fe/cicd.git","git_ssh_url":"git@gitee.com:jz-fe/cicd.git","git_svn_url":"svn://gitee.com/jz-fe/cicd","git_url":"git://gitee.com/jz-fe/cicd.git","has_issues":true,"has_pages":false,"has_wiki":true,"homepage":"","html_url":"https://gitee.com/jz-fe/cicd","id":20731265,"language":null,"license":null,"name":"cicd","name_with_namespace":"简知前端/cicd","namespace":"jz-fe","open_issues_count":0,"owner":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"},"path":"cicd","path_with_namespace":"jz-fe/cicd","private":true,"pushed_at":"2022-02-25T14:57:22+08:00","ssh_url":"git@gitee.com:jz-fe/cicd.git","stargazers_count":0,"svn_url":"svn://gitee.com/jz-fe/cicd","updated_at":"2022-02-25T14:57:22+08:00","url":"https://gitee.com/jz-fe/cicd","watchers_count":1},"repository":{"clone_url":"https://gitee.com/jz-fe/cicd.git","created_at":"2022-02-08T17:29:42+08:00","default_branch":"master","description":"cicd 测试仓库","fork":false,"forks_count":0,"full_name":"jz-fe/cicd","git_http_url":"https://gitee.com/jz-fe/cicd.git","git_ssh_url":"git@gitee.com:jz-fe/cicd.git","git_svn_url":"svn://gitee.com/jz-fe/cicd","git_url":"git://gitee.com/jz-fe/cicd.git","has_issues":true,"has_pages":false,"has_wiki":true,"homepage":"","html_url":"https://gitee.com/jz-fe/cicd","id":20731265,"language":null,"license":null,"name":"cicd","name_with_namespace":"简知前端/cicd","namespace":"jz-fe","open_issues_count":0,"owner":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"},"path":"cicd","path_with_namespace":"jz-fe/cicd","private":true,"pushed_at":"2022-02-25T14:57:22+08:00","ssh_url":"git@gitee.com:jz-fe/cicd.git","stargazers_count":0,"svn_url":"svn://gitee.com/jz-fe/cicd","updated_at":"2022-02-25T14:57:22+08:00","url":"https://gitee.com/jz-fe/cicd","watchers_count":1}},"state":"merged","target_branch":"test","target_repo":{"project":{"clone_url":"https://gitee.com/jz-fe/cicd.git","created_at":"2022-02-08T17:29:42+08:00","default_branch":"master","description":"cicd 测试仓库","fork":false,"forks_count":0,"full_name":"jz-fe/cicd","git_http_url":"https://gitee.com/jz-fe/cicd.git","git_ssh_url":"git@gitee.com:jz-fe/cicd.git","git_svn_url":"svn://gitee.com/jz-fe/cicd","git_url":"git://gitee.com/jz-fe/cicd.git","has_issues":true,"has_pages":false,"has_wiki":true,"homepage":"","html_url":"https://gitee.com/jz-fe/cicd","id":20731265,"language":null,"license":null,"name":"cicd","name_with_namespace":"简知前端/cicd","namespace":"jz-fe","open_issues_count":0,"owner":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"},"path":"cicd","path_with_namespace":"jz-fe/cicd","private":true,"pushed_at":"2022-02-25T14:57:22+08:00","ssh_url":"git@gitee.com:jz-fe/cicd.git","stargazers_count":0,"svn_url":"svn://gitee.com/jz-fe/cicd","updated_at":"2022-02-25T14:57:22+08:00","url":"https://gitee.com/jz-fe/cicd","watchers_count":1},"repository":{"clone_url":"https://gitee.com/jz-fe/cicd.git","created_at":"2022-02-08T17:29:42+08:00","default_branch":"master","description":"cicd 测试仓库","fork":false,"forks_count":0,"full_name":"jz-fe/cicd","git_http_url":"https://gitee.com/jz-fe/cicd.git","git_ssh_url":"git@gitee.com:jz-fe/cicd.git","git_svn_url":"svn://gitee.com/jz-fe/cicd","git_url":"git://gitee.com/jz-fe/cicd.git","has_issues":true,"has_pages":false,"has_wiki":true,"homepage":"","html_url":"https://gitee.com/jz-fe/cicd","id":20731265,"language":null,"license":null,"name":"cicd","name_with_namespace":"简知前端/cicd","namespace":"jz-fe","open_issues_count":0,"owner":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":null,"site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"},"path":"cicd","path_with_namespace":"jz-fe/cicd","private":true,"pushed_at":"2022-02-25T14:57:22+08:00","ssh_url":"git@gitee.com:jz-fe/cicd.git","stargazers_count":0,"svn_url":"svn://gitee.com/jz-fe/cicd","updated_at":"2022-02-25T14:57:22+08:00","url":"https://gitee.com/jz-fe/cicd","watchers_count":1}},"target_user":null,"timestamp":"1645772242525","title":"env","updated_by":{"avatar_url":"https://gitee.com/assets/no_portrait.png","email":"guoshuohui@outlook.com","html_url":"https://gitee.com/guoshuohui","id":1371004,"login":"guoshuohui","name":"guoshuohui","remark":"郭烁辉","site_admin":false,"type":"User","url":"https://gitee.com/guoshuohui","user_name":"guoshuohui","username":"guoshuohui"},"url":"https://gitee.com/jz-fe/cicd/pulls/15"}',
  sha: 'be71ae51840e9f5f82862d4bf07bf69ad4a88d22',
  giteePullRequestIid: '15',
  RUN_ARTIFACTS_DISPLAY_URL: 'https://jenkins-test.jianzhikeji.com/job/cicd/61/display/redirect?page=artifacts',
  giteeBranch: 'dev_001',
  NLSPATH: '/usr/dt/lib/nls/msg/%L/%N.cat',
  GIT_COMMIT: '6ae0cad18fcafc8677b79f8cbfb3e35e46372faf',
  JENKINS_HOME: '/data/jenkins',
  ROOT_BUILD_CAUSE_SCMTRIGGER: 'true',
  giteePullRequestId: '5583800',
  PATH: '/sbin:/usr/sbin:/bin:/usr/bin',
  BUILD_CAUSE_SCMTRIGGER: 'true',
  RUN_DISPLAY_URL: 'https://jenkins-test.jianzhikeji.com/job/cicd/61/display/redirect',
  giteeSourceRepoName: 'cicd',
  PWD: '/data/jenkins/workspace/cicd',
  HUDSON_URL: 'https://jenkins-test.jianzhikeji.com/',
  LANG: 'en_US.utf8',
  giteePullRequestDescription: 'env',
  JOB_NAME: 'cicd',
  giteeTargetBranch: 'test',
  giteeTargetNamespace: 'jz-fe',
  XFILESEARCHPATH: '/usr/dt/app-defaults/%L/Dt',
  giteePullRequestTargetProjectId: '20731265',
  BUILD_DISPLAY_NAME: '#61',
  BUILD_CAUSE: 'SCMTRIGGER',
  BUILD_ID: '61',
  JENKINS_URL: 'https://jenkins-test.jianzhikeji.com/',
  BUILD_TIMESTAMP: '2022-02-25 14:57:28 CST',
  JOB_BASE_NAME: 'cicd',
  RUN_TESTS_DISPLAY_URL: 'https://jenkins-test.jianzhikeji.com/job/cicd/61/display/redirect?page=tests',
  HOME: '/root',
  SHLVL: '2',
  GIT_BRANCH: 'pull/15/MERGE',
  CI: 'true',
  EXECUTOR_NUMBER: '1',
  giteeUserEmail: 'guoshuohui@outlook.com',
  WORKSPACE_TMP: '/data/jenkins/workspace/cicd@tmp',
  JENKINS_SERVER_COOKIE: '914932fbfead2c47',
  GIT_URL: 'https://gitee.com/jz-fe/cicd.git',
  NODE_LABELS: 'built-in',
  LOGNAME: 'root',
  giteePullRequestTitle: 'env',
  giteeActionType: 'MERGE',
  giteeRef: 'refs/pull/15/MERGE',
  giteePushDeleted: 'false',
  HUDSON_HOME: '/data/jenkins',
  NODE_NAME: 'master',
  giteePushCreated: 'false',
  BUILD_NUMBER: '61',
  JOB_DISPLAY_URL: 'https://jenkins-test.jianzhikeji.com/job/cicd/display/redirect',
  giteePullRequestLastCommit: 'be71ae51840e9f5f82862d4bf07bf69ad4a88d22',
  HUDSON_COOKIE: 'bfe36826-d28c-496b-803e-f3236d0e701d',
  giteeAfterCommitSha: 'be71ae51840e9f5f82862d4bf07bf69ad4a88d22',
  giteeTargetRepoName: 'cicd',
  giteeAfter: 'be71ae51840e9f5f82862d4bf07bf69ad4a88d22',
  _: '/bin/node'
}
--- shell ---
internal/modules/cjs/loader.js:883
  throw err;
  ^

Error: Cannot find module 'shelljs'
Require stack:
- /data/jenkins/workspace/cicd/shell.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (/data/jenkins/workspace/cicd/shell.js:6:15)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ '/data/jenkins/workspace/cicd/shell.js' ]
}
Build step 'Execute shell' marked build as failure
[Checks API] No suitable checks publisher found.
Finished: FAILURE
Jenkins 中文社区
REST API
Jenkins 2.332