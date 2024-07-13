---
outline: deep
---

# Node.js全局变量

## 定义全局变量

在nodejs中使用`global`定义全局变量，定义的变量可以在引入的文件中也可以访问到。

例如`a.js` `global.xxx = 'xxx'` `require('xxx.js')`  xxx.js 也可以访问到该变量，在浏览器中我们定义的全局变量都在`window`，`Node.js`在`global`，不同的环境还需要判断，于是在`ECMAScript 2020` 出现了一个`globalThis`全局变量，在`Node.js`环境会自动切换成`global` ，浏览器环境自动切换`window`非常方便。

## 关于其他全局API

由于Node.js中没有DOM和BOM，除了这些API，其他的ECMAScriptAPI基本都能用

```JavaScript
setTimeout setInterval Promise Math  console  Date fetch(node v18) 等...
```

## Node.js内置全局API

`__dirname` `__filename` 只能在cjs使用 esm规范没有这两个全局变量

```JavaScript
__dirname  //表示当前模块的所在目录的绝对路径
__filename  //表示当前模块文件的绝对路径，包括文件名和文件扩展名
```

```JavaScript
require module //引入模块和模块导出详情在其他文档查看
```

### Process

1. `process.argv`: 这是一个包含命令行参数的数组。第一个元素是Node.js的执行路径，第二个元素是当前执行的JavaScript文件的路径，之后的元素是传递给脚本的命令行参数。

2. `process.env`: 这是一个包含当前环境变量的对象。您可以通过process.env访问并操作环境变量。

3. `process.cwd()`: 这个方法返回当前工作目录的路径。

4. `process.on(event, listener)`: 用于注册事件监听器。您可以使用process.on监听诸如exit、uncaughtException等事件，并在事件发生时执行相应的回调函数。

5. `process.exit([code])`: 用于退出当前的Node.js进程。您可以提供一个可选的退出码作为参数。

6. `process.pid`: 这个属性返回当前进程的PID（进程ID）。

这些只是`process`对象的一些常用属性和方法，还有其他许多属性和方法可用于监控进程、设置信号处理、发送IPC消息等。

需要注意的是，`process`对象是一个全局对象，可以在任何模块中直接访问，无需导入或定义。

### buffer

`Buffer` 对象是 Node.js 用来处理二进制数据（如图片、视频、音频）的全局对象。

1. 创建 `Buffer` 实例：

- `Buffer.alloc(size[, fill[, encoding]])`: 创建一个指定大小的新的Buffer实例，初始内容为零。fill参数可用于填充缓冲区，encoding参数指定填充的字符编码。

- `Buffer.from(array)`: 创建一个包含给定数组的Buffer实例。

- `Buffer.from(string[, encoding])`: 创建一个包含给定字符串的Buffer实例。

2. 读取和写入数据：

- `buffer[index]`: 通过索引读取或写入`Buffer`实例中的特定字节。

- `buffer.length`: 获取`Buffer`实例的字节长度。

- `buffer.toString([encoding[, start[, end]]])`: 将Buffer实例转换为字符串。

3. 转换数据：

- `buffer.toJSON()`: 将Buffer实例转换为JSON对象。

- `buffer.slice([start[, end]])`: 返回一个新的Buffer实例，其中包含原始Buffer实例的部分内容。

4. 其他方法：

- `Buffer.isBuffer(obj)`: 检查一个对象是否是Buffer实例。

- `Buffer.concat(list[, totalLength])`: 将一组Buffer实例或字节数组连接起来形成一个新的Buffer实例。



请注意，从Node.js 6.0版本开始，`Buffer`构造函数的使用已被弃用，推荐使用`Buffer.alloc()`、`Buffer.from()`等方法来创建`Buffer`实例。

`Buffer`类`在处理文件、网络通信、加密和解密等操作中非常有用，尤其是在需要处理二进制数据时。