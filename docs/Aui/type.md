## Type 打字组件

打字组件。

### 基本用法
设置需要打的字，点击开始打字按钮。打字组件即可使用。

::: demo CountDown 组件提供两个时间参数以及一个结束时的回调。
```html
<template>
  <div>
    <aui-type
      ref="type"
      :type-data="words"
    ></aui-type>
    <Button @click="handleClick">开始打字</Button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        words: "中国湖南长沙市天心区中意一路长城水郡1栋2单元507，中国湖南长沙市润和滨江广场1栋1单元3202",
      }
    },
    methods: {
      handleClick() {
        this.$refs.type.start();
      },
    }
  }
</script>
```
:::

### 设置组件高度、字体、字体大小

::: demo CountDown 组件提供两个时间参数以及一个结束时的回调。
```html
<template>
  <div>
    <aui-type
      :type-data="words"
      :height="300"
      :font-family="fontFamily"
      :font-size="fontSize"
    ></aui-type>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        words: "中国湖南长沙市天心区中意一路长城水郡1栋2单元507，中国湖南长沙市润和滨江广场1栋1单元3202",
        fontFamily: "SimSun",
        fontSize: "25"
      }
    },
  }
</script>
```
:::

### 分别获取全部输入值、输入总数、正确个数、正确率、输入速度

::: demo Type 分别获取全部输入值、输入总数、正确个数、正确率、输入速度。
```html
<template>
  <div>
    <aui-type
      ref="typeTwo"
      :type-data="words"
    ></aui-type>
    <Button @click="handleClickTwo">开始打字</Button>
    <Button @click="handleClickEndTwo">结束打字</Button>
    <Button @click="handleClickGetInputTwo">获取相关数据</Button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        words: "中国湖南长沙市天心区中意一路长城水郡1栋2单元507，中国湖南长沙市润和滨江广场1栋1单元3202",
      }
    },
    methods: {
      handleClickTwo() {
        this.$refs.typeTwo.start();
      },
      handleClickEndTwo() {
       this.$refs.typeTwo.end();
      },
      handleClickGetInputTwo() {
        let input = this.$refs.typeTwo.getInput();
        let inputWords = this.$refs.typeTwo.getInputWords();
        let rightWords = this.$refs.typeTwo.getRightWords();
        let correctRate = this.$refs.typeTwo.getCorrectRate();
        let inputSpeed = this.$refs.typeTwo.getInputSpeed();
        console.log("全部输入值:" +input+ "  输入总数:" +inputWords+ "  正确个数:" +rightWords+ "  正确率:" +correctRate+ "  输入速度:"+inputSpeed);
      },
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type-data(必填) | 设置打字组件的数据源 | string(如："中国湖南长沙市天心区中意一路长城水郡1栋2单元507") | — | 当前时间 |
| height| 模板区及打字区高度（非整个组件） | number(如：300) | — | — |
| font-family |模板及输入框字体 | string(如："SimSun")  | — | — |
| font-size | 模板及输入框字体大小 | string(如："25") | — | — |
| row-word| 每行显示字数(已弃用)| number(如：15) | — | 不设置默认每行20 |

### Methods
| 方法名      | 说明          | 参数 |
|---------- |-------------- | -- |
| start | 开始打字，打字组件非readonly | — |
| end | 结束打字，打字组件readonly| — |
| getInput | 获取全部输入值| — |
| getInputWords | 获取输入总数| — |
| getRightWords | 获取正确个数| — |
| getCorrectRate | 获取正确率| — |
| getInputSpeed | 获取输入速度| — |