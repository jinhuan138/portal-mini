## Input 输入框

通过鼠标或键盘输入字符

### 基础用法

:::demo
```html
<aui-input v-model="input" placeholder="请输入内容" :maxlength="maxlength"></aui-input>
<br/>
<aui-input v-model="inputPwd" type='password' placeholder="请输入密码"></aui-input>
<script>
export default {
  data() {
    return {
      input: '',
      inputPwd: '',
      maxlength:3
    }
  }
}
</script>
```
:::


### 禁用/只读状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件
```html
<aui-input v-model="input1" :disabled="true"></aui-input>
<br/>
<aui-input v-model="input1" :readonly="true"></aui-input>

<script>
export default {
  data() {
    return {
      input1: '不能修改的内容'
    }
  }
}
</script>
```
:::

### Label 关联

:::demo
```html
<aui-input v-model="input2" label="label占位" placeholder="请输入内容"></aui-input>

<script>
export default {
  data() {
    return {
      input2: ''
    }
  }
}
</script>
```
:::

### 输入框内容格式化

> `picture` 支持多种格式的,具体查看 `picture` 的使用说明  
:::demo
```html
<aui-input v-model="input3" placeholder="千分符格式化" picture="999,99"></aui-input>

<script>
export default {
  data() {
    return {
      input3: ''
    }
  }
}
</script>
```
:::

### 输入框校验

> 使用 `validator` 实现实时校验  
> `requisite` 为必输属性  
> `validator-test` 校验规则
:::demo
```html
<aui-input v-model="input4" label="必输校验" requisite :validator-test="test" prompt-information='请输入正确的格式'></aui-input>

<script>
export default {
  data() {
    return {
      input4: '',
      test: /[0-9]+/ig
    }
  }
}
</script>
```
:::

### 弹出提示

:::demo
```html
<aui-input v-model="input5" popover-type='text' suffix-text='%'></aui-input>
<script>
export default {
  data() {
    return {
      input5: ''
    }
  }
}
</script>
```
:::

### 独立的错误提示

不使用提供的校验规则，自行控制错误提示

:::demo
```html
<aui-input v-model="input6" ref='input_valid'></aui-input>
<br/>
<aui-button @click='showError'>显示错误信息</aui-button>
<aui-button @click='hideError'>隐藏错误信息</aui-button>

<script>
export default {
  data() {
    return {
      input6: ''
    }
  },
  methods: {
    hideError() {
      this.$refs.input_valid.hideErrorMsg();
    },
    showError() {
      this.$refs.input_valid.showErrorMsg('输入错误');
    }
  }
}
</script>
```
:::

### Input Attributes

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text/number/password | text |
| placeholder   | 输入框占位文本    | string          | — | — |
| disabled      | 禁用            | boolean         | — | false   |
| prefix-text | 输入框头部插入内容 | string | - | - |
| suffix-text | 输入框尾部插入内容 | string | - | - |
| readonly | 是否只读 | boolean | true/false | false |
| label | 输入框关联的label文字 | string | — | — |
| position | label位置 | String | left/top | left |
| popover-type | 弹出提示类型 | string | phone/amount/account/text | —— |
| popover-title | 弹出提示标题 | string | —— | —— |
| popover-content | 弹出提示内容 | string | —— | —— |
| popper-class | 为弹出提示增加类名 | string | —— | —— |
| maxlength | 最大输入长度 | number | - | - |
| visible | 是否显示 | boolean | true/false | true |
| requisite | 是否必输 | Boolean | true/false | false |
| validator-test | 校验规则 | function/regexp | —— | —— |
| prompt-information | 校验错误提示语 | string | —— | —— |
| picture | picture校验 | string | —— | —— |
| symbol | 必输标记 | string | —— | * |
| is-sql | 是否sql过滤 | boolean | true/false | true |
| back-trigger | 是否向上触发blur事件<使用foncusmanager有效> | Boolean | true/false | false |


### Input Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 在 Input 值改变时触发 | (value: string \| number) |

## VueComponent API

| 方法名称 | 说明 | 参数类型 | 备注 |
|---------- |-------- |---------- |----- |
| setDisabled | 设置input是否可用 | boolean | - |
| setVisible | 设置input是否可见 | boolean | - |
| setRequisite | 设置input是否必输 | boolean | - |
| setReadonly | 设置input是否只读 | boolean | - |
| showErrorMsg | 显示错误提示信息 | string | 如果存在`validator-test`校验的错误该属性将无效 |
| hideErrorMsg | 隐藏由`hideErrorMsg`显示的错误信息 | — | - |


### **Picture 属性的说明**
> `Picture` 根据一种规则进行的格式化处理的表达式

|规则|说明|
|-----|-----|
|9|只能输入数字0-9, **可以有正负号**|
|0|只能输入数字0-9,**强制输满PICTURE中0规则的位数** (该输入场可以不输入, 输则须输满)|
|A|只能输入字母|
|N|只能输入字母和数字|
|!|只能输入字母和数字,**强制输满PICTURE中!规则的位数** (该输入场可以不输入, 输则须输满)|
|C|只能输入汉字|
|E|只能输入非汉字|
|X|输入任意可显字符|
|^|输入任意字符,字母显示时变大写|

|规则修饰符|说明|
|-----|-----|
|数字|输入的最长位数限制|
|-|对齐方式。默认是左对齐，在规则前加添加 - 表示右对齐|

**e.g.**
> 书写方式: `picture='11"9"' === picture='99999999999'`  
> 说明: 表示最长输入11位数字  
> 针对只能输入数字支持千分符格式 如: `picture='999,999.99'`<br>
> 书写方式: `picture='11"X"' === picture='XXXXXXXXXXX'` <br>
> 说明: 最多输入11位任意可显字符 <br>
> 左对齐：`picture='4"9"'，右对齐：picture='-4"9"'`<br>
> 其他规则都遵从例子的书写方式