## Badge 标记

出现在按钮、图标旁的数字或状态标记。

### 基础用法
展示新消息数量。

:::demo
```html
<aui-button class="item" @click="toggle">{{status? '显示 Badge' : '隐藏 Badge'}}</aui-button>
<aui-badge :value="12" class="item" :hidden="status">
  <aui-button>评论</aui-button>
</aui-badge>
<span>评论 <aui-badge :value="12" :hidden="status" /></span>
<script>
export default {
  data(){
    return{
      status: false
    }
  },
  methods: {
    toggle(){
      this.status = !this.status
    }
  }
}
</script>
<style>
.item {
  margin-right: 40px;
}
</style>
```
:::

### 最大值
可自定义最大值。

:::demo
```html
<aui-badge :value="200" :max="99" class="item">
  <aui-button>评论</aui-button>
</aui-badge>
<span>评论 <aui-badge :value="100" :max="10" /></span>
<style>
.item {
  margin-right: 40px;
}
</style>
```
:::

### 自定义内容
可以显示数字以外的文本内容。

:::demo
```html
<aui-badge value="new" class="item">
  <aui-button>评论</aui-button>
</aui-badge>
<span>评论 <aui-badge value="hot" /></span>
<style>
.item {
  margin-right: 40px;
}
</style>
```
:::

### 小红点
以红点的形式标注需要关注的内容。

:::demo 除了数字外，设置`is-dot`属性，它接受一个`Boolean`。
```html
<aui-badge :is-dot="true" class="item">
  <aui-button>评论</aui-button>
</aui-badge>
<span>评论 <aui-badge :is-dot="true" /></span>
<style>
.item {
  margin-right: 40px;
}
</style>
```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| value | 显示值 | string / number | — | — |
| max | 最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型 | number | — | — |
| is-dot | 小圆点 | boolean | true / false | false |
| hidden | 隐藏 badge | boolean | true / false | false |

### Slot
| name | 说明 |
|------|------|
| default | 默认插槽 |
