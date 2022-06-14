---
sidebar: true
sidebarDepth: 3
---

# 前端开发规范(Beta)

## 通用

- 所有文件、文件夹和变量命名等不能出现中文
- 提交时删除冗余的日志代码

## 文件（夹）命名规则

### 文件夹命名

全小写， 短横线命名法（kebab-case），如：folder 或 folder-sub

::: danger bad
```sh
mkdir oneProject
```
:::

::: tip good
```sh
mkdir folder
mkdir one-project
```
:::

### html文件命名

全小写， 短横线命名法（kebab-case），如：`index.html` 或 `index-log.html`

### js|jsx|ts文件命名

全小写， 短横线命名法（kebab-case），如：`index.js` 或 `dev-tools.js`

### css|scss|less文件命名

全小写， 短横线命名法（kebab-case），如：`style.css` 或 `theme-default.css`

### vue文件命名

单词大写开头（PascalCase），即“大驼峰”，如：`Hello.vue` 或 `HelloWorld.vue`

## js代码编写规则

### 注释

- 复杂和关键代码需要添加注释
- 单行注释采用`//`，多行使用`/**/`
- 注释避免冗长

::: danger bad
```js
// str1 - 第一个字符串
// str2 - 第二个字符串
// @param {*} event
// @returns
function concat(str1, str2) {
    // todo
}
```
:::

::: tip good
```js
// 定义name为jack
let name  = 'jack';
/**
 * str1 - 第一个字符串
 * str2 - 第二个字符串
 * @param {*} event
 * @returns
 */
function concat(str1, str2) {
    // todo
}
```
:::

### 缩进

采用4格缩进

::: danger bad
```js
if(true) {
return true;
}

if(false) {
  return true;
}
```
:::

::: tip good
```js
if(true) {
    return true;
}
```
:::

### 分号

语句结尾使用分号

::: danger bad
```js
let name = 'jack'
i++
return true
```
:::

::: tip good
```js
let name = 'jack';
name = name || 'tom';
i++;
return true;
```
:::

### 空格

- 赋值等号前后**需要**空格
- 属性值前**需要**空格
- `:`后**需要**空格
- 箭头函数`=>`前后**需要**空格
- 一元运算符（+、-、*、%、>、<...）及条件运算符前后**需要**空格
- `{}`前**需要**空格
- 多个属性或属性值使用`,`分割时`,`后**需要**空格
- 单行注释`//`后，多行注释`/*`后和`*/`前**需要**空格
- 属性名后**不需要**空格
- 多个属性或属性值使用`,`分割时`,`前**不需要**空格
- 属性值中`(`后`)`前**不需要**空格

::: tip good
```js
// 单行注释
let preson = {
    name: 'jack'
};
before && after;
one | two;
/* 这是
 * 多行
 * 注释
 */
if(i > 10) {
    i += 1;
} else {
    i = i - 1;
}

arr = ['hello', 'world', '!'];

function foo(a, b) {
    // todo
}
let bar = (a, b) => {
    // todo
}
```
:::

### 赋值

将一个对象中的属性赋值给其他变量，采用解构赋值

::: danger bad
```js
let start = object.start,
    end = object.end,
    time = object.time;
```
:::

::: tip good
```js
let { start, end, time } = object;
let { start, end, time: timeout } = object;
```
:::

### 变量

- 使用`let`声明变量
- 采用驼峰命名（camelCase），且见名知意
- 一个块级作用域中所有的变量声明在代码块首部，用一个`let`声明，不允许出现两个连续的`let`声明

::: danger bad
```js
var name = 'jack';

let aa = 20;
let cooking = true;
let bb = 'I am Jack!';
```
:::

::: tip good
```js
let name = 'jack',
    maxAge = 20,
    filename = 'config.js';
```
:::

### 常量

全大写，下划线命名法，如：`const GLOBAL` 或  `const MAX_COUNT`

::: danger bad
```js
const maxCount = 10;
const max-count = 20;
```
:::

::: tip good
```js
const MAX_COUNT = 10;
:::

### 函数

- 采用驼峰命名（camelCase），即“小驼峰”
- 尽量是用箭头函数
- 异步函数使用`async/await`
- 单一职责

::: danger bad
```js
function dosomthing() {
    // todo
}
function Exit() {
    // todo
}
setTimeout(function() {
    // todo
}, 1000);
```
:::

::: tip good
```js
function doSomthing() {
    // todo
}
function exit() {
    // todo
}
setTimeout(() => {
    // todo
}, 1000);
:::

### 类名

单词大写开头（PascalCase），即“大驼峰”

::: danger bad
```js
class user() {}
```
:::

::: tip good
```js
class User() {}
class UserGround() {}
:::

### 参数定义

- 参数定义时，不超过**3**个
- 超过**3**个时，将参数合并

::: danger bad
```js
function deSomthing(path, time, start, end, filter, cb) {
    // todo
}
```
:::

::: tip good
```js
function deSomthing(path, time, options = {}) {
    let { start, end, filter, cb } = options;
    // todo
}
```
:::

### 判断是否等于

使用`===`和`!===`

::: danger bad
```js
if(name == 'jack') {
    return name;
}

if(index != 0) {
    return false;
}
```
:::

::: tip good
```js
if(name === 'jack') {
    return name;
}

if(index !== 0) {
    return false;
}
```
:::

### 字符串拼接

字符串拼接尽量使用模板字面量

::: danger bad
```js
let name  = 'jack';

return 'I am ' + ${name} + '!';
```
:::

::: tip good
```js
let name  = 'jack';

return `I am ${name}!`
```
:::

### 内存泄漏

- 减少DOM操作，获取一次后先赋值给变量，使用后释放
- 建立的事件监听及时移除
- 尽量减少全局变量和全局的引用，使用后及时清理

::: danger bad
```js
let titleEl = document.getElementById('title');
titleEl.setAttribute('data-type', 'title');

document.addEventListener('keydown', () => {
    // todo
});
```
:::

::: tip good
```js
let titleEl = document.getElementById('title');
titleEl.setAttribute('data-type', 'title');
titleEl = null;

function handleKeydown() {
    // todo
}
document.addEventListener('keydown', handleKeydown);
// 合适的时机移除
document.removeEventListener('keydown', handleKeydown);
```
:::

### 其他

- `if/else`判断`{}`不可省略
- 条件判断可使用短路逻辑，如果单行判断后只有一句代码，可省略`{}`写在同一行
- 多次`if/else`判断可采用`switch`
- 代码中要有适当空行分割，增加可读性

::: tip propose
```js
if(num > 100) return false;
```
:::

## css代码编写规范

### 通用

- 尽量不要使用id，而是使用class
- 不要使用`!important`
- id使用camelCase（驼峰）命名
- class使用全小写，多个单词可用`-`,`_`,`--`或`__`连接
- 使用flex布局
- 属性后**需要**分号
- 多个属性采用简写形式
- 减少回流操作

::: danger bad
```css
.titleColor {
    color: #aaa !important
    background-color: #ccc
}
.banner {
    color: #000
    background-image: url("images/banner.png")
    background-repeat: no-repeat
    background-position: 0 0
}
```
:::

::: tip good
```css
.title, .section-item, .section-item-time, .section-item__title, .section-item--header {
    color: #aaa;
    background: #ccc;
}
.banner {
    color: #000;
    background: url("images/banner.png") no-repeat 0 0;
}
```
:::

### 空格

- 属性值前**需要**空格
- 选择器`>`,`~`和`+`前后**需要**空格
- `{`前**需要**空格
- 多个属性值的`,`后面**需要**空格
- 多个属性值的`,`前面**不需要**空格
- 属性名后**不需要**空格
- 带括号的属性值`(`前和`)`后**不需要**空格

::: danger bad
```css
.title{
    color:#aaa;
    background : #ccc;
}
.home>.banner{
    width : 100%;
    background: rgb( 255,255,255 );
}
```
:::

::: tip good
```css
.title {
    color: #aaa;
    background: #ccc;
}
.home > .banner{
    width: 100%;
    background: rgb(255, 255, 255);
}
```
:::

### 内联样式

不要直接使用内联样式

::: danger bad
```html
<div style='color: #000'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolore? Dicta itaque libero necessitatibus, sunt beatae iusto maxime reprehenderit hic nesciunt distinctio voluptates ipsa saepe doloremque blanditiis praesentium placeat error?</div>
```
:::

::: tip good
```html
<style>
.txt {
    color: #000;
}
</style>

<div class='txt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolore? Dicta itaque libero necessitatibus, sunt beatae iusto maxime reprehenderit hic nesciunt distinctio voluptates ipsa saepe doloremque blanditiis praesentium placeat error?</div>
```
:::

### 样式顺序

将一类或相关样式写在一起

::: danger bad
```css
.title{
    color: #aaa;
    position: absolute;
    width: 100px;
    left: 0;
    height: 100px;
    top: 0;
    border: 1px solid #000;
    z-index: 100;
}
```
:::

::: tip good
```css
.title{
    width: 100px;
    height: 100px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    color: #aaa;
    border: 1px solid #000;
}
```
:::

### 选择器使用

- 选择器最后一部分尽可能具体
- 不要在ID和类选择前使用标签名

::: danger bad
```css
div.login > div.login-item {
    color: #aaa;
}
```
:::

::: tip good
```css
.login-item {
    color: #aaa;
}
```
:::

## vue代码编写规则

### name属性

单词大写开头（PascalCase）

::: danger bad
```js
export default {
    name: 'helloworld'
}
export default {
    name: 'helloWorld'
}
export default {
    name: 'hello-world'
}
```
:::

::: tip good
```js
export default {
    name: 'HelloWorld'
}
```
:::

### &lt;style&gt;标签中使用scoped

如遇不可覆盖样式，可采用以下方法：

```css
.aui-col >>> .aui-button--primary {
	/* custom style */
}
.aui-col /deep/ .aui-button--primary {
	/* custom style */
}
```

### 其他

其他规则，参见[风格指南](https://cn.vuejs.org/v2/style-guide/)
