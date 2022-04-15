## Tag 标签

用于标记和选择。

### 基础用法

:::demo 由`type`属性来选择tag的类型，也可以通过`background-color`属性来自定义背景色。
```html
<aui-tag>标签一</aui-tag>
<aui-tag type="success">标签二</aui-tag>
<aui-tag type="info">标签三</aui-tag>
<aui-tag type="warning">标签四</aui-tag>
<aui-tag type="danger">标签五</aui-tag>
```
:::

### 可移除标签

:::demo 设置`closable`属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置`disable-transitions`属性，它接受一个`Boolean`，true 为关闭。
```html
<aui-tag
  v-for="tag in tags"
  :key="tag.name"
  closable
  :type="tag.type">
  {{tag.name}}
</aui-tag>

<script>
  export default {
    data() {
      return {
        tags: [
          { name: '标签一', type: '' },
          { name: '标签二', type: 'success' },
          { name: '标签三', type: 'info' },
          { name: '标签四', type: 'warning' },
          { name: '标签五', type: 'danger' }
        ]
      };
    }
  }
</script>
```
:::

### 标签`close`事件

:::demo
```html
<aui-tag
  :key="tag"
  v-for="tag in dynamicTags"
  closable
  :disable-transitions="false"
  @close="handleClose(tag)">
  {{tag}}
</aui-tag>

<style>
  .aui-tag + .aui-tag {
    margin-left: 10px;
  }
</style>

<script>
  export default {
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三'],
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      }
    }
  }
</script>
```
:::

### 不同尺寸

Tag 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。
```html
<aui-tag closable>默认标签</aui-tag>
<aui-tag size="medium" closable>中等标签</aui-tag>
<aui-tag size="small" closable>小型标签</aui-tag>
<aui-tag size="mini" closable>超小标签</aui-tag>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 主题 | string | success/info/warning/danger | — |
| closable | 是否可关闭 | boolean | — | false |
| disable-transitions | 是否禁用渐变动画 | boolean | — | false |
| background-color | 背景色 | string | — | — |
| size | 尺寸 | string | medium / small / mini | — |


### Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| close | 关闭 Tag 时触发的事件 | — |
