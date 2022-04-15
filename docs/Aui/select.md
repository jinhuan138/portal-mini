## Select 选择器
<script>
  export default {
    data() {
      return {
        value12:'',
        list: null,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        options3: [{
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        }, {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }],
        options4: [],
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        value: '',
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: [],
        value6: '',
        value7: '',
        value8: '',
        value9: '',
        value10: [],
        value11: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      };
    },

    mounted() {
      this.list = this.states.map(item => { return { value: item, label: item }; });
    },

    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options4 = [];
        }
      },
      optionsHandler(){
        return [{
            "label": "0-与主卡共享额度",
            "value": "0"
          },
          {
            "label": "1-额度百分比",
            "value": "1"
          },
          {
            "label": "2-额度设定",
            "value": "2"
          }
        ]
      },
    }
  };
</script>

## Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

### 基础用法

适用广泛的基础单选
:::demo `v-model`的值为当前被选中的`aui-option`的 value 属性值
```html
<template>
  <aui-select
    :options="options" 
    v-model="value" 
    placeholder="请选择">
  </aui-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

### 必输用法

设置选择框为必输栏位
:::demo 为`aui-select`设置`requisite`属性，则选择器为必须输入的
```html
<template>
  <aui-select
    :options="options"
    v-model="value1"
    :requisite="true"
    placeholder="请选择">
  </aui-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value1: '',
      }
    }
  }
</script>
```
:::

### 弹出信息

设置选择框弹出提示标题、设置选择框弹出内容
:::demo 为`aui-select`设置`popover-title`属性，选择值之后鼠标移动到选择框，选择框弹出提示标题、内容
```html
<template>
  <aui-select
    :options="options"
    v-model="value3"
    popover-title="弹出信息"
    placeholder="请选择">
  </aui-select>
  <br/>
  <aui-select
    :options="options"
    v-model="value4"
    popover-content="弹出内容"
    placeholder="请选择">
  </aui-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        value3:'',
        value4:''
      }
    }
  }
</script>
```
:::

### 禁用状态

选择器不可用状态

:::demo 为`aui-select`设置`disabled`属性，则整个选择器不可用
```html
<template>
  <aui-select 
    :options="options" 
    v-model="value3" 
    disabled 
    placeholder="请选择">
  </aui-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value3: ''
      }
    }
  }
</script>
```
:::

### 可清空单选

包含清空按钮，可将选择器清空为初始状态

:::demo 为`aui-select`设置`clearable`属性，则可将选择器清空。需要注意的是，`clearable`属性仅适用于单选。
```html
<template>
  <aui-select 
    :options="options" 
    v-model="value4" 
    clearable 
    placeholder="请选择">
  </aui-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value4: ''
      }
    }
  }
</script>
```
:::

### 基础多选

适用性较广的基础多选，用 Tag 展示已选项

:::demo 为`aui-select`设置`multiple`属性即可启用多选，此时`v-model`的值为当前选中值所组成的数组。默认情况下选中值会以 Tag 的形式展现，你也可以设置`collapse-tags`属性将它们合并为一段文字。
```html
<template>
  <aui-select 
    :options="options" 
    v-model="value5" 
    multiple 
    placeholder="请选择">
  </aui-select>
  <br/>
  <aui-select
    v-model="value11"
    multiple
    collapse-tags
    placeholder="请选择" 
    :options="options">
  </aui-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value5: [],
        value11: []
      }
    }
  }
</script>
```
:::

**如果 Select 的绑定值为对象类型，请务必指定 `value-key` 作为它的唯一性标识。**

### Select Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| symbol | 必输标记 | String | —— | * |
| popover-content | 弹出提示内容 | string | — | — |
| popover-title | 弹出提示标题 | string | — | — |
| popper-class | 为弹出提示增加类名 | string | —— | —— |
| requisite | 是否必输 | Boolean | true/false | false |
| label | 输入框说明 | string | — | — |
| visible | 是否显示 | Boolean | true/false | true |
| options | 可选项数据源，键名可通过 `props` 属性配置 | array | — | — |
| disabled | 是否禁用 | boolean | — | false |
| readonly | 是否只读 | boolean | true/false | false |
| placeholder | 占位符 | string | — | 请选择 |
| position | label位置 | String | left/top | left |
| back-trigger | 是否向上触发blur事件 | Boolean | true/false | false |
| multiple | 是否多选 | boolean | — | false |
| collapse-tags | 多选时是否将选中值按文字的形式展示 | Boolean | —— | false |
| multiple-limit | 多选时用户最多可以选择的项目数，为 0 则不限制 | number | — | 0 |
| validatorTest | 校验方法 | function | — | — |
| promptInformation | 提示错误信息 | — | — | — |
| max-lines | 下拉框的显示条数 | number | — | 5 |
### Select Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |
| remove-tag | 多选模式下移除tag时触发 | 移除的tag值 |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| setDisabled | 设置是否可用 | — |
| setVisible | 设置是否可见 | — |
| setRequisite | 设置是否必输 | — |
| setReadonly | 设置是否只读 | — |
