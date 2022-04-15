## Loading 加载

加载数据时显示动效。

### 区域加载

在表格等容器中加载数据时显示。

:::demo Aui 提供了两种调用 Loading 的方法：指令和服务。对于自定义指令`v-loading`，只需要绑定`Boolean`即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加`body`修饰符，可以使遮罩插入至 DOM 中的 body 上。
```html
<template>
  <aui-table v-loading="loading" :head-data="headData" :data="tableData" style="width: 100%"></aui-table>
</template>

<style>
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
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
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ],
        loading: true
      };
    }
  };
</script>
```

:::

### 自定义

可自定义加载文案、图标和背景色。

:::demo 在绑定了`v-loading`指令的元素上添加`agree-loading-text`属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，`agree-loading-spinner`和`agree-loading-background`属性分别用来设定图标类名和背景色值。
```html
<template>
  <aui-table
    v-loading="loading2"
    agree-loading-text="拼命加载中"
    agree-loading-spinner="aui-icon-loading"
    agree-loading-background="rgba(0, 0, 0, 0.8)"
    :data="tableData" :head-data="headData"
    style="width: 100%"
  >
  </aui-table>
</template>

<script>
  export default {
    data() {
      return {
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
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ],
        loading2: true
      };
    }
  };
</script>
```

:::

### 自定义插槽组件

使用自定义插槽替换原本 loading 时遮罩层图标 spinner 以及 text 文本。

:::demo 当自定义插槽时，传入的插槽内容将替换 spinner 以及 text，通过`component`配置传入 vue 文件，例：this.\$aui.loading.show({component: abc})方式引入。
```html
<template>
  <div id="testDiv">
    <aui-table :head-data="headData" :data="tableData" style="width: 100%">
    </aui-table>
  </div>
</template>

<script>

export default {
    data(){
      return{
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
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }
        ], 
      }
    },
    mounted() {
      const com =document.createElement('div')
      com.innerHTML='测试内容：loading插槽！'
        this.$aui.loading.show({
            component: com,
            target: document.getElementById('testDiv')
        });
    }
}
</script>
```

:::

### 整页加载

页面数据加载时显示。

:::demo 当使用指令方式时，全屏遮罩需要添加`fullscreen`修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用`lock`修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。
```html
<template>
  <aui-button
    type="primary"
    @click="openFullScreen"
    v-loading.fullscreen.lock="fullscreenLoading"
  >
    指令方式
  </aui-button>
  <aui-button type="primary" @click="openFullScreen2">
    服务方式
  </aui-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      };
    },
    methods: {
      openFullScreen() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$aui.loading.show({
          lock: true,
          text: 'Loading',
          spinner: 'aui-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          this.$aui.loading.hide();
        }, 2000);
      }
    }
  };
</script>
```

:::

### 服务

Loading 还可以以服务的方式调用。引入 Loading 服务：

Vue.prototype 上有一个全局方法 `$loading`，它的调用方式为：`this.$aui.loading.show(options)`，会返回一个 Loading 实例。

### Options

| 参数       | 说明                                                                                                                                       | 类型                  | 可选值 | 默认值        |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ------ | ------------- |
| target     | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 `document.querySelector`以获取到对应 DOM 节点 | object/string         | —      | document.body |
| body       | 同 `v-loading` 指令中的 `body` 修饰符                                                                                                      | boolean               | —      | false         |
| fullscreen | 同 `v-loading` 指令中的 `fullscreen` 修饰符                                                                                                | boolean               | —      | true          |
| text       | 显示在加载图标下方的加载文案                                                                                                               | string                | —      | —             |
| spinner    | 自定义加载图标类名                                                                                                                         | string                | —      | —             |
| background | 遮罩背景色                                                                                                                                 | string                | —      | —             |
| component  | Loading 自定义插槽                                                                                                                         | vue 文件/组件代码片段 | —      | —             |
