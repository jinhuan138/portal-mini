## Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

### 基本用法

:::demo 绑定`v-model`到一个`Boolean`类型的变量。可以使用`active-color`属性与`inactive-color`属性来设置开关的背景色。
```html
<aui-switch
  v-model="value2"
  active-color="#13ce66"
  inactive-color="#ff4949">
</aui-switch>

<script>
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
</script>
```
:::

### 禁用状态

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。

```html
<aui-switch
  v-model="value6"
  >
</aui-switch>
<aui-switch
  v-model="value7"
  disabled>
</aui-switch>
<script>
  export default {
    data() {
      return {
        value6: true,
        value7: false
      }
    }
  };
</script>
```
:::


### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled  | 是否禁用    | boolean   | — | false   |
| value-map  | 用于自定义 false 和 true 映射的实际值，用于方便处理比如接口返回了 0 1 这类非 boolean 值的情况    | array | — | [false,true] |
| active-color  | switch 打开时的背景色    | string   | — | #409EFF |
| inactive-color  | switch 关闭时的背景色    | string   | — | #C0CCDA |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | switch 状态发生变化时的回调函数    | 新状态的值 |
