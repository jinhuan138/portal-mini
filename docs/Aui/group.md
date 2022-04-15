## Group 分组框

用于输入框类型的分组

### 基础用法

不写 label 的样式

:::demo
```html
<aui-group>
    <aui-input></aui-input>
    <aui-select></aui-select>
</aui-group>
```
:::

默认样式（default）

:::demo
```html
<aui-group label="个人信息" color="red">
    <aui-input></aui-input>
    <aui-select></aui-select>
</aui-group>
```
:::

<!-- 填充背景样式（fill）

:::demo
```html
<aui-group type="fill">
    <aui-input></aui-input>
    <aui-select></aui-select>
</aui-group>
```
::: -->

## Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| label | 分组标题 | String | —— | 默认标题 |
| color | 分组标题文字颜色 | String | —— | —— |

## Slot
| name | 说明 |
|-------|-------|
| default | 内容插槽 |
