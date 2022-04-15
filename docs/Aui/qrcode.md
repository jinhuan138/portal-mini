## Qrcode 二维码

生成二维码。

### 基本用法

::: demo
```html
<template>
  <aui-qrcode value="http://www.agree.com.cn/"></aui-qrcode>
</template>
```
:::

### 改变类型及颜色

::: demo
```html
<template>
  <aui-qrcode value="http://www.agree.com.cn/" type="canvas"></aui-qrcode>
  <aui-qrcode value="http://www.agree.com.cn/" fg-color="blue"></aui-qrcode>
</template>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 内容 | string | — | - |
| bgColor | 背景色 | string | — | "#FFFFFF" |
| fgColor | 前景色(二维码颜色) | string | — | "#000000" |
| type | 二维码类型 | string | "img"/"canvas" | "img" |
