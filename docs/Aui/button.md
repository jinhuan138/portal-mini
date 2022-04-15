## Button 按钮
常用的操作按钮。

### 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、和`corner-radius`属性来定义 Button 的样式。
```html
<div>
  <aui-button>默认按钮</aui-button>
  <aui-button type="primary">主要按钮</aui-button>
  <aui-button type="success">成功按钮</aui-button>
  <aui-button type="warning">警告按钮</aui-button>
  <aui-button type="danger">危险按钮</aui-button>
</div>

<div style="margin: 20px 0">
  <aui-button plain>朴素按钮</aui-button>
  <aui-button type="primary" plain>主要按钮</aui-button>
  <aui-button type="success" plain>成功按钮</aui-button>
  <aui-button type="warning" plain>警告按钮</aui-button>
  <aui-button type="danger" plain>危险按钮</aui-button>
</div>

<div>
  <aui-button type="primary" :corner-radius='5'>主要按钮</aui-button>
  <aui-button type="success" :corner-radius='10'>成功按钮</aui-button>
  <aui-button type="warning" :corner-radius='15'>警告按钮</aui-button>
  <aui-button type="danger" :corner-radius='20'>危险按钮</aui-button>
</div>
```
:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。
```html
<div>
  <aui-button disabled>默认按钮</aui-button>
  <aui-button type="primary" disabled>主要按钮</aui-button>
  <aui-button type="success" disabled>成功按钮</aui-button>
  <aui-button type="info" disabled>信息按钮</aui-button>
  <aui-button type="warning" disabled>警告按钮</aui-button>
  <aui-button type="danger" disabled>危险按钮</aui-button>
</div>

<div style="margin-top: 20px">
  <aui-button plain disabled>朴素按钮</aui-button>
  <aui-button type="primary" plain disabled>主要按钮</aui-button>
  <aui-button type="success" plain disabled>成功按钮</aui-button>
  <aui-button type="info" plain disabled>信息按钮</aui-button>
  <aui-button type="warning" plain disabled>警告按钮</aui-button>
  <aui-button type="danger" plain disabled>危险按钮</aui-button>
</div>
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。
```html
<aui-button type="primary" :loading="true">加载中</aui-button>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   primary / success / warning / danger | — |
| plain     | 是否朴素按钮   | boolean | true/false | false |
| corner-radius  | 是否圆角按钮   | number    | - | - |
| loading     | 是否加载中状态   | boolean    | true/false | false |
| disabled  | 是否禁用状态    | boolean   | true/false | false |
| throttle-time | 截流时间 | number | - | 150 |

### Input Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| click | 点击事件 | (event: Event) |
