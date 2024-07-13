---
outline: deep
---

# Monorepo

## 实施

### 项目初始化
monorepo只能用 `pnpm` 或 `yarn` 作为包管理器，不能使用 `npm` 。推荐使用 `pnpm` 。

- 1. 项目初始化
```shell
 pnpm init
```

- 2. 配置文件

在项目根目录下创建 `pnpm-workspace.yaml` 文件，用于配置monorepo的项目结构。

https://pnpm.io/pnpm-workspace_yaml

举例：

```
packages:
  //pnpm-workspace.yaml
  # all packages in direct subdirs of packages/
  - 'server'
  - 'config'
  - 'app'
  - 'backmanger'
  - 'fs'
```

然后在根目录下执行 `pnpm install` 安装依赖。可复用的包会被自动提取到根目录的 `node_modules` 目录下。不能复用的包会被安装到各个子包的 `node_modules` 目录下。

- 3. 在每个子包中的package.json文件中修改name加上@。

```
{
  //appp子目录里的package.json
  "name": "@questionbank/app",
  //其他配置
}
```
```
{
  //backmanger子目录里的package.json
  "name": "@backmanger/manager",
  //其他配置
}
```
```
{
  //config子目录里的package.json
  "name": "@questionbank/config",
}
```
```
{
  //fs子目录里的package.json
  "name": "@questionbank/fs",
}
```
```
{
  //server子目录里的package.json
  "name": "@questionbank/index",
}
```

- 4. 多个项目如何使用同一个模块

```
pnpm add 要添加的模块 --filter 目标模块

比如: pnpm add @common/utils --filter @questionbank/app
```

使用同一个模块后，只需要在该模块内修改即可，其他项目都可以直接使用。

- 5. 后面进入每个子包目录分别执行 `npm run dev` 启动项目即可。