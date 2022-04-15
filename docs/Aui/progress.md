## Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

### 线形进度条 — 百分比外显

:::demo Progress 组件设置`percentage`属性即可，表示进度条对应的百分比，**必填**，必须在 0-100。
```html
<aui-progress :percentage="0"></aui-progress>
<aui-progress :percentage="70"></aui-progress>
<aui-progress :percentage="100" hint="success"></aui-progress>
<aui-progress :percentage="50" hint="error"></aui-progress>
```
:::

### 线形进度条 — 百分比内显

百分比不占用额外控件，适用于文件上传等场景。

:::demo Progress 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来将进度条描述置于进度条内部。
```html
<aui-progress :text-inside="true" :stroke-width="18" :percentage="0"></aui-progress>
<aui-progress :text-inside="true" :stroke-width="18" :percentage="70"></aui-progress>
<aui-progress :text-inside="true" :stroke-width="18" :percentage="100" hint="success"></aui-progress>
<aui-progress :text-inside="true" :stroke-width="18" :percentage="50" hint="error"></aui-progress>
```
:::

### 环形进度条

:::demo Progress 组件可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `circle-width` 属性来设置其大小。
```html
<aui-progress type="circle" :percentage="0"></aui-progress>
<aui-progress type="circle" :percentage="25"></aui-progress>
<aui-progress type="circle" :percentage="100" hint="success"></aui-progress>
<aui-progress type="circle" :percentage="50" hint="error"></aui-progress>
```
:::

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| **percentage** | **百分比（必填）**   | number          |     0-100          |     0    |
| type          | 进度条类型           | string         | line/circle | line |
| stroke-width  | 进度条的宽度，单位 px | number          | — | 6 |
| stroke-color  | 线条颜色  | string          | — | #3FC7FA  |
| trail-color  | 背景线条颜色  | string          | — | #D9D9D9  |
| text-inside  | 进度条显示文字内置在进度条内（只在 type=line 时可用） | Boolean | — | false |
| hint  | 进度条当前状态 | string | success/error/warning | — |
| circle-width  | 环形进度条画布宽度（只在 type=circle 时可用） | number |  | 126 |
| show-text  | 是否显示进度条文字内容 | boolean | — | true |
