## ColorPicker 颜色选择器

用于颜色选择，支持多种格式。

### 基础用法

:::demo 使用 v-model 与 Vue 实例中的一个变量进行双向绑定，绑定的变量需要是字符串类型。
```html
<div class="block">
  <span class="demonstration">有默认值</span>
  <aui-color-picker v-model="color1"></aui-color-picker>
</div>
<div class="block">
  <span class="demonstration">无默认值</span>
  <aui-color-picker v-model="color2"></aui-color-picker>
</div>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null
      }
    }
  };
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled | 是否禁用 | boolean | true/false | false |
### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 当绑定值变化时触发 | 当前值 |