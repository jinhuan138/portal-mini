## Popover 弹出框

### 基础用法
Popover 的属性与 Tooltip 很类似，它们都是基于`Vue-popper`开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。

:::demo 设置索引`ref`，在按钮中，我们注册了自定义指令`v-popover`，指向索引ID。`trigger`属性用于设置何时触发 Popover ，提供三种触发方式：`hover`, `click` 和 `focus`。第二种用法通过 `slot` 指定 reference。
```html
<aui-popover
  ref="popover1"
  placement="top-start"
  title="标题"
  trigger="hover"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
</aui-popover>

<aui-popover
  ref="popover2"
  placement="bottom"
  title="标题"
  trigger="click"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
</aui-popover>

<aui-button v-popover:popover1>hover 激活</aui-button>
<aui-button v-popover:popover2>click 激活</aui-button>
<aui-popover
  placement="right"
  title="标题"
  trigger="focus"
  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
  <aui-button slot="reference">focus 激活</aui-button>
</aui-popover>
```
:::

### 嵌套信息

可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。

:::demo 利用分发取代`content`属性
```html
<aui-popover
  ref="popover4"
  placement="right"
  trigger="click">
  <aui-table :head-data="headData" :data="gridData"></aui-table>
</aui-popover>

<aui-button v-popover:popover4>click 激活</aui-button>

<script>
  export default {
    data() {
      return {
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
         headData:[{
            label: "a",
            prop:"date"
          },{
            label: "b",
            prop:"name"
          },{
            label: "c",
            prop:"address"
          }],
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
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
        gridData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          $info: true
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          $positive: true
        }],
        gridData3: [{
          tag: '家',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '公司',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '公司',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '家',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '公司',
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '家',
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '公司',
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      };
    }
  };
</script>
```
:::

### 嵌套操作

当然，你还可以嵌套操作，这相比 Dialog 更为轻量：

:::demo
```html
<aui-popover
  ref="popover5"
  placement="top"
  v-model="visible2">
  <p>这是一段内容这是一段内容确定删除吗？</p>
  <div style="text-align: right; margin: 0">
    <aui-button size="mini" type="text" @click="visible2 = false">取消</aui-button>
    <aui-button type="primary" size="mini" @click="visible2 = false">确定</aui-button>
  </div>
</aui-popover>

<aui-button v-popover:popover5>删除</aui-button>

<script>
  export default {
    data() {
      return {
        visible2: false,
      };
    }
  }
</script>
```
:::

### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|--------|--------|--------|--------|--------|
| trigger | 触发方式 | String | click / focus / hover / manual | click |
| title | 标题 | String | — | — |
| content | 显示的内容，也可以通过 slot 传入 DOM | String | — | — |
| placement | 出现位置 | String | top / top-start / top-end / bottom / bottom-start / bottom-end / left / left-start / left-end / right / right-start / right-end | bottom |
| disabled | Popover 是否可用 | Boolean | — | false |
| popper-options | [popper.js](https://popper.js.org/documentation.html) 的参数 | Object | 参考 [popper.js](https://popper.js.org/documentation.html) 文档 | `{ boundariesElement: 'body', gpuAcceleration: false }` |

### Slot
| 参数 | 说明 |
|--- | ---|
| default | 弹窗内容 |
| reference | 触发元素 |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| show | 显示时触发 | — |
| hide | 隐藏时触发 | — |
