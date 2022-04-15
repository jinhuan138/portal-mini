## CountDown 倒计时

倒计时组件。

### 数字

::: demo CountDown type 为 number 时的倒计时器
```html
<template>
  <aui-countdown v-model="val1" :type="type2" @on-end="end"></aui-countdown>
</template>

<script>
  export default {
    data() {
      return {
        val1: 60,
        type: "number",
        type2:"number",
      };
    },
    methods: {
      end() {
        console.log("倒计时结束！");
      },
    },
  };
</script>
```

:::

### 日期

::: demo
```html
<template>
  <aui-countdown v-model="val2" :type="type1" @on-end="end"></aui-countdown>
</template>

<script>
  export default {
    data() {
      return {
        val2: 10,
        type1: "date",
      };
    },
    methods: {
      end() {
        console.log("倒计时结束！");
      },
    },
  };
</script>
```

:::

### 是否开始计数

::: demo
```html
<template>
  <aui-button @click="start1=true">开始计时-按钮</aui-button>
  <br />
  <br />
  <aui-button @click="start1=false">结束计时-按钮</aui-button>
  <br />
  <br />
  <aui-button @click="restart">重新计时-按钮</aui-button>
  <br />
  <br />
  <aui-button @click="getUsedTime">获取已用时-按钮</aui-button>
  <br />
  <br />
  <aui-countdown
    ref="restart1"
    v-model="val2"
    :type="type1"
    :start="start1"
    @on-end="end"
  ></aui-countdown>
</template>

<script>
  export default {
    data() {
      return {
        val2: 10,
        type1: "date",
        start1: false,
      };
    },
    methods: {
      end() {
        console.log("倒计时结束！");
      },
      restart() {
        this.start1 = true;
        this.$refs.restart1.restart();
      },
      getUsedTime() {
        console.log("已用时时间：" + this.$refs.restart1.getUsedTime());
      },
    },
  };
</script>
```

:::

### Attributes

| 参数   | 说明                      | 类型    | 可选值      | 默认值 |
| ------ | ------------------------- | ------- | ----------- | ------ |
| type   | 显示样式,数字或时间       | string  | number/date | —      |
| format | %D 天 %H 小时 %M 分 %S 秒 | string  | —           | —      |
| value  | 时间，秒为单位            | number  | —           | —      |
| start  | 是否开始计数              | Boolean | —           | true   |

### Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| on-end   | 倒计时结束时的回调 | —        |

### VueComponent API

| 方法名称    | 说明                     | 参数类型 | 备注 |
| ----------- | ------------------------ | -------- | ---- |
| getUsedTime | 获取已用时时间，秒为单位 | -        | -    |
