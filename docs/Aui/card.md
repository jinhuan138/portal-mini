## Card 卡片
将信息聚合在卡片容器中展示。

### 基础用法


包含标题，内容，底部和操作。

:::demo Card 组件包括`header`、`body`和`footer`部分，`header`和`footer`部分需要有显式具名 slot 分发，同时也是可选的。
```html
<aui-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <aui-button style="float: right; padding: 3px 0" type="text">操作按钮</aui-button>
  </div>
  <div slot="default" v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
  <div slot="footer" class="clearfix">
    <span>卡片底部</span>
  </div>
</aui-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### 简单卡片

卡片可以只有内容区域。

:::demo
```html
<aui-card class="box-card">
  <div slot="default" v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</aui-card>

<style>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    width: 480px;
  }
</style>
```
:::

### 带图片

可配置定义更丰富的内容展示。

:::demo 配置`body-style`属性来自定义`body`部分的`style`，我们还使用了布局组件。
```html
<aui-row>
  <aui-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
    <aui-card :body-style="{ padding: '0px' }">
      <img src="../examples/assets/images/hamburger.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <aui-button type="text" class="button">操作按钮</aui-button>
        </div>
      </div>
    </aui-card>
  </aui-col>
</aui-row>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header | 设置 header，也可以通过 `slot#header` 传入 DOM | string| — | — |
| body-style | 设置 body 的样式| object| — | { padding: '20px' } |