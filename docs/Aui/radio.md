## Radio 单选框

在一组备选项中进行单选

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

:::demo 要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。
```html
<template>
  <aui-radio :disabled="disabled1" v-model="radio" :options="options1" ></aui-radio>
</template>

<script>
  export default {
    data () {
      return {
        disabled1:false,
        options1:[{
          label:'label1',
          value:'value1',
          disabled:true,
          border:true
        },{
          label:'label2',
          value:'value2',
          disabled:false,
          border:true
        },{
          label:'label3',
          value:'value3',
          disabled:false,
          border:false
        }],
        radio: 'value3'
      };
    }
  }
</script>

```
:::

### Radio Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| disabled  | 是否禁用    | boolean   | — | false   |
| options | 可选列表，可以用字符串组成的数组或者 key=>value 的形式 | Array    |      —         |     —    |

### Radio Events
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| change  | 绑定值变化时触发的事件 |  选中的 Radio value 值  |

### options Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label  | Radio的显示的值    | string   | — | -   |
| value  | Radio的value值    | string   | — | -   |
| disabled | 是否禁用 | boolean    |      —         |     false    |
| border | 是否显示边框 | boolean    |      —         |     false    |

### Radio-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Radio 的 value  | string / number  |        —       |     —    |
| disabled  | 是否禁用    | boolean   | — | false   |
| name | 原生 name 属性 | string    |      —         |     —    |
