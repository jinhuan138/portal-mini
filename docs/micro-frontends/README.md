---
sidebar: true
sidebarDepth: 3
---

# 赞同微前端

## 概述

微前端是一种多个团队通过独立发布功能的方式来共同构建现代化 web 应用的技术手段及方法策略；是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将 Web 应用由单一的单体应用转变为多个小型前端应用聚合为一的应用。各个前端应用还可以独立运行、独立开发、独立部署。

## 快速开始

**首先需要全局安装[脚手架工具](#脚手架工具)**

创建子工程

```
ab create
```

选择工程类型

![选择工程类型](/images/mfa/cli-create-type.png)

输入项目名，如：**xx-bank-dashboard**

![输入项目名](/images/mfa/cli-create-name.png)

选择依赖项

![选择依赖项](/images/mfa/cli-create-dep.png)

然后按`enter`等待拉取模板并成功创建项目后

```sh
cd xx-bank-dashboard # 进入子工程

npm install # 安装依赖

npm run serve # 启动子工程
```

然后打开浏览器输入对应的地址即可。

## 微前端框架（MFA）

### 简介

赞同微前端框架（MFA）是由社区已有的成熟项目[`single-spa`](https://github.com/single-spa/single-spa)演变而来。

为了避免重复造轮子引发不必要的问题，同时为了**源码可控**以及**定制化需求**，我们`fork`了最新一个版本的源码由赞同前端团队独立维护；
在此基础上我们对源码进行了修改和新增，并会周期性的结合`single-spa`的提交就行代码迭代。

### 运行流程

![mfa流程](/images/mfa/mfa-design.png)

## 脚手架工具

### 介绍

赞同前端脚手架([`@agree/cli`](http://192.9.200.187/daiqiang/ab-cli))，用与快速生成不同业务需求的工程代码，开箱即用，快速开发。

### 安装

**需要先[切换内部npm源](/faq#_2-%E5%88%87%E6%8D%A2-npm-%E4%B8%8B%E8%BD%BD%E6%BA%90)**

```sh
npm install -g @agree/cli
```

### 工作原理

![脚手架工作原理](/images/mfa/cli-design.png)

## 高级功能

### 结合门户工程

**需要先[切换内部npm源](/faq#_2-%E5%88%87%E6%8D%A2-npm-%E4%B8%8B%E8%BD%BD%E6%BA%90)**

- 获取门户工程

```
git clone git@192.9.200.187:abc-platform/mf-portal.git
```

- 注册子工程（注册配置信息详见：[注册说明](#配置文件说明)），在门户工程的`vue-mf-root-config.js`中注册子工程，如下：

```js
import { registerApplication } from "@agree/mfa";

registerApplication({
    name: "@mfa/dashboard",
    app: () => import("../child/xx-bank-dashboard.js"),
    activeWhen: "/dashboard"
});
```

- 然后启动门户工程进入对应的路由即可。

**注：如子工程生成多个`.js`文件，参见[子工程生成多个文件如何配置](#子工程生成多个文件如何注册)？。**

### 数据共享

使用浏览器天然支持的自定义事件方式。

- 便于扩展
- 减少依赖
- 无关技术细节

门户工程提供的事件

| 事件名                    | 参数                     | 说明                                                         |
| ------------------------- | ------------------------ | ------------------------------------------------------------ |
| mfa-main | event | 子应用监听门户工程的事件，然后等待门户工程触发事件来获取数据 |


子工程提供的事件

| 事件名                    | 参数                     | 说明                                                         |
| ------------------------- | ------------------------ | ------------------------------------------------------------ |
| mfa-child:\<childName\> | event | 门户工程监听子应用的事件，然后等待子应用触发事件来获取数据 |

- chilidName: 子应用的`name`，于注册时`name`相同。

示例代码👇：

**门户工程**

```js
methods: {
    portalDispatch() {
        window.dispatchEvent(new CustomEvent("mfa-main", {
            // detail 值为事件所传递的参数
            detail: {
                name: "agreeFE",
                role: "admin"
            }
        }));
    }
},
mounted(){
    window.addEventListener("mfa-child:@mfa/dashboard", event => {
        // event.detail 获取事件参数
        console.log(event.detail.name);
    });
}
```

**子应用**

```js
methods: {
    subDispatch() {
        window.dispatchEvent(new CustomEvent("mfa-child:@mfa/dashboard", {
            // detail 值为事件所传递的参数
            detail: {
                name: "@mfa/dashboard",
            }
        }));
    }
},
mounted() {
    window.addEventListener("mfa-main", event => {
        // event.detail 获取事件参数
        let { name, role } = event.detail;
        console.log(name, role);
    });
}
```

### 数据隔离

基于ES6的[Proxy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy)，内部对每个子应用创建单独的js沙箱，通过数据劫持的方式，使数据完全隔离，互不干扰。

已有使用内存快照的方式，首先对多个子工程共存不友好，另外切换子应用时会有频繁的对全量数据进行diff操作，其弊端不言而喻。

![jssandbox](/images/mfa/mfa-jssandbox.png)

### 样式隔离

| 方式 | 说明 |
| ---- | ---- |
| BEM | 不同项目使用不同的前缀避开命名冲突 |
| CSS Modules | 编译生成不冲突的选择器名(vue scope 属性) |
| Shadow DOM | 将每个子应用包裹到一个 Shadow DOM 中，保证其运行时的样式的绝对隔离 |
| 动态添加样式文件 | 在子应用加载或销毁时引入或移出该应用的样式文件 |

针对以上样式隔离方案:
1. **针对老旧项目**,

    1.可以通过修改构建`build`脚本,将`css`样式提取出来,然后动态添加样式文件

    2.可以在主框架中声明多个`Shadow DOM`来保证各个子应用间样式隔离

```javascript
const shadow = document.querySelector('#mainE').attachShadow({mode: 'open'});
shadow.innerHTML = '子应用的入口文件';
```
2. **针对新项目**,

   1. 可以借助`css预编译器` 设置`class`特有前缀

```javascript
/* scss */
$namespace: 'aui';
@mixin b($block) {
  $B: $namespace+'-'+$block !global;

  .#{$B} {
    @content;
  }
}
/*使用*/
@include b(alert) {
  // ...
}
```   

   2. 使用构建工具`webpack`等,开启`CSS Modules`来生成不冲突的选择器名

```javascript
/* ...webpack 配置 */
{
  test: /\.css$/,
  loader: "style-loader!css-loader?modules"
},
//...
  
  
/* style.css */
.className {
  color: green;
}

/* 使用 */
import styles from "./style.css";
// import { className } from "./style.css";

element.innerHTML = '<div class="' + styles.className + '">';
```

### 微前端插件

**@agree/mfa-wrap-vue**

将vue工程包装成适用于`@agree/mfa`框架的应用结构，[源码地址](http://192.9.200.187/abc-modules/mfa-wrap-vue)

```
npm install @agree/mfa-wrap-vue --save
```

```js
import Vue from 'vue'
import MfaWrapVue from '@agree/mfa-wrap-vue'
import App from "./App.vue";

export { bootstrap, mount, unmount } = MfaWrapVue({
    Vue,
    appOptions: {
        render: h => h(App)
    }
});
```

## 常见问题

### 子工程生成多个文件如何注册？

如子工程生成多个`.js`文件，`registerApplication()`只配置入口`.js`文件，其余文件按相应顺序在入口`html`中以`<script>`方式引入。

以下面的`dashboard`子工程为例：

```
|-child
    |-dashboard
        |-bundle.js
        |-vendors.js
        |-chunk1.js
    |-navbar
    |-main
```

**vue-mf-root-config.js**

```js
registerApplication({
    name: "@mfa/dashboard",
    app: () => import("../child/dashboard/bundle.js"),
    activeWhen: "/dashboard"
});
```

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Microfrontends Portal</title>
    <link rel="preload" href="../child/dashboard/vendors.js" as="script">
    <link rel="preload" href="../child/dashboard/chunk1.js" as="script">
</head>
<body>
    <script src="../child/dashboard/vendors.js"></script>
    <script src="../child/dashboard/chunk1.js"></script>
</body>
</html>

```

### 其他

其他常见问题参见[FAQ](/faq)或者通过企业微信联系我们。
