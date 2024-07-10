---
outline: deep
---

# CSS 基础

## CSS3 新特性

新的选择器：

- 边框属性： 如 border-radius、box-shadow、border-image

- 背景属性： 如 background-clip、background-origin、background-size 和 background-break

- 文字属性：word-wrap、text-shadow、text-overflow

- 颜色：rgba 分为两部分，rgb 为颜色值，a 为透明度、hsla 分为四部分，h 为色相，s 为饱和度，l 为亮度，a 为透明度

- transition，transform，animation，渐变，弹性布局网格布局

## 元素水平、垂直居中

### 水平居中

行内元素：

- text-align: center;

块级元素：

- 确定宽度的：

1. margin: 0 auto;

2. 父元素 position: relative,子元素绝对定位并设置 margin-left: -width/2

- 不确定宽度的：

1. display:table，margin：0 auto

2. display：inline-block，text-align:center

3. display：flex，justify-content:center

4. display：grid，justify-content:center

5. 父元素 相对定位，子元素绝对定位，+transform，translateX 可以移动本身元素的 50%。

### 垂直居中

- 纯文本利用 line-height 设置于元素高度一致实现居中

- 通过设置父容器相对定位，子级设置绝对定位，margin 实现自适应居中

- 父级设置 display: flex; 子级设置 margin 为 auto 实现自适应居中

- 父级设置相对定位，子级设置绝对定位，并且通过位移 transform 实现

- table 布局，父级通过转换成表格形式，然后子级设置 vertical-align 实现。（需要注意的是：
  vertical-align: middle 使用的前提条件是内联元素以及 display 值为 table-cell 的元素）

## px、em、rem 和 vw、vh

px 是固定的像素，一旦设置了就无法因为放大而改变。em 是相对父元素设置的字体大小，rem 是相对根（HTML 根节点）元素设置的字体大小来计算

vw、vh 是视窗宽度和视窗高度，1vw 是视窗宽度的百分之一，1vh 是视窗高度的百分之一

注意：百分比是相对于父元素的，而 vw、vh 是相对于视口的，是不一样的
