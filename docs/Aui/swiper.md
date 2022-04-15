## swiper 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容

### 基础用法

适用广泛的基础用法

:::demo 结合使用`aui-swiper`和`aui-swiper-item`标签就得到了一个走马灯。幻灯片的内容是任意的，需要放在`aui-swiper-item`标签中。默认情况下，在鼠标 hover 底部的指示器时就会触发切换。通过设置`trigger`属性为`click`，可以达到点击触发的效果。
```html
<template>
  <div class="flex-box">
    <div class="block">
      <span class="demonstration">默认 Hover 指示器触发</span>
      <aui-swiper height="150px">
        <aui-swiper-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </aui-swiper-item>
      </aui-swiper>
    </div>
    <div class="block">
      <span class="demonstration">Click 指示器触发</span>
      <aui-swiper trigger="click" height="150px">
        <aui-swiper-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </aui-swiper-item>
      </aui-swiper>
    </div>
  </div>
</template>

<style>
  .aui-swiper__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .aui-swiper__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .aui-swiper__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
</style>
```
:::

### 指示器

可以将指示器的显示位置设置在容器外部

:::demo `indicator-position`属性定义了指示器的位置。默认情况下，它会显示在走马灯内部，设置为`outside`则会显示在外部；设置为`none`则不会显示指示器。
```html
<template>
  <aui-swiper indicator-position="outside">
    <aui-swiper-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </aui-swiper-item>
  </aui-swiper>
</template>

<style>
  .aui-swiper__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .aui-swiper__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .aui-swiper__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### 切换箭头
可以设置切换箭头的显示时机

:::demo `arrow`属性定义了切换箭头的显示时机。默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示；若将`arrow`设置为`always`，则会一直显示；设置为`never`，则会一直隐藏。
```html
<template>
  <aui-swiper :interval="5000" arrow="always">
    <aui-swiper-item v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </aui-swiper-item>
  </aui-swiper>
</template>

<style>
  .aui-swiper__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .aui-swiper__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .aui-swiper__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### 卡片化
当页面宽度方向空间空余，但高度方向空间匮乏时，可使用卡片风格

:::demo 将`type`属性设置为`card`即可启用卡片模式。从交互上来说，卡片模式和一般模式的最大区别在于，可以通过直接点击两侧的幻灯片进行切换。
```html
<template>
  <aui-swiper :interval="4000" type="card" height="200px" :cardnum="5">
    <aui-swiper-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </aui-swiper-item>
  </aui-swiper>
</template>

<style>
  .aui-swiper__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .aui-swiper__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .aui-swiper__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
```
:::

### Attributes

| 属性                     | 说明                                        | 类型      | 可选值                     | 默认值    |
| ------------------------ | ------------------------------------------- | --------- | -------------------------- | --------- |
| **`height`**             | 走马灯的高度                                | `string`  | -                          | -         |
| **`trigger`**            | 指示器的触发方式                            | `string`  | `click`\|`hover`           | `hover`   |
| **`autoplay`**           | 是否自动切换                                | `boolean` | `true`\|`false`            | `true`    |
| **`interval`**           | 自动切换的时间间隔，单位为毫秒              | `number`  | -                          | 3000      |
| **`indicator-position`** | 指示器的位置                                | `string`  | `outside`\|`none`          | `outside` |
| **`arrow`**              | 切换箭头的显示时机                          | `string`  | `always`\|`hover`\|`never` | `hover`   |
| **`type`**               | 走马灯的类型                                | `string`  | `normal`\|`card`           | `normal`  |
| **`cardnum`**            | 走马灯卡片类型展示个数                      | `number`  | 3/5                        | 3         |
| **`duration`**           | 切换动画时间                                | `number`  | -                          | 300       |
### Methods

| 方法名              | 描述               | 参数                              |
| ------------------- | ------------------ | --------------------------------- |
| **`setActiveItem`** | 手动切换幻灯片     | 需要切换的幻灯片的索引，从 0 开始 |
| **`prev`**          | 切换至上一张幻灯片 | -                                 |
| **`next`**          | 切换至下一张幻灯片 | -                                 |


### swiper Events
| 事件名称 | 说明             | 回调参数                               |
| -------- | ---------------- | -------------------------------------- |
| change   | 幻灯片切换时触发 | 目前激活的幻灯片的索引，原幻灯片的索引 |

### swiper-Item Attributes
| 参数  | 说明                                        | 类型   | 可选值 | 默认值 |
| ----- | ------------------------------------------- | ------ | ------ | ------ |
| name  | 幻灯片的名字，可用作 `setActiveItem` 的参数 | string | —      | —      |
| label | 该幻灯片所对应指示器的文本                  | string | —      | —      |
