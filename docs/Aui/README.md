## Guide 使用指南
介绍 aui-web 组件库的安装使用方法

本文档支持离线版，如需离线版，请 <a href="/faq#_3-%E7%A6%BB%E7%BA%BF%E6%96%87%E6%A1%A3%E4%B8%8B%E8%BD%BD" target="_top" class="actived">下载离线文档</a>

**<span style="color: red">\*需使用Vue 2且版本>=2.6.14</span>**

## `<script>` 标签引用
使用 html 原生 `<script>` 的方式引用

### 安装
此方式需要单独下载文件到本地项目，点击下载 <a href="http://192.9.200.187/abc-platform/aui-web/raw/aui-web-teller/release/aui-web.zip" class="actived" target="_top">Download ZIP</a>

### 使用
**<p>注意：路径和版本根据实际情况更改</p>**
```javascript
//引入样式
<link rel="stylesheet" href="aui-web/theme-default/index.css">

//引入 vue
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

//引入组件库
<script src="aui-web/index.js"></script>
```

## NPM 引用
npm 本地安装的方式

### 安装

需要先 <a class="actived" target="_top" :href='$withBase('/FAQ/faq#_2-%E5%88%87%E6%8D%A2-npm-%E4%B8%8B%E8%BD%BD%E6%BA%90')'>切换内部npm源</a>

```bash
npm install @agree/aui-web
```

### 使用
```javascript
import Vue from 'vue'
import AUI from '@agree/aui-web'
import '@agree/aui-web/lib/theme-default/index.css'
Vue.use(AUI)
```