## Time 时间选择器

 用于选择或输入日期

### 固定时间点

提供几个固定的时间点供用户选择

:::demo 使用 aui-time-select 标签，分别通过`star`、`end`和`step`指定可选的起始时间、结束时间和步长
```html
<aui-time
  v-model="value1"
  :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
  placeholder="选择时间">
</aui-time>

<script>
  export default {
    data() {
      return {
        value1: ''
      };
    }
  }
</script>
```
:::

### 任意时间点

可以选择任意时间

:::demo 使用 aui-time 标签，通过`selectableRange`限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开`arrow-control`属性则通过界面上的箭头进行选择。
```html
<template>
  <aui-time
    is-picker
    v-model="value2"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </aui-time>
  <aui-time
    is-Picker
    arrow-control
    v-model="value3"
    :picker-options="{
      selectableRange: '18:30:00 - 20:30:00'
    }"
    placeholder="任意时间点">
  </aui-time>
</template>

<script>
  export default {
    data() {
      return {
        value2: new Date(2016, 9, 10, 18, 40),
        value3: new Date(2016, 9, 10, 18, 40)
      };
    }
  }
</script>
```
:::

### 固定时间范围

若先选择开始时间，则结束时间内备选项的状态会随之改变

:::demo
```html
<template>
  <aui-time
    placeholder="起始时间"
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }">
  </aui-time>
  <aui-time
    placeholder="结束时间"
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }">
  </aui-time>
</template>

<script>
  export default {
    data() {
      return {
        startTime: '',
        endTime: ''
      };
    }
  }
</script>
```
:::

### 任意时间范围

可选择任意的时间范围

:::demo 添加`is-range`属性即可选择时间范围，同样支持`arrow-control`属性。
```html
<template>
  <aui-time
    is-picker
    is-range
    v-model="value4"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </aui-time>
  <aui-time
    is-picker
    is-range
    arrow-control
    v-model="value5"
    range-separator="至"
    start-placeholder="开始时间"
    end-placeholder="结束时间"
    placeholder="选择时间范围">
  </aui-time>
</template>

<script>
  export default {
    data() {
      return {
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
      };
    }
  }
</script>
```
:::

### Attributes

| 属性                    | 说明                                                         | 类型              | 可选值       | 默认值  |
| ----------------------- | ------------------------------------------------------------ | ----------------- | ------------ | ------- |
| **`is-picker`**         | 选择时间模板样式                                             | `boolean`         | `true`\|`false` | `false` |
| **`readonly`**          | 是否只读                                                     | `boolean`         | `true`\|`false` | `false` |
| **`disabled`**          | 是否禁用                                                     | `boolean`         | `true`\|`false` | `false` |
| **`clearable`**         | 是否显示清除按钮                                             | `boolean`         | `true`\|`false` | `true`  |
| **`placeholder`**       | 时间框的占位描述                                             | `string`          | -            | 请输入时间       |
| **`start-placeholder`** | 范围选择时开始日期的占位内容                                 | `string`          | -            | -       |
| **`end-placeholder`**   | 范围选择时开始日期的占位内容                                 | `string`          | -            | -       |
| **`is-range`**          | 是否为时间范围选择                                           | `boolean`         | `true`\|`false` | `false` |
| **`picker-options`**    | 当前时间日期选择器                                           | `object`          | -            | -       |
| **`value-format`**      | 绑定值的格式。不指定则绑定值为 Date 对象                     | `string`          | -            | -       |
| **`default-value`**     | 选择器打开时默认显示的时间                                   | `string`\|`date`     | -            | -       |
| **`back-trigger`**      | 是否向上触发事件                                             | `boolean`         | `true`\|`false` | `false` |
| **`noinput`**           | 用户不可输入，但是可以选择日期与readonly不同                 | `boolean`         | `true`\|`false` | `false` |
| **`start`**             | 开始时间                                                     | `string`          | -            | 9:00    |
| **`end`**               | 结束时间                                                     | `string`          | -            | 18:00   |
| **`step`**              | 间隔时间                                                     | `string`          | -            | 0:30    |
| **`selectable-range`**  | 可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00'] | `string|string[]` | -            | -       |

### Events

| 事件名       | 描述                             | 参数       |
| ------------ | -------------------------------- | ---------- |
| **`change`** | 用户确认选定的值时触发组件绑定值 | 组件绑定值 |
| **`blur`**   | 失去焦点时触发                   | 组件实例   |
| **`focus`**  | 获取焦点时触发                   | 组件实例   |
