# pnpm monorepo

这是一个基于 pnpm workspace 工作空间的单体存储库（Monorepo）工程方案，简知的私有 npm 包都将基于此方案实现。旧的私有包位于 [npm](https://gitee.com/jz-fe/npm) 仓库中。


### 常用命令

``` bash
pnpm add axios -w    # 明确安装到工作区的根目录（被所有包共享）
pnpm add axios -r    # 明确安装到工作区的每个包中（一般不用）
pnpm add axios --filter pkg   # pkg 为子包 package.json 的 name 字段名
```

> 注意：尽量采用 pnpm 的自定义命令替代 npm 的命令别名，例如用 `add` 替代 `install`，用 `remove` 替代 `uninstall`，因为 pnpm 会对传递参数进行校验，拥有自己的一套校验规则，如果强行使用 npm 的命令，会被作为一个普通的 shell 来执行，可能会出现异常。

更多命令参见 [CLI commands](https://pnpm.io/cli/add)

### 参考

- [5 分钟搞懂 Monorepo](https://xie.infoq.cn/article/4f870ba6a7c8e0fd825295c92)
- [pnpm Workspace](https://pnpm.io/workspaces)

