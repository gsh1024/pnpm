# pnpm monorepo 单体存储库

这是一个基于 pnpm workspace 工作空间的单体存储库（Monorepo）工程方案，简知的私有 npm 包都将基于此方案实现。旧的私有包位于 [npm](https://gitee.com/jz-fe/npm) 仓库中。

### - 组织范围

monorepo 仓库下所有的包都被定义在 `@jianzhi` 这一组织范围里面，所以各个包的 `package.json` 文件中的 `name` 应该定义为 `@jianzhi/xxx`。

旧的 [npm](https://gitee.com/jz-fe/npm) 包则限定在 `@jianzhikeji` 组织范围中，以此来区分新旧的 npm 包。

详细参见 [scope](https://docs.npmjs.com/cli/v6/using-npm/scope)

### - 常用命令

``` bash
pnpm add pkg -w    # 明确安装到工作区的根目录（被所有包共享）
pnpm add pkg -r    # 明确安装到工作区的每个包中（一般不用）
pnpm add pkg --filter pkg   # pkg 为子包 package.json 的 name 字段名
pnpm add @jianzhi/pkg1 -r --filter pkg2    # 前提是 @jianzhi/pkg1 没有在远程 npm 库上，才会自动走 workspace 关联到 pkg2 包里面
pnpm link --global @jianzhi/pkg    # 给 npm 用时需要 cd packages/pkg 然后执行 npm link
pnpm publish --filter @jianzhi/pkg --no-git-checks    # 发布包且无需提交 git
```

> 注意：尽量采用 pnpm 的自定义命令替代 npm 的命令别名，例如添加某个包时用 `add` 替代 `install`，用 `remove` 替代 `uninstall`，因为 pnpm 会对传递参数进行校验，拥有自己的一套校验规则，如果强行使用未知命令，会被作为一个普通的 shell 来执行，可能会导致异常。

更多命令参见 [CLI commands](https://pnpm.io/cli/add)

### - 注意事项

- 自定义的 npm 命令都必须添加 `jz-` 前缀，避免与其他第三方包命令冲突，命名统一采用横杆命名。

### - 文档参考

- [5 分钟搞懂 Monorepo](https://xie.infoq.cn/article/4f870ba6a7c8e0fd825295c92)
- [pnpm Workspace](https://pnpm.io/workspaces)

