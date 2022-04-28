---
sidebar: true
sidebarDepth: 2
---

# FAQ

## 1. 企业微信无法登录

出现企业微信无法登录的情况时，请尝试清空浏览器的缓存，重新刷新页面登录。

或是因为企业微信登录请求太频繁，可等个几分钟再扫码登录。

若还是不行，可选择游客模式登录，目前游客和企业微信登录的权限是一样的，游客登录也可查看所有的文档。

若游客登录也出现了无法登录的状态，请微信联系我们。

## 2. 切换 npm 下载源

npm 的默认下载源是 `https://registry.npmjs.org/` ，即 npm 的官方下载源，由于其地址在国外，下载速度很慢。因此常常需要将 npm 的下载源切换到国内的下载源，提升包下载速度，通常使用的是国内的 taobao 源，即 `https://registry.npm.taobao.org/` 源。

```bash
npm config get registry  // 查看npm当前镜像源
```

可使用 [`nrm`](https://github.com/Pana/nrm) 工具查看有哪些常用源可以用，使用 `nrm` 工具可以轻松切换 npm 的下载源。

nrm 工具的可选源有限，有时我们需要从公司的 npm 源上下载我们自己的依赖包，就需要用到 npm 切换下载源的命令，以下提供常用的切换 npm 下载源的三种方式。

这里以切换到公司的 npm 源，下载 aui-web 组件库依赖包为例：

**以下URL可根据真实地址替换**

* **带源一次性安装**

此方式不用切换 npm 下载源，一次性使用，每次安装都需要带上源

```bash
npm install @agree/aui-web --registry http://192.9.180.42:30108/repository/ab-group/
```

* **使用 .npmrc 文件**

此方式是通过配置文件的方式，指定该项目的下载源，影响范围为该项目，不会影响 npm 全局配置项

在项目根目录下添加 .npmrc 文件，添加内容如下：

```bash
registry = http://192.9.180.42:30108/repository/ab-group/
```

* **设置 npm 的配置项**

此方式为设置 npm 的全局下载源，影响全局，若其他项目需要使用其他下载源，请手动切换回去，或使用 nrm 工具切换

```bash
npm config set registry http://192.9.180.42:30108/repository/ab-group/
```

## 3. 离线文档下载

注意：离线文档里的链接都是失效的

**柜面组件库：** <a href="javascript:void(0)" onclick="docsDownload(this, 'aui-web-docs.zip', 'aui-web.zip')" download>点击下载</a>

**移动组件库：** <a href="javascript:void(0)" onclick="docsDownload(this, 'aui-m-docs.zip', 'aui-m.zip')" download>点击下载</a>

**JS SDK：** <a href="javascript:void(0)" onclick="docsDownload(this, 'sdk-docs.zip', 'js-sdk.zip')" download>点击下载</a>

## 4.如何创建Tapd需求和缺陷

现在所有需求/缺陷全部通过tapd来进行分配，需要大家配合规范提出相关需求和缺陷。

- 更清楚的记录任务信息
- 防止非公司人员违规向我们请求支持

### 选择项目

点击项目，选择需求/缺陷应对应的项目。

<img src="/images/faq/tapd-demand01.png" width="400"/>

### 创建需求（缺陷）

在`创建需求`（`创建缺陷`）的页面内，需在标题内注明对应的`【市场名称/解决方案】`，以及简要的问题描述。内容区应该按照规范示例详细内容。

<img src="/images/faq/tapd-demand02.png" width="800"/>

### 必填项

在`创建需求`（`创建缺陷`）的页面内，需注意右侧带红色`*`标为必填项，例：需求分类、迭代、优先级、处理人等。

<img src="/images/faq/tapd-demand03.png" width="1000"/>

### 附件

注意`附件`内需要上传必要的**截图**、**视频**或**动图**资料。

### 图例

**例1**

<img src="/images/faq/tapd-demand04.png" width="1000"/>

**例2**

<img src="/images/faq/tapd-demand05.png" width="1000"/>

**例3**

<img src="/images/faq/tapd-demand06.png" width="800"/>

## 5.如何处理Tapd需求和缺陷

现在所有需求/缺陷全部通过tapd来进行分配，需要大家密切关注tapd的变化。

- 更清楚的记录任务信息
- 更好的记录每个人的工作任务，在一些评选中占有一定权重
- 防止非公司人员违规向我们请求支持


### 任务分配流程

- 任务分配由特定人员进行，会修改对应的`处理人`字段
- 收到任务后可将状态流转为类似`开发中`或`实现中`等，表明当前处理的状态


### 处理人&状态流转

- 完成后，将`处理人`修改为对应的人员，并添加相应描述，如果对应的修改存在`MergeRquest`需附上对应链接
- 非特定人员，不可直接将状态流转为`拒绝`或`关闭`相关状态
- `创建人`可在验证后将状态流转`验证`、`完成`或`关闭`状态

### 评论和附件等相关使用

每次流转时，需附加相关说明或评论，如需要附件，可上传附件

注意`结束时间`字段，需控制开发时间，如未按时间解决，可与提出人员进行沟通进行延期，或说明原因。

### 图示

<img src="/images/faq/tapd-dev.png" width="1000"/>

### 图例

<img src="/images/faq/tapd-dev02.png" width="800"/>

## 6.如何查看当前使用的npm包版本

1. 在当前工程根目录找到`node_modules`文件夹
2. 在`node_modules`文件夹中找到与包同名的子文件夹
3. 在子文件夹根目录找到`package.json`文件
4. 查看`package.json`中的`version`字段，即为包版本。

> `@xxx/yy`形式的包，其中`xxx`为组名，需要在`node_modules`中先找到`@xxx`文件夹，再从`@xxx`文件夹中找到`yy`文件夹即为目标文件夹。

下面以`@agree/ab-core`包为例：

<img src="/images/faq/find-in-nodemodules.jpg" width="600"/>

## 7.node-sass向dart-sass 迁移

### 1.更新依赖

```
npm i gulp-sass@^5.0.0 sass@^1.49.7 css-preprocess@^2.0.0 gulp-plugin-vue-template-compiler@^1.2.3 --save-dev
```

### 2.更新语法

#### 2-1.vue文件中的```<style lang="scss" scoped>```内语法使用`::v-deep`替换`/deep/`

**原**

```css
.aui-teller-wrap /deep/ .aui-input__suffix {
    right: 10px;
}
```

**更新为**

```css
.aui-teller-wrap ::v-deep .aui-input__suffix {
    right: 10px;
}
```

#### 2-2.使用`math.div`替换除法(`/`)

**原**

```css
width: (1 / 24 * $i * 100) * 1%;
```

**更新为**

```css
@use "sass:math";


width: (math.div( 1 , 24 ) * $i * 100) * 1%;
```

## 8.embedpanel迁移

**从@agree/ab-manager-trade移至@agree/ab-plugin-embed-panel**

同时前有使用`embedpanel`组件的项目需要做一下修改：

1. 新增依赖包：

```
npm install @agree/ab-plugin-embed-panel@2.0.0
```

2. 注意：重新部署时除了`package.json`和**相应的sdk包**外，还需要部署重新编译后的`client\release\workspace\TEClient\env`文件夹
3. 项目中需要引用当前包，并注册使用。 代码如下：

```js
import { EmbedPanels } from "@agree/ab-plugin-embed-panel"
Vue.use(EmbedPanels)
```

其他 embedpanel 使用方式不变。 其他具体使用细节，请查看对应`READEE.md`。
