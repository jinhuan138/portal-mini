## Slider 滑块

通过拖动滑块在一个固定区间内进行选择

### 基础用法

在拖动滑块时，显示当前值

:::demo 通过设置绑定值自定义滑块的初始值
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <aui-slider v-model="value1"></aui-slider>
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <aui-slider v-model="value2"></aui-slider>
  </div>
  <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <aui-slider v-model="value3" :show-tooltip="false"></aui-slider>
  </div>
  <div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <aui-slider v-model="value4" :format-tooltip="formatTooltip"></aui-slider>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <aui-slider v-model="value5" disabled></aui-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>
```
:::

### 离散值

选项可以是离散的

:::demo 改变`step`的值可以改变步长，通过设置`show-step`属性可以显示间断点
```html
<template>
  <div class="block">
    <span class="demonstration">不显示间断点</span>
    <aui-slider
      v-model="value6"
      :step="10">
    </aui-slider>
  </div>
  <div class="block">
    <span class="demonstration">显示间断点</span>
    <aui-slider
      v-model="value7"
      :step="10"
      show-breakpoint>
    </aui-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value6: 0,
        value7: 0
      }
    }
  }
</script>
```
:::

### 带有输入框

通过输入框设置精确数值

:::demo 设置`show-input`属性会在右侧显示一个输入框
```html
<template>
  <div class="block">
    <aui-slider
      v-model="value8"
      show-input>
    </aui-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value8: 0
      }
    }
  }
</script>
```
:::

### 竖向模式

:::demo 设置`direction='vertical'`可使 Slider 变成竖向模式，此时必须设置高度`length`属性
```html
<template>
  <div class="block">
    <aui-slider
      v-model="value10"
      direction='vertical'
      length="200px">
    </aui-slider>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value10: 0
      }
    }
  }
</script>
```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----|----|----|--------|--------|
| min | 最小值 | number | — | 0 |
| max | 最大值 | number | — | 100 |
| disabled | 是否禁用 | boolean | — | false |
| step | 步长 | number | — | 1 |
| show-input | 是否显示输入框，仅在非范围选择时有效 | boolean | — | false |
| show-input-controls | 在显示输入框的情况下，是否显示输入框的控制按钮 | boolean | — | true |
| show-breakpoint | 是否显示间断点 | boolean | — | false |
| show-tooltip | 是否显示 tooltip | boolean | — | true |
| format-tooltip | 格式化 tooltip message | function(value) | — | — |
| direction | 是否竖向模式 | string | horizontal/vertical | horizontal |
| length | 滑块长度 | string | — | 200px |

### Events
| 事件名称 | 说明 | 回调参数 |
|----------|--------|----------|
| change | 值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）| 改变后的值 |
