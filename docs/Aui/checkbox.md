## Checkbox 多选框
一组备选项中进行多选

### 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 checkbox 按钮后的介绍。

:::demo 在`aui-checkbox`元素中定义`v-model`绑定变量，单一的`checkbox`中，默认绑定变量的值会是`Boolean`，选中为`true`。
```html
<template>

  <aui-checkbox :requisite="requisite1"  @change="change1" :options="options1" :label="label" v-model="checked"></aui-checkbox>
</template>
<script>
  export default {
    data() {
      return {
        disabled1:true,
        requisite1:true,
        label:'label-test',
        options1:[{
          label:'label1',
          value:'value1',
          disabled:true,
          position:'left'
        },{
          label:'label2',
          value:'value2',
          disabled:false,
          checked:true
        },{
          label:'label3',
          value:'value3',
          disabled:false,
        },{
          label:'label4',
          value:'value4',
          disabled:false,
        }],
        checked: [],
      };
    },
    methods:{
      change1(val,ev){
        console.log(val,ev)
      },
    }
  };
</script>
```
:::


### Checkbox Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 标题 | string  |       —        |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |
| min     | 可被勾选的 checkbox 的最小数量   | number    |       —        |     —    |
| max     | 可被勾选的 checkbox 的最大数量   | number    |       —        |     —    |
| options     | 每个选项属性 | array  |       —        |     —    |
| indeterminate  | 设置 indeterminate 状态，只负责样式控制    | boolean   |  — | false   |
| requisite     | 是否为必选   | boolean    |       —        |     false    |

### Checkbox Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |

### options Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 标题 | string / number   |       —        |     —    |
| value     | 选中状态的值 | string  |       —        |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |
| checked  | 当前是否勾选    | boolean   |  — | false   |
| position     | label 位置，可以设置为 left 或者 right | string  |       —        |     right    |


