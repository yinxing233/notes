import{_ as s,c as i,o as a,a6 as n}from"./chunks/framework.DJOiR4ue.js";const u=JSON.parse('{"title":"JavaScript 基础","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"frontend/js01.md","filePath":"frontend/js01.md","lastUpdated":1720625412000}'),l={name:"frontend/js01.md"},e=n(`<h1 id="javascript-基础" tabindex="-1">JavaScript 基础 <a class="header-anchor" href="#javascript-基础" aria-label="Permalink to &quot;JavaScript 基础&quot;">​</a></h1><h2 id="数据类型" tabindex="-1">数据类型 <a class="header-anchor" href="#数据类型" aria-label="Permalink to &quot;数据类型&quot;">​</a></h2><p>最新的 ECMAScript 标准定义了 8 种数据类型：</p><ul><li><p>七种基本数据类型：</p></li><li><p>布尔值（Boolean），有 2 个值分别是：true 和 false。</p></li><li><p>null，一个表明 null 值的特殊关键字。JavaScript 是大小写敏感的，因此 null 与 Null、NULL 或变体完全不同。</p></li><li><p>undefined，和 null 一样是一个特殊的关键字，undefined 表示变量未赋值时的属性。</p></li><li><p>数字（Number），整数或浮点数，例如： 42 或者 3.14159。</p></li><li><p>任意精度的整数（BigInt），可以安全地存储和操作大整数，甚至可以超过数字的安全整数限制。</p></li><li><p>字符串（String），字符串是一串表示文本值的字符序列，例如：&quot;Howdy&quot;。</p></li><li><p>代表（Symbol，在 ECMAScript 6 中新添加的类型）。一种实例是唯一且不可改变的数据类型。</p></li><li><p>以及一种复杂数据类型：对象（Object）。</p></li></ul><h2 id="字面量" tabindex="-1">字面量 <a class="header-anchor" href="#字面量" aria-label="Permalink to &quot;字面量&quot;">​</a></h2><p>字面量是脚本中按字面意思给出的固定的值，而不是变量。</p><p>数值字面量：直接写出数字，如 <code>123</code>、<code>3.14</code>、<code>0xff</code> 等。其他的不做概述。</p><h2 id="和-的区别" tabindex="-1">== 和 === 的区别 <a class="header-anchor" href="#和-的区别" aria-label="Permalink to &quot;== 和 === 的区别&quot;">​</a></h2><p><code>==</code> 和 <code>===</code> 是两个比较运算符，它们的区别如下：</p><ul><li><code>==</code> 运算符会自动转换数据类型再进行比较，有可能导致类型不同而导致结果不一致。</li><li><code>===</code> 运算符不会自动转换数据类型，如果数据类型不同，则直接返回 <code>false</code>。</li></ul><p>举个例子：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>在上面的例子中，<code>1</code> 和 <code>&#39;1&#39;</code> 虽然看上去是相同的数字，但是它们的数据类型不同，因此 <code>==</code> 运算符会自动将 <code>&#39;1&#39;</code> 转换为 <code>1</code>，因此结果为 <code>true</code>。而 <code>===</code> 运算符不会自动转换数据类型，因此结果为 <code>false</code>。</p><h2 id="变量提升" tabindex="-1">变量提升 <a class="header-anchor" href="#变量提升" aria-label="Permalink to &quot;变量提升&quot;">​</a></h2><p>变量提升（Variable Hoisting）是 JavaScript 中一个重要的特性，它使得我们可以在声明变量之前使用变量。</p><p>变量提升的原理是，JavaScript 引擎在编译阶段会把变量声明和函数声明提升到当前作用域的最前面，但不会提升变量赋值。</p><p>举个例子：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// undefined</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ol><li>编译阶段，JavaScript 引擎会把变量声明 <code>var x</code> 提升到当前作用域的最前面，但不会提升变量赋值。</li><li>执行阶段，JavaScript 引擎会先初始化变量 <code>x</code>，再执行 <code>console.log(x)</code>，输出结果为 <code>1</code>。</li></ol><p>因此，在执行阶段，变量 <code>x</code> 已经被初始化为 <code>1</code>，而 <code>console.log(x)</code> 输出的结果为 <code>1</code>。</p><p>注意：变量提升只会提升声明，不会提升赋值。</p><h2 id="作用域" tabindex="-1">作用域 <a class="header-anchor" href="#作用域" aria-label="Permalink to &quot;作用域&quot;">​</a></h2><p>作用域（Scope）是指变量的可访问范围，它决定了变量的生命周期、作用域、以及变量的读写权限。</p><ol><li><p>全局作用域（Global Scope）：全局作用域是最外层的作用域，在任何地方都可以访问。全局作用域中的变量可以被其他任何地方的代码访问。</p></li><li><p>函数作用域（Function Scope）：函数作用域是指函数内部定义的变量的作用域，在函数执行时，函数内的变量只能在函数内部访问，在函数执行完毕后，函数内的变量也就销毁了。</p></li><li><p>块作用域（Block Scope）：块作用域是指使用大括号 <code>{}</code> 定义的变量的作用域，在块内定义的变量只能在块内访问，在块执行完毕后，块内的变量也就销毁了。</p></li></ol><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h2><ol><li><p>闭包是指有权访问另一个函数作用域的函数，创建闭包的常见方式是嵌套函数。</p></li><li><p>闭包的作用：可以读取函数内部的变量，即使函数执行完毕，也不会被垃圾回收机制回收。</p></li><li><p>注意：闭包会占用内存，过多的闭包可能会导致内存泄漏，可以通过手动给闭包变量赋值 null 来解决。</p></li></ol><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> baz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(baz);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bar</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出2，而不是1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="模块化" tabindex="-1">模块化 <a class="header-anchor" href="#模块化" aria-label="Permalink to &quot;模块化&quot;">​</a></h2><p>好处：</p><p>1.提高了代码的复用性</p><p>2.提高了代码的可维护性</p><p>3.可以实现按需加载</p><h3 id="es-module" tabindex="-1">ES Module <a class="header-anchor" href="#es-module" aria-label="Permalink to &quot;ES Module&quot;">​</a></h3><p>ECMAScript 6 引入了模块（Module）的概念，模块的设计思想是尽量的静态化，使得代码模块化，并且避免全局变量的污染。</p><p>模块的语法主要有两种：</p><ul><li><code>import</code> 语法，用于导入模块。</li><li><code>export</code> 语法，用于导出模块。</li></ul><p>通过 <code>as</code> 关键词，对导出对象重命名，也可以通过 <code>as</code> 对导入对象重命名</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// module1.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> PI</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3.14159</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// module2.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { PI } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./module1.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">PI</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 3.14159</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>在上面的例子中，<code>module1.js</code> 导出了一个常量 <code>PI</code>，<code>module2.js</code> 导入了 <code>module1.js</code> 中的 <code>PI</code>，并打印出来。</p><h3 id="commonjs" tabindex="-1">CommonJS <a class="header-anchor" href="#commonjs" aria-label="Permalink to &quot;CommonJS&quot;">​</a></h3><ul><li>CommonJS 源自社区</li><li>CommonJS 的出现早于 ES Module 规范</li><li>CommonJS 被大量使用在 node.js 中</li><li>使用 module.exports 导出模块，使用 require 导入模块</li><li>exports 也可以导出模块，它的本质还是引用了 module.exports</li><li>CommonJS 是同步加载模块，这点与 ES Module 不同</li></ul><p>导出：</p><p>可以导出任意类型</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// module.js</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;banana&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  age: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  eat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;I like eating bananas&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.userName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;admin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>导入：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// app.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./module.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// { name: &#39;banana&#39;, age: 18, eat: [Function: eat], userName: &#39;admin&#39; }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 如果只想导入某个属性，可以使用解构赋值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(name); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &#39;banana</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Commonjs 不适用浏览器</p><p>因为 CommonJS 是同步加载模块，而加载模块就是去服务端获取模块，加载速度会受网络影响，假如一个模块加载很慢，后面的程序就无法执行，页面就会假死。而服务端能够使用 CommonJS 的原因是代码本身就存储于服务器，加载模块就是读取磁盘文件，这个过程会快很多，不用担心阻塞的问题。 所以浏览器加载模块只能使用异步加载，这就是 AMD 规范的诞生背景。</p><p>其他模块化方案不做赘述。</p>`,49),p=[e];function t(h,k,r,d,o,c){return a(),i("div",null,p)}const g=s(l,[["render",t]]);export{u as __pageData,g as default};