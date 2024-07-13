---
outline: deep
---

# npm包管理器

## npm简介
`npm`（全称 Node Package Manager）是 `Node.js` 的包管理工具，它是一个基于命令行的工具，用于帮助开发者在自己的项目中安装、升级、移除和管理依赖项。

官方网站： https://www.npmjs.com/

- 类似于 PHP 的工具：Composer。它是 PHP 的包管理器，可以用于下载、安装和管理 PHP 的依赖项，类似于 npm。

- 类似于 Java 的工具：Maven。它是 Java 的构建工具和项目管理工具，可以自动化构建、测试和部署 Java 应用程序，类似于 npm 和 webpack 的功能。

- 类似于 Python 的工具：pip。它是 Python 的包管理器，可以用于安装和管理 Python 的依赖项，类似于 npm。

- 类似于 Rust 的工具：Cargo。它是 Rust 的包管理器和构建工具，可以用于下载、编译和管理 Rust 的依赖项，类似于 npm 和 Maven 的功能。

## npm 命令

1. `npm init`：初始化一个新的 npm 项目，创建 package.json 文件。

2. `npm install`：安装一个包或一组包，并且会在当前目录存放一个node_modules。

3. `npm install <package-name>`：安装指定的包。

4. `npm install <package-name> --save`：安装指定的包，并将其添加到 package.json 文件中的依赖列表中。

5. `npm install <package-name> --save-dev`：安装指定的包，并将其添加到 package.json 文件中的开发依赖列表中。

6. `npm install -g <package-name>`：全局安装指定的包。

7. `npm update <package-name>`：更新指定的包。

8. `npm uninstall <package-name>`：卸载指定的包。

9. `npm run <script-name>`：执行 package.json 文件中定义的脚本命令。

10. `npm search <keyword>`：搜索 npm 库中包含指定关键字的包。

11. `npm info <package-name>`：查看指定包的详细信息。

12. `npm list`：列出当前项目中安装的所有包。

13. `npm outdated`：列出当前项目中需要更新的包。

14. `npm audit`：检查当前项目中的依赖项是否存在安全漏洞。

15. `npm publish`：发布自己开发的包到 npm 库中。

16. `npm login`：登录到 npm 账户。

17. `npm logout`：注销当前 npm 账户。

18. `npm link`: 将本地模块链接到全局的 `node_modules` 目录下。

19. `npm config list`: 用于列出所有的 npm 配置信息。执行该命令可以查看当前系统和用户级别的所有 npm 配置信息，以及当前项目的配置信息（如果在项目目录下执行该命令）。

20. `npm get registry` 用于获取当前 npm 配置中的 registry 配置项的值。registry 配置项用于指定 npm 包的下载地址，如果未指定，则默认使用 npm 官方的包注册表地址。

21. `npm set registry` `npm config set registry <registry-url>` 命令，将 registry 配置项的值修改为指定的 `<registry-url>` 地址。

## Package.json文件

执行npm init 便可以初始化一个package.json文件，该文件包含了项目的相关信息，包括项目名称、版本、描述、作者、许可证、依赖等。

1. `name`：项目名称，必须是唯一的字符串，通常采用小写字母和连字符的组合。

2. `version`：项目版本号，通常采用语义化版本号规范。

3. `description`：项目描述。

4. `main`：项目的主入口文件路径，通常是一个 JavaScript 文件。

5. `keywords`：项目的关键字列表，方便他人搜索和发现该项目。

6. `author`：项目作者的信息，包括姓名、邮箱、网址等。

7. `license`：项目的许可证类型，可以是自定义的许可证类型或者常见的开源许可证（如 MIT、Apache 等）。

8. `dependencies`：项目所依赖的包的列表，这些包会在项目运行时自动安装。

9. `devDependencies`：项目开发过程中所需要的包的列表，这些包不会随项目一起发布，而是只在开发时使用。

10. `peerDependencies`：项目的同级依赖，即项目所需要的模块被其他模块所依赖。

11. `scripts`：定义了一些脚本命令，比如启动项目、运行测试等。

12. `repository`：项目代码仓库的信息，包括类型、网址等。

13. `bugs`：项目的 bug 报告地址。

14. `homepage`：项目的官方网站地址或者文档地址。

## 版本号
version 三段式版本号一般是1.0.0 大版本号 次版本号 修订号

- 大版本号一般是有重大变化才会升级

- 次版本号一般是增加功能进行升级

- 修订号一般是修改bug进行升级

## 扁平化安装

npm install 安装模块的时候一般是扁平化安装的，但是有时候出现嵌套的情况是因为版本不同。

A 依赖 C 1.0 ，

B 依赖 C 1.0 ，

D 依赖 C 2.0 ，

此时 C 1.0 就会被放到A B的`node_modules`，

C 2.0 会被放入 D 模块下面的`node_modules`。

## 在执行npm install 的时候发生了什么？

首先安装的依赖都会存放在根目录的node_modules,默认采用扁平化的方式安装，并且排序规则.bin第一个然后@系列，再然后按照首字母排序abcd等，并且使用的算法是广度优先遍历，在遍历依赖树时，npm会首先处理项目根目录下的依赖，然后逐层处理每个依赖包的依赖，直到所有依赖都被处理完毕。在处理每个依赖时，npm会检查该依赖的版本号是否符合依赖树中其他依赖的版本要求，如果不符合，则会尝试安装适合的版本。

具体查阅：https://juejin.cn/post/7261119531891490877

## package-lock.json 的作用

很多朋友只知道这个东西可以锁定版本记录依赖树详细信息

- `version` 该参数指定了当前包的版本号
- `resolved` 该参数指定了当前包的下载地址
- `integrity` 用于验证包的完整性
- `dev` 该参数指定了当前包是一个开发依赖包
- `bin` 该参数指定了当前包中可执行文件的路径和名称
- `engines` 该参数指定了当前包所依赖的Node.js版本范围

`package-lock.json` 帮我们做了缓存，他会通过 name + version + integrity 信息生成一个唯一的key，这个key能找到对应的index-v5 下的缓存记录。

## npm run xxx 发生了什么

读取 `package json` 的 `scripts` 对应的脚本命令(dev:vite)，vite是个可执行脚本，他的查找规则是：

- 先从当前项目的 node_modules/.bin去查找可执行命令vite

- 如果没找到就去全局的 node_modules 去找可执行命令vite

- 如果还没找到就去环境变量查找

- 再找不到就进行报错

如果成功找到会发现有三个文件。 `Node.js` 是跨平台的所以可执行命令兼容各个平台。

- `.sh` 文件是给Linux unix Macos 使用

- `.cmd` 给 Windows 的 cmd 使用

- `.ps1` 给 Windows 的 PowerShell 使用

## npm 生命周期

```json
  "predev": "node prev.js",
  "dev": "node index.js",
  "postdev": "node post.js"
```
执行 `npm run dev` 命令的时候 `predev` 会自动执行 他的生命周期是在 `dev` 之前执行，然后执行 `dev` 命令，再然后执行 `postdev` ，也就是 `dev` 之后执行

运用场景例如 `npm run build` 可以在打包之后删除 `dist` 目录等等

`post` 例如你编写完一个工具发布 `npm` ，那就可以在之后写一个 `CI` 脚本顺便帮你推送到 `git` 等等。

## npx

### npx是什么

npx是一个命令行工具，它是npm 5.2.0版本中新增的功能。它允许用户在不安装全局包的情况下，运行已安装在本地项目中的包或者远程仓库中的包。

npx的作用是在命令行中运行node包中的可执行文件，而不需要全局安装这些包。这可以使开发人员更轻松地管理包的依赖关系，并且可以避免全局污染的问题。它还可以帮助开发人员在项目中使用不同版本的包，而不会出现版本冲突的问题。

### npx 的优势

1. 避免全局安装：`npx`允许你执行npm package，而不需要你先全局安装它。

2. 总是使用最新版本：如果你没有在本地安装相应的npm package，`npx`会从npm的package仓库中下载并使用最新版。

3. 执行任意npm包：`npx`不仅可以执行在`package.json`的`scripts`部分定义的命令，还可以执行任何npm package。

4. 执行GitHub gist：`npx`甚至可以执行GitHub gist或者其他公开的JavaScript文件。

### npm 和 npx 区别

`npx`侧重于执行命令，执行某个模块命令。虽然会自动安装模块，但是重在执行某个命令。

`npm`侧重于安装或者卸载某个模块。重在安装，并不具备执行某个模块的功能。

具体翻阅：https://juejin.cn/post/7261423108509302842

### npx运行规则

npx 的运行规则和npm 是一样的，本地目录查找.bin 看有没有，如果没有就去全局的node_modules 查找，如果还没有就去下载这个包然后运行命令，然后删除这个包。