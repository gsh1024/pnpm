# pnpm monorepo

这是一个基于 pnpm workspace 工作空间的单体存储库（Monorepo）工程方案，简知的私有 npm 包都将基于此方案实现。旧的私有包位于 [npm](https://gitee.com/jz-fe/npm) 仓库中。


## 常用命令

``` bash

pnpm add axios -w    # 明确安装到工作区的根目录（被所有包共享）
pnpm add axios -r    # 明确安装到工作区的每个包中（一般不用）
pnpm add axios --filter pkg   # pkg 为子包 package.json 的 name 字段名
```

更多命令参见 [CLI commands](https://pnpm.io/cli/add)

## 参考

- [5 分钟搞懂 Monorepo](https://xie.infoq.cn/article/4f870ba6a7c8e0fd825295c92)
- [pnpm Workspace](https://pnpm.io/workspaces)

