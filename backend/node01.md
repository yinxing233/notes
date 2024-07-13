---
outline: deep
---

# Node.js介绍

## 介绍

- 1. `Node.js` 并不是 `JavaScript` 应用，也不是编程语言，而是一个开源、跨平台的 `JavaScript` 运行时环境。
- 2. `Node.js` 是构建在 `Chrome V8` 引擎之上的，V8引擎是由 `C/C++` 编写的，因此我们的 `JavaScript` 代码需要由 `C/C++` 转化后再执行。
- 3. `Node.js` 使用异步 `I/O` 和事件驱动的设计理念，可以高效地处理大量并发请求，提供了非阻塞式 `I/O` 接口和事件循环机制，使得开发人员可以编写高性能、可扩展的应用程序，异步 `I/O` 最终都是由 `libuv` 事件循环库去实现的。
- 4. `Node.js` 使用 `npm` 作为包管理工具，类似于 `Python` 的 `pip` ，或者是 `Java` 的 `Maven` ，目前 `npm` 拥有上百万个模块。www.npmjs.com/
- 5. `Node.js` 适合干一些IO密集型应用，不适合CPU密集型应用， `Node.js` IO 依靠 `libuv` 有很强的处理能力，而CPU因为 `Node.js` 单线程原因，容易造成CPU占用率高，如果非要做CPU密集型应用，可以使用 `C++` 插件编写 或者 `Nodejs`提供的 `cluster` 。(CPU密集型指的是图像的处理 或者音频处理需要大量数据结构 + 算法)

## Node.js 下载

可以通过Nvm来管理不同版本的Node.js。记得更改镜像下载地址。

## Node.js 应用场景

以下展示并不是所有东西都是 `Node.js` 编写而是运行环境可以配合 `Node.js` 或者依靠 `Node.js` 运行。

### 前端
`Vue` `Angular` `React` `Nuxt.js` `Next.js`

### 后端

`serverLess`

web应用 `Express` `Nest.js` `koa`

RPC 服务 gRPC

爬虫 `Puppeteer` `Cheerio`

BFF层 网关层

及时性应用 `Socket.io`

### 桌前端

`Electron` `Tauri` `NW.js`

### 移动端

`weex` `ionic` `hybrid` `React Native`

### 基建端

`Webpack` `Vite` `Rollup` `Gulp`

`Less` `Scss` `PostCss`

`Babel` `Swc`

`inquire` `command`  `shelljs`

### 嵌入式
Ruff js

### 单元测试

jest vitest e2e

### CICD

Jenkins docker  Husky   miniprogram-ci

### 反向代理
http-proxy Any-proxy

## 结束语
通过本章的学习你可以了解到nodejs 高性能 可扩展 简单，及一些使用场景等。