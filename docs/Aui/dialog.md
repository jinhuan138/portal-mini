## Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基本用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo 需要设置`visible`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了`before-close`的用法。
```html
<aui-button type="text" @click="dialogVisible = true">点击打开 Dialog</aui-button>

<aui-dialog
  title="提示"
  :fullscreen='fullscreen'
  :show-full-icon='showFullIcon'
  :visible.sync="dialogVisible"
  :before-close="handleClose">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <aui-button @click="dialogVisible = false">取 消</aui-button>
    <aui-button type="primary" @click="dialogVisible = false">确 定</aui-button>
  </span>
</aui-dialog>

<script>
  export default {
    data() {
      return {
        dialogVisible: false,
        fullscreen:false,
        showFullIcon: true,
      };
    },
    methods: {
      handleClose(done) {
        this.$aui.confirm.show('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>
```
:::

:::tip
`before-close` 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 `footer` 具名 slot 里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 `before-close` 的相关逻辑。
:::

### 自定义内容

Dialog 组件的内容可以是任意的，甚至可以是表格，下面是应用了 Element Table 组件的样例。

:::demo
```html
<!-- Table -->
<aui-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</aui-button>

<aui-dialog title="收货地址" :visible.sync="dialogTableVisible" :fullscreen='fullscreen'>
  <aui-table :head-data="headData" :data="gridData" ></aui-table>
</aui-dialog>

<script>
  export default {
    data() {
      return {
        headData: [
          {
            label: "日期",
            prop: "date",
            type: "date"
          },
          {
            label: "姓名",
            prop: "name",
            type: "input"
          },
          {
            label: "地址",
            prop: "address",
            type: "input"
          }
        ],
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        fullscreen: true,
      };
    }
  };
</script>
```
:::

### 嵌套的 Dialog
如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 `append-to-body` 属性。
:::demo 正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog 的场景，我们提供了`append-to-body`属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。
```html
<template>
  <aui-button type="text" @click="outerVisible = true">点击打开外层 Dialog</aui-button>
  
  <aui-dialog title="外层 Dialog" :visible.sync="outerVisible">
    <aui-dialog
      
      title="内层 Dialog"
      :visible.sync="innerVisible"
    >
    </aui-dialog>
    <div slot="footer" class="dialog-footer">
      <aui-button @click="outerVisible = false">取 消</aui-button>
      <aui-button type="primary" @click="innerVisible = true">打开内层 Dialog</aui-button>
    </div>
  </aui-dialog>
</template>

<script>
  export default {
    data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
  }
</script>
```
:::

### 居中布局

标题和底部可水平居中

:::demo 将 `center` 设置为 `true` 即可使标题和底部居中。
```html
<aui-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</aui-button>

<aui-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  
  @show="show"
  @hide="hide"
  center>
  <span>需要注意的是内容是默认不居中的</span>
  <span slot="footer" class="dialog-footer">
    <aui-button @click="centerDialogVisible = false">取 消</aui-button>
    <aui-button type="primary" @click="centerDialogVisible = false">确 定</aui-button>
  </span>
</aui-dialog>

<script>
  export default {
    data() {
      return {
        centerDialogVisible: false
      };
    },
    methods:{
      hide(){
        console.log(111)
      },
      show(){
        console.log(222)
      }
    }
  };
</script>
```
:::

:::tip
`center` 仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。
:::

:::tip
如果 `visible` 属性绑定的变量位于 Vuex 的 store 内，那么 `.sync` 不会正常工作。此时需要去除 `.sync` 修饰符，同时监听 Dialog 的 `show` 和 `hide` 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 `visible` 属性绑定的变量的值。
:::


### 局部的Dialog

可以让Dialog和遮罩层打开在指定的dom节点上，需要使用target属性

:::demo 需要传一个target用来指定它们加在哪个dom上，并且这个dom具有一定高度。
```html
<aui-button type="text" @click="localDialogVisible = true">点击打开 Dialog</aui-button>

<div class="localDialog" ref="getLocalDom">
  <aui-dialog
    title="局部的Dialog"
    :visible.sync="localDialogVisible"
    :target="localDom"
    >
    <span>需要注意的是要给局部的div设置高度</span>
    <span slot="footer" class="dialog-footer">
      <aui-button @click="localDialogVisible = false">取 消</aui-button>
      <aui-button type="primary" @click="localDialogVisible = false">确 定</aui-button>
    </span>
  </aui-dialog>
</div>

<script>
  export default {
    data() {
      return {
        localDialogVisible: false,
        localDom: {}  
      };
    },
    mounted(){
      this.localDom = this.$refs["getLocalDom"];
    },
  };
</script>

<style>
  .localDialog{
    height:400px;
  }
</style>
```
:::

:::tip
传一个target用来指定它们加在哪个dom上，
加高度是为了撑起来当前的div
:::

### 最小化Dialog
可以最小化的dialog
:::demo 
```html
<aui-button type="text" @click="minDialogVisible = true">点击打开 Dialog</aui-button>

<aui-dialog
    title="可以最小化的Dialog"
    :visible.sync="minDialogVisible"
    :show-minus="true"
    >
    <span slot="footer" class="dialog-footer">
      <aui-button @click="minDialogVisible = false">取 消</aui-button>
      <aui-button type="primary" @click="minDialogVisible = false">确 定</aui-button>
    </span>
</aui-dialog>

<script>
  export default {
    data() {
      return {
        minDialogVisible: false
      }
    }
  }
</script>
```
:::

### 可拖拽的Dialog
可以进行拖拽的dialog
:::demo 
```html
<aui-button type="text" @click="dragDialogVisible = true">点击打开 Dialog</aui-button>

<aui-dialog
    title="可以拖拽的Dialog"
    :visible.sync="dragDialogVisible"
    :dialog-drag="true"
    >
    <span>按住我的头部进行拖拽</span>
    <span slot="footer" class="dialog-footer">
      <aui-button @click="dragDialogVisible = false">取 消</aui-button>
      <aui-button type="primary" @click="dragDialogVisible = false">确 定</aui-button>
    </span>
</aui-dialog>

<script>
  export default {
    data() {
      return {
        dragDialogVisible: false
      }
    }
  }
</script>
```
:::

### 没有模态的Dialog
没有遮罩层的dialog
:::demo 
```html
<aui-button type="text" @click="noModalDialogVisible = true">点击打开 Dialog</aui-button>

<aui-dialog
    title="没有遮罩层的Dialog"
    :visible.sync="noModalDialogVisible"
    :is-modal="false"
    >
    <span>通过传isModal来决定要不要遮罩层</span>
    <span slot="footer" class="dialog-footer">
      <aui-button @click="noModalDialogVisible = false">取 消</aui-button>
      <aui-button type="primary" @click="noModalDialogVisible = false">确 定</aui-button>
    </span>
</aui-dialog>

<script>
  export default {
    data() {
      return {
        noModalDialogVisible: false
      }
    }
  }
</script>
```
:::
### 注册dialog回调方法

```js
this.$aui.dialog.register({
    type: 'show',
    host: this, // 可选
    fn: function(dialogComponent) {
      // todo
    }
});
```

### 全局方法

全局方法：this.$aui.dialog.show 调用参数为：options 
- `$aui.dialog.show(options)`
- `$aui.dialog.hide()`

```js
//  引入组件
import App from './App'
// 打开dialog
const h = this.$createElement;
this.$aui.dialog.show({
    title:"dialog title", // title
    content:h(App), // dialog中内容 必填项
    instance:this, // 父页面的vue实例 必填项
    isFocus:true // 激活dialog中的焦点控制 必填项
    importData:{
      // 传入App.vue页面的数据
      aaa:'123',
      bbb:'456'
    }
});

// 关闭dialog
this.$aui.dialog.hide()
```



### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| -------- | ------------ | -------------- | ------ | ------ |
| visible | 是否显示 Dialog，支持 .sync 修饰符 | boolean | — | false  |
| show-minus | 是否显示最小化 | boolean | — | false |
| show-full-icon | 是否显示全屏图标 | boolean | — | false |
| title | Dialog 的标题，也可通过具名 slot （见下表）传入 | string | —  | — |
| fullscreen | 是否为全屏 Dialog | boolean | — | false |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean | — | false |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | boolean | — | true |
| show-close | 是否显示关闭按钮 | boolean | — | true |
| before-close | 关闭前的回调，会暂停 Dialog 的关闭 | function(done)，done 用于关闭 Dialog | — | — |
| center | 是否对头部和底部采用居中布局 | boolean | — | false |
| dialog-drag | 可拖动头部 | boolean | — | false |
| is-focus | 是否需要焦点控制 | boolean |
| target | 将dialog和遮罩层加在传入的dom元素上 | HTMLDivElement | | |
| is-modal | 设置dialog的模态与非模态 | boolean | — | true | 
| custom-class | 设置class样式(传值为'class1'或者['class1','class2']) | string/array | — | " " |
| custom-style | 设置style样式(优先级很高，请谨慎使用) | object | — | null |
### Slot

| name   | 说明                    |
| ------ | ----------------------- |
| —      | Dialog 的内容           |
| title  | Dialog 标题区的内容     |
| footer | Dialog 按钮操作区的内容 |

### Events

| 事件名称 | 说明              | 回调参数 |
| -------- | ----------------- | -------- |
| hide     | Dialog 关闭的回调 | —        |
| show     | Dialog 打开的回调 | —        |
| maximum  | 点击最大化按钮的回调 | —        |
