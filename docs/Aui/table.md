## Table 表格

用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。
### 可编辑表格
:::demo 
```html
<aui-table is-edit :head-data="HeadData5" :data="tableData5" :btn-group="btnGroup" :picture="picture" paging-type="complex"></aui-table>
<script>
  export default {
    data() {
      return {
        HeadData5: [
          {
            label: "商品名称",
            prop: "name",
            type: 'input',
          },
          {
            label: "生产日期",
            prop: "date",
            type: 'date'
          },
          {
            label: "类别",
            prop: "type",
            type: 'select',
            options: [
              {
                label: '甜品',
                value: '0'
              },
              {
                label: '水果',
                value: 1
              }
            ]
          },
          {
            label: "picture使用",
            prop: "picture",
            type: "input"
          }
        ],
        tableData5: [
          {
            name: "好滋好味鸡蛋仔",
            date: '2021-01-20',
            type: '甜品',
            picture: "10003"
          },
          {
            name: "鹿角巷奶茶",
            date: '2021-01-20',
            type: '甜品',
            picture: "10003"
          },
          {
            name: "富士苹果",
            date: '2021-01-20',
            type: '甜品',
            picture: "10003"
          },
        ],
        btnGroup:[
          {
            label: 'edit',
            value: '编辑'
          },
          {
            label: 'delete',
            value: '删除'
          }
        ],
        picture: {
          picture: "999,99"
        }
      };
    }
  }
</script>
```
:::


### 基础表格

:::demo
```html
<template>
  <aui-table :head-data="headData" :data="tableData"></aui-table>
</template>

<script>
  export default {
    data() {
      return {
        headData: [
          {
            label: "日期",
            prop: "date",
            type: "date",
          },
          {
            label: "姓名",
            prop: "name",
            type: "input",
          },
          {
            label: "地址",
            prop: "address",
            type: "input",
          },
        ],
        tableData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
      };
    },
  };
</script>
```

:::

### 隐藏列的表格

:::demo
```html
<template>
  <aui-table
    :head-data="headData"
    :data="tableData"
    :cols-hide="['name']"
  >
  </aui-table>
</template>

<script>
  export default {
    data() {
      return {
        headData: [
          {
            label: "日期",
            prop: "date",
            type: "date",
          },
          {
            label: "姓名",
            prop: "name",
            type: "input",
          },
          {
            label: "地址",
            prop: "address",
            type: "input",
          },
        ],
        tableData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
      };
    },
  };
</script>
```

:::

### 索引

status-column-type 属性的 index 索引类型

:::demo
```html
<template>
  <aui-table
    :head-data="headData"
    :data="tableData"
    status-column-type="index"
    :btn-group="operateBtnGroup"
    @click-button="clickButton"
  >
  </aui-table>
</template>

<script>
  export default {
    methods: {
      clickButton(scope, item) {
        alert(`点击了${item.value}`);
      },
    },
    data() {
      return {
        headData: [
          {
            label: "日期",
            prop: "date",
            type: "date",
          },
          {
            label: "姓名",
            prop: "name",
            type: "input",
          },
          {
            label: "地址",
            prop: "address",
            type: "input",
          },
        ],
        tableData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
        operateBtnGroup: [
          {
            label: "edit",
            value: "编辑",
          },
          {
            label: "delete",
            value: "删除",
          },
        ],
      };
    },
  };
</script>
```

:::

### 单选

status-column-type 属性的 radio 单选类型

:::demo
```html
<template>
  <aui-table
    :head-data="headData"
    :data="tableData"
    status-column-type="radio"
  >
  </aui-table>
</template>

<script>
  export default {
    data() {
      return {
        headData: [
          {
            label: "日期",
            prop: "date",
            type: "date",
          },
          {
            label: "姓名",
            prop: "name",
            type: "input",
          },
          {
            label: "地址",
            prop: "address",
            type: "input",
          },
        ],
        tableData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
      };
    },
  };
</script>
```

:::

### 多选

status-column-type 属性的 selection 多选类型

:::demo
```html
<template>
  <aui-table
    :head-data="headData"
    :data="tableData"
    status-column-type="selection"
  >
  </aui-table>
</template>

<script>
  export default {
    data() {
      return {
        headData: [
          {
            label: "日期",
            prop: "date",
            type: "date",
          },
          {
            label: "姓名",
            prop: "name",
            type: "input",
          },
          {
            label: "地址",
            prop: "address",
            type: "input",
          },
        ],
        tableData: [
          {
            date: "2016-05-02",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1518 弄",
          },
          {
            date: "2016-05-04",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1517 弄",
          },
          {
            date: "2016-05-01",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1519 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
          {
            date: "2016-05-03",
            name: "王小虎",
            address: "上海市普陀区金沙江路 1516 弄",
          },
        ],
      };
    },
  };
</script>
```

:::

### 展开行

status-column-type 属性的 expand 展开类型

:::demo
```html
<template>
  <aui-table
    :data="tableData6"
    :head-data="tableHeadData6"
    status-column-type="expand"
  >
    <template slot="expand" slot-scope="props">
      <aui-form label-position="left" inline class="demo-table-expand">
        <aui-form-item label="商品名称">
          <span>{{ props.row.name }}</span>
        </aui-form-item>
        <aui-form-item label="所属店铺">
          <span>{{ props.row.shop }}</span>
        </aui-form-item>
        <aui-form-item label="商品 ID">
          <span>{{ props.row.id }}</span>
        </aui-form-item>
        <aui-form-item label="店铺 ID">
          <span>{{ props.row.shopId }}</span>
        </aui-form-item>
        <aui-form-item label="商品分类">
          <span>{{ props.row.category }}</span>
        </aui-form-item>
        <aui-form-item label="店铺地址">
          <span>{{ props.row.address }}</span>
        </aui-form-item>
        <aui-form-item label="商品描述">
          <span>{{ props.row.desc }}</span>
        </aui-form-item>
      </aui-form>
    </template>
  </aui-table>
</template>

<script>
  export default {
    data() {
      return {
        tableHeadData6: [
          {
            label: "商品 ID",
            prop: "id",
          },
          {
            label: "商品名称",
            prop: "name",
          },
          {
            label: "商品描述",
            prop: "desc",
          },
        ],
        tableData6: [
          {
            id: "12987122",
            name: "好滋好味鸡蛋仔",
            category: "江浙小吃、小吃零食",
            desc: "荷兰优质淡奶，奶香浓而不腻",
            address: "上海市普陀区真北路",
            shop: "王小虎夫妻店",
            shopId: "10333",
          },
          {
            id: "12987123",
            name: "好滋好味鸡蛋仔",
            category: "江浙小吃、小吃零食",
            desc: "荷兰优质淡奶，奶香浓而不腻",
            address: "上海市普陀区真北路",
            shop: "王小虎夫妻店",
            shopId: "10333",
          },
          {
            id: "12987125",
            name: "好滋好味鸡蛋仔",
            category: "江浙小吃、小吃零食",
            desc: "荷兰优质淡奶，奶香浓而不腻",
            address: "上海市普陀区真北路",
            shop: "王小虎夫妻店",
            shopId: "10333",
          },
          {
            id: "12987126",
            name: "好滋好味鸡蛋仔",
            category: "江浙小吃、小吃零食",
            desc: "荷兰优质淡奶，奶香浓而不腻",
            address: "上海市普陀区真北路",
            shop: "王小虎夫妻店",
            shopId: "10333",
          },
        ],
      };
    },
  };
</script>

<style>
  .demo-table-expand {
    font-size: 0;
    width: 85%;
    margin: 0 auto;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .aui-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
```

:::

### 排序

对表格进行排序，可快速查找或对比数据。

:::demo
```html
<template>
  <div>
    <aui-table
      :head-data="lazyHeadData"
      :data="sortTableData"
      :default-sort="defaultSort"
      :sortable="true"
    >
    </aui-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        lazyHeadData: [
          {
            label: "学号",
            prop: "number",
          },
          {
            label: "姓名",
            prop: "name",
          },
          {
            label: "地址",
            prop: "address",
            sortable: false,
          },
        ],
        sortTableData: [],
        defaultSort: {
          prop: "number",
          order: "descending",
        },
      };
    },
    methods: {
      generateTableData(length) {
        let array = [];
        for (let i = 0; i < length; i++) {
          array.push({
            number: i,
            name: `王小虎-${i}`,
            address: "上海市普陀区金沙江路 1518 弄",
          });
        }
        return array;
      },
    },
    mounted() {
      this.sortTableData = this.generateTableData(5);
    },
  };
</script>
```

:::

### 表尾合计行

若表格展示的是各类数字，可以在表尾显示各列的合计。

:::demo
```html
<template>
  <div>
    <aui-table
      :head-data="summaryHeadData"
      :data="summaryTableData"
      :show-summary="true"
      sum-text="总价"
    >
    </aui-table>
    <aui-table
      :head-data="summaryHeadData"
      :data="summaryTableData"
      :show-summary="true"
      :summary-method="getSummaries"
      style="margin-top: 20px"
    >
    </aui-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        summaryHeadData: [
          {
            label: "ID",
            prop: "id",
            width: 180,
          },
          {
            label: "姓名",
            prop: "name",
          },
          {
            label: "数值 1（元）",
            prop: "amount1",
          },
          {
            label: "数值 2（元）",
            prop: "amount3",
          },
          {
            label: "数值 3（元）",
            prop: "amount3",
          },
        ],
        summaryTableData: [
          {
            id: "12987122",
            name: "王小虎",
            amount1: "234",
            amount2: "3.2",
            amount3: 10,
          },
          {
            id: "12987123",
            name: "王小虎",
            amount1: "165",
            amount2: "4.43",
            amount3: 12,
          },
          {
            id: "12987124",
            name: "王小虎",
            amount1: "324",
            amount2: "1.9",
            amount3: 9,
          },
          {
            id: "12987125",
            name: "王小虎",
            amount1: "621",
            amount2: "2.2",
            amount3: 17,
          },
          {
            id: "12987126",
            name: "王小虎",
            amount1: "539",
            amount2: "4.1",
            amount3: 15,
          },
        ],
      };
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = "总价";
            return;
          }
          const values = data.map((item) => Number(item[column.property]));
          if (!values.every((value) => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += " 元";
          } else {
            sums[index] = "N/A";
          }
        });

        return sums;
      },
    },
  };
</script>
```

:::

### Attributes

| 属性                        | 说明                                                  | 类型                      | 可选值                                       | 默认值                      |
| --------------------------- | ----------------------------------------------------- | ------------------------- | -------------------------------------------- | --------------------------- |
| **`head-data`**             | 表头数据                                              | [`HeadData[]`](#HeadData) | -                                            | []                          |
| **`data`**                  | 表格数据                                              | [`Data[]`](#Data)         | -                                            | []                          |
| **`btn-group`**             | 操作按钮                                              | [`Btn[]`](#Btn-Group)     | -                                            | []                          |
| **`picture`**               | 输入控制                                              | [`Picture[]`](#Picture)   | -                                            | -                           |
| **`column-formatter`**      | 用来格式化内容                                        | `function`                | -                                            | -                           |
| **`is-edit`**               | 是否可编辑                                            | `boolean`                 | `true` \| `false`                            | `true`                      |
| **`is-add`**                | 是否可增加空白行                                      | `boolean`                 | `true` \| `false`                            | `false`                     |
| **`disabled`**              | 是否禁用                                              | `boolean`                 | `true` \| `false`                            | `false`                     |
| **`default-addlength`**     | 表格数据为空时默认增加可编辑数据条数,is-add=true 生效 | `number`                  | -                                            | 5                           |
| **`cols-hide`**             | 隐藏的列数据                                          | `string[]`                | -                                            | []                          |
| **`combination-key`**       | 表格绑定的快捷键列表                                  | `string[]`                | -                                            | -                           |
| **`highlight-current-row`** | 是否要高亮当前行                                      | `boolean`                 | `true` \| `false`                            | `true`                      |
| **`auto-add-row`**          | 空白表格是否自动添加空白行                            | `boolean`                 | `true` \| `false`                            | `true`                      |
| **`empty-text`**            | 空数据时显示的文本内容                                | `string`                  | -                                            | 暂无数据                    |
| **`show-summary`**          | 是否在表尾显示合计行                                  | `boolean`                 | `true` \| `false`                            | `false`                     |
| **`summary-method`**        | 自定义的合计计算方法                                  | `function`                | -                                            | -                           |
| **`text-align`**            | 对齐方式                                              | `string`                  | `left` \| `center` \| `right`                | left                        |
| **`pagingType`**            | 分页组件类型                                          | `string`                  | `simple`\| `complex`                         | `complex`                           |
| **`page-size`**             | 分页组件每页显示条目个数                              | `number`                  | -                                            | 10                          |
| **`current-page-index`**    | 分页组件当前页数                                      | `number`                  | -                                            | 1                           |
| **`pagination-layout`**     | 分页组件组件布局，子组件名用逗号分隔                  | `string`                  | -                                            | -                           |
| **`pagination-page-sizes`** | 分页组件每页显示个数选择器的选项设置                  | `number[]`                | -                                            | `[10, 20, 30, 40, 50, 100]` |
| **`pagination-prev-text`**  | 分页组件替代图标显示的上一页文字                      | `string`                  | -                                            | -                           |
| **`pagination-next-text`**  | 分页组件替代图标显示的下一页文字                      | `string`                  | -                                            | -                           |
| **`total-num`**             | 分页组件总数                                          | `number`                  | -                                            | -                           |
| **`status-column-type`**    | 表格序列的类型                                        | `string`                  | `selection` \| `radio` \| `index` \|`expand` | -                           |
| **`pagination-show`**       | 内置分页器是否显示                                    | `boolean`                 | `true` \| `false`                            | `false`                     |
| **`tile-operate-button`**       | 操作列按钮是否平铺                                    | `boolean`                 | `true` \| `false`                            | `false`                     |
| **`doubleClick`**       |   双击切换编辑状态                       | `boolean`                 | `true` \| `false`                            | `false`                     |

### Events

| 事件名                     | 描述                                                                                                                                                 | 参数                               |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- |
| **`select-all`**           | 当用户手动勾选全选 `Checkbox `时触发的事件                                                                                                           | `selection`                        |
| **`selection-change`**     | 当选择项发生变化时会触发该事件                                                                                                                       | `selection`                        |
| **`cell-mouse-enter`**     | 当单元格 `hover `进入时会触发该事件                                                                                                                  | `row, column, cell, event`         |
| **`cell-mouse-leave`**     | 当单元格 `hover `退出时会触发该事件                                                                                                                  | `row, column, cell, event`         |
| **`cell-click`**           | 当某个单元格被点击时会触发该事件                                                                                                                     | `row, column, cell, event`         |
| **`cell-dblclick`**        | 当某个单元格被双击击时会触发该事件                                                                                                                   | `row, column, cell, event`         |
| **`row-click`**            | 当某一行被点击时会触发该事件                                                                                                                         | `row, event, column,index`         |
| **`row-contextmenu`**      | 当某一行被鼠标右键点击时会触发该事件                                                                                                                 | `row, event`                       |
| **`row-dblclick`**         | 当某一行被双击时会触发该事件                                                                                                                         | `row, event`                       |
| **`header-click`**         | 当某一列的表头被点击时会触发该事件                                                                                                                   | `column, event`                    |
| **`header-contextmenu`**   | 当某一列的表头被鼠标右键点击时触发该事件                                                                                                             | `column, event`                    |
| **`sort-change`**          | 当表格的排序条件发生变化的时候会触发该事件                                                                                                           | `{ column, prop, order }`          |
| **`filter-change`**        | 当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 `key `是 `column `的 `columnKey`，对应的 `value `为用户选择的筛选条件的数组。 | `filters`                          |
| **`current-radio-change`** | 仅对 `type=radio` 的列有效,当用户手动勾选单选模式的 `Checkbox `时触发的事件                                                                          | `currentRow, oldCurrentRow`        |
| **`size-change`**          | 分页组件中每页显示行数发生变化时触发该事件                                                                                                           | 每页条数`size`                     |
| **`current-page-change`**  | `currentPage `改变时会触发                                                                                                                           | 当前页`currentPage`                |
| **`click-button`**          | 表格行内按钮触发事件                                                                                                                                 | `scope,item`                       |
| **`cellBlur`**             | 光标离开表格栏位触发此事件                                                                                                                           | `scope,index`                      |
| **`cellChange`**           | 表格栏位值发生变化时触发的事件                                                                                                                       | `scope,index`                      |
| **`combination`**          | 在表格内按表格自定义快捷键触发此事件                                                                                                                 | `currentRow,rowindex, columnindex` |
| **`previous-page`**        | 简单分页工具的上一步的事件回调                                                                                                                       |                                    |
| **`next-page`**            | 简单分页工具下一步的事件回调                                                                                                                         |                                    |

### Methods

| 方法名                   | 描述                                                                                                            | 参数 |
| ------------------------ | --------------------------------------------------------------------------------------------------------------- | ---- |
| **`clearSelection`**     | 用于多选表格，清空用户的选择，当使用 `reserve-selection` 功能的时候，可能会需要使用此方法                       | -    |
| **`toggleRowSelection`** | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（`selected `为 `true` 则选中） | -    |
| **`setCurrentRadioRow`** | 用于 type=radio 的单选表格，设定某一行为选中行，如果调用时不加参数，则会取消当前选中行。                        | -    |
| **`clearSort`**          | 用于清空排序条件，数据会恢复成未排序的状态                                                                      | -    |
| **`clearFilter`**        | 用于清空过滤条件，数据会恢复成未过滤的状态                                                                      | -    |
| **`getActualData`**  | 获取当前表格展示的数据 | - |

### HeadData

| 属性                      | 说明                                                                                                                                                                                    | 类型 | 可选值 | 默认值 |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| ------ | ------ | ----- |
| **`type`**                | 对应列的类型。                                                                                                                                                                          | string |  selection\|index\|expand\|  date\|input\|select\|cascader     |    -    |
| **`options`**             | type=select,cascader生效                                                                                                                                                                | string | -  | - |
| **`isEdit`**              | 列是否可编辑                                                                                                                                                                            | boolean | `true` \| `false` | false |
| **`readonly`**            | 列是否可读,type=input生效                                                                                                                                                               | boolean | `true` \| `false`| false |
| **`isHide`**              | 列是否隐藏                                                                                                                                                                              | boolean | `true` \| `false` | false |
| **`label`**               | 显示的标题                                                                                                                                                                              | string | - | - |
| **`prop`**                | 对应列内容的字段名                                                                                                                                                                       | string | - | - |
| **`width`**               | 对应列的宽度                                                                                                                                                                            | string | - | - |
| **`minWidth`**            | 对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列                                                                                  | string | - | - |
| **`fixed`**               | 列是否固定在左侧或者右侧，true 表示固定在左侧                                                                                                                                  | `string` \| `boolean` | `left` \| `right` \|  `true` | - |
| **`sortable`**            | 对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件                                                                               | `boolean` \| `string` | `true` \| `false` \| `'custom'` | - |
| **`sortMethod`**          | 对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致                                                                                   | function(a,b) | - | - |
| **`sortBy`**              | 指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推。  | `string` \| `array` \| `function(row,index)` | - | - |
| **`formatter`**           | 用来格式化内容                                                                                                                                                                           | function(row,column,cellValue) | - | - |
| **`showOverflowTooltip`** | 当内容过长被隐藏时显示 tooltip                                                                                                                                                            | boolean | `true` \| `false` | false |
| **`align`**               | 对齐方式                                                                                                                                                                                | string | `left` \| `right` \| `center` | left |
| **`selectable`**          | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选                                                                                      | function(row,index) | - | - |
| **`isCopy`**               | 控制列是否显示复制功能 | boolean | `true` \| `false`| true | 
| **`focusAutoIn`**               | 焦点管控页面表格获取焦点时是否直接进入表格内 | boolean | `true` \| `false`| false | 
| **`propsData`**  |  可编辑输入框props对象(input、select)


### Data

> **对象结构,`key`为`HeadData`的`prop`的值,`value`为数据**

### Btn-Group
| 属性  | 类型   | 说明           |
| ----- | ------ | -------------- |
| label | String | 按钮的标识符   |
| value | String | 按钮显示的文本 |
### Picture
> **对象结构,`key`为`HeadData`的`prop`的值,`value`为`picture`规则**
