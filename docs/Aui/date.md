## `Date` 日期选择器

> 用于选择或输入日期

### 默认用法

> `type` 默认是 `date`,其他值参考[属性说明](#attributes)

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <aui-date v-model="value1" placeholder="选择日期"></aui-date>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value1: "",
      };
    },
  };
</script>
```

:::

### `type` 不同日期展示

> 通过扩展基础的日期选择，可以选择周、月、年

:::demo
```html
<div class="block">
  <span class="demonstration">周</span>
  <aui-date
    v-model="value3"
    type="week"
    format="yyyy 第 WW 周"
    placeholder="选择周"
  >
  </aui-date>
</div>
<div class="block">
  <span class="demonstration">月</span>
  <aui-date v-model="value4" type="month" placeholder="选择月"></aui-date>
</div>
<div class="block">
  <span class="demonstration">年</span>
  <aui-date v-model="value5" type="year" placeholder="选择年"></aui-date>
</div>

<script>
  export default {
    data() {
      return {
        value3: "",
        value4: "",
        value5: "",
      };
    },
  };
</script>
```

:::

### 选择日期范围

> 可在一个选择器中便捷地选择一个日期范围

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">日期范围</span>
    <aui-date v-model="value6" type="daterange"> </aui-date>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value6: "",
      };
    },
  };
</script>
```

:::

### 日期格式

> 使用[`format`](#format-格式规范)指定输入框的格式；使用`value-format`指定绑定值的格式。

:::demo
```html
<template>
  <div class="block">
    <span class="demonstration">默认为 Date 对象</span>
    <div class="demonstration">值：{{ value10 }}</div>
    <aui-date
      v-model="value10"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
    >
    </aui-date>
  </div>
  <div class="block">
    <span class="demonstration">使用 value-format</span>
    <div class="demonstration">值：{{ value11 }}</div>
    <aui-date
      v-model="value11"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="yyyy-MM-dd"
    >
    </aui-date>
  </div>
  <div class="block">
    <span class="demonstration">时间戳</span>
    <div class="demonstration">值：{{ value12 }}</div>
    <aui-date
      v-model="value12"
      type="date"
      placeholder="选择日期"
      format="yyyy 年 MM 月 dd 日"
      value-format="timestamp"
    >
    </aui-date>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value10: "",
        value11: "",
        value12: "",
      };
    },
  };
</script>
```

:::

### Attributes

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ------ | ------ |
| **`popover-title`** | 悬浮提示标题 | `string` | - | - |
| **`popover-content`** | 悬浮提示内容 | `string` | - | - |
| **`popper-class`** | 为悬浮提示增加类名 | `string` | —— | —— |
| **`label`** | 日期框说明 | `string` | - | - |
| **`requisite`** | 是否必输 | `boolean` | `true` \| `false` | `false` |
| **`disabled`** | 是否禁用 | `boolean` | `true` \| `false` | `false` |
| **`symbol`** | 必输标记 | `string` | - | \* |
| **`position`** | label 位置 | `string` | `left` \| `top` | left |
| **`readonly`** | 是否只读 | `boolean` | `true` \| `false` | `false` |
| **`placeholder`** | 日期框占位描述 | `string` | - | 请输入 |
| **`back-trigger`** | 是否向上触发 blur 事件 | `boolean` | `true` \| `false` | `false` |
| **`noinput`** | 只读（不可输入，可以下拉选择日期） | `boolean` | `true` \| `false` | `true` |
| **`clearable`** | 是否显示清除按钮 | `boolean` | `true` \| `false` | `true` |
| **`start-placeholder`** | 范围选择时开始日期的占位内容 | `string` | - | 开始日期 |
| **`end-placeholder`** | 范围选择时结束日期的占位内容 | `string` | - | 结束日期 |
| **`type`** | 显示类型 | `string` | `year` \| `month` \| `date` \| `daterange` | `date` |
| **`format`** | 显示在输入框中的格式 | `string` | - | `yyyy-MM-dd` |
| **`onPick`** | 选中日期后会执行的回调，只有当 `daterange` 才生效 | `function` | - | - |
| **`disabledDate`** | 自定义标记特定日期是否应该禁用，返回 `true` 表示禁用，`false` 表示不禁用，不返回表示和原有逻辑一致(这样不影响和 disable-weekend 等禁用属性同时使用) | `function` | - | - |
| **`default-time`** | 范围选择时选中日期所使用的当日内具体时刻(数组，长度为 2，每项值为字符串，形如 12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 00:00:00) | `string[]` | - | - |
| **`value-format`** | 可选，绑定值的格式。不指定则绑定值为 `Date` 对象 | `string` | - | - |

### Events

| 事件名       | 描述                             | 参数       |
| ------------ | -------------------------------- | ---------- |
| **`change`** | 用户确认选定的值时触发组件绑定值 | 组件绑定值 |
| **`blur`**   | 失去焦点时触发                   | 组件实例   |
| **`focus`**  | 获取焦点时触发                   | 组件实例   |

### Methods

| 方法名             | 描述         | 参数      |
| ------------------ | ------------ | --------- |
| **`setDisabled`**  | 设置是否可用 | `boolean` |
| **`setVisible`**   | 设置是否可见 | `boolean` |
| **`setRequisite`** | 设置是否必输 | `boolean` |
| **`setReadonly`**  | 设置是否只读 | `boolean` |
| **`setPopover`**   | 设置悬浮提示 | `boolean` |
