## Textarea 文本域

文本域组件。

### 基本用法

:::demo 绑定`v-model`到一个`String`类型的变量。
```html
<aui-textarea
  v-model = "value1"
  placeholder = "placeholder1"
  @focus = "focus"
>
</aui-textarea>

<script>
  export default {
    data() {
      return {
        value1: '',
        placeholder1:'请输入文本内容'
      }
    },
    methods:{
      focus(){
        console.log('获取焦点')
      }
    }
  };
</script>
```
:::

### 禁用状态

:::demo 设置`disabled`属性，接受一个`Boolean`，设置`true`即可禁用。
```html
<aui-textarea
  v-model="value2"
  :disabled = "disabled1"
>
</aui-textarea>
<script>
  export default {
    data() {
      return {
        value2: 'test-textarea-info',
        disabled1: true
      }
    }
  };
</script>
```
:::
### 最大长度

:::demo 设置`maxlength`属性，接受一个`Number`，设置后限定文本长度。
```html
<aui-textarea
  v-model="value3"
  :maxlength="maxlength1"
>
</aui-textarea>
<script>
  export default {
    data() {
      return {
        value3: '',
        maxlength1:3
      }
    }
  };
</script>
```
:::

### 显示行数

:::demo 设置`rows`属性，接受一个`Number`，设置显示行数。
```html
<aui-textarea label='显示5行' :rows='5'></aui-textarea>
```
:::

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----------|--------|----------|-------------|--------|
| maxlength | 文本最大长度 | number | — | - |
| rows | 显示行数 | number | — | 3 |
| placeholder | 输入框占位文本 | string | — | — |
| disabled | 禁用 | boolean | — | false |
| readonly | 是否只读 | boolean | true/false | false |
| label | 输入框关联的label文字 | string | — | — |
| position | label位置 | String | left/top | left |
| requisite | 是否必输 | Boolean | true/false | false |
| validator-test | 校验规则 | function/regexp | —— | —— |
| prompt-information | 校验错误提示语 | string | —— | —— |
| symbol | 必输标记 | string | —— | * |


### Events
| 事件名称 | 说明 | 回调参数 |
|----------|--------|----------|
| focus | 获取焦点时触发 | Event |
| blur | 失去焦点时触发 | Event |

## VueComponent API

| 方法名称 | 说明 | 参数类型 | 备注 |
|---------- |-------- |---------- |----- |
| setDisabled | 设置input是否可用 | boolean | - |
| setRequisite | 设置input是否必输 | boolean | - |
| setReadonly | 设置input是否只读 | boolean | - |
