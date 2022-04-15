## Tabs 标签页
<script>
  export default {
    data() {
      return {
        activeName: 'second',
        activeName2: 'first',
        activeName1: 'first',
        editableTabsValue: '2',
        editableTabsValue2: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,
        tabPosition: 'top'
      }
    },
    methods: {
      clickTop(){
        this.tabPosition = 'top'
      },
      clickRight(){
        this.tabPosition = 'right'
      },
      clickBottom(){
        this.tabPosition = 'bottom'
      },
      clickLeft(){
        this.tabPosition = 'left'
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>

## Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合。

### 基础用法

基础的、简洁的标签页。

:::demo Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 `value` 属性来指定当前选中的标签页。
```html
<template>
  <aui-tabs v-model="activeName" @tab-click="handleClick">
    <aui-tab-item label="用户管理" name="first">用户管理</aui-tab-item>
    <aui-tab-item label="配置管理" name="second">配置管理</aui-tab-item>
    <aui-tab-item label="角色管理" name="third">角色管理</aui-tab-item>
    <aui-tab-item label="定时任务补偿" name="fourth">定时任务补偿</aui-tab-item>
  </aui-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### 不同状态文本颜色

:::demo
```html
<template>
  <aui-tabs v-model="activeName1" @tab-click="handleClick" default-text-color="yellow" active-text-color="green" disabled-text-color="red">
    <aui-tab-item label="用户管理" name="first">用户管理</aui-tab-item>
    <aui-tab-item label="配置管理" name="second" disabled>配置管理</aui-tab-item>
    <aui-tab-item label="角色管理" name="third">角色管理</aui-tab-item>
    <aui-tab-item label="定时任务补偿" name="fourth">定时任务补偿</aui-tab-item>
  </aui-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName1: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### 选项卡样式

选项卡样式的标签页。

:::demo 只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。
```html
<template>
  <aui-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <aui-tab-item label="用户管理" name="first">用户管理</aui-tab-item>
    <aui-tab-item label="配置管理" name="second">配置管理</aui-tab-item>
    <aui-tab-item label="角色管理" name="third">角色管理</aui-tab-item>
    <aui-tab-item label="定时任务补偿" name="fourth">定时任务补偿</aui-tab-item>
  </aui-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName2: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### 卡片化

卡片化的标签页。

:::demo 将`type`设置为`border-card`。
```html
<aui-tabs type="border-card">
  <aui-tab-item label="用户管理">用户管理</aui-tab-item>
  <aui-tab-item label="配置管理">配置管理</aui-tab-item>
  <aui-tab-item label="角色管理">角色管理</aui-tab-item>
  <aui-tab-item label="定时任务补偿">定时任务补偿</aui-tab-item>
</aui-tabs>
```
:::

### 位置

可以通过 `position` 设置标签的位置

:::demo 标签一共有四个方向的设置 `tabPosition="left|right|top|bottom"`
```html
<template>
  
  <aui-button @click="clickTop">top</aui-button>
  <aui-button @click="clickRight">right</aui-button>
  <aui-button @click="clickBottom">bottom</aui-button>
  <aui-button @click="clickLeft">left</aui-button>

  <aui-tabs :position="tabPosition" style="height: 200px;">
    <aui-tab-item label="用户管理">用户管理</aui-tab-item>
    <aui-tab-item label="配置管理">配置管理</aui-tab-item>
    <aui-tab-item label="角色管理">角色管理</aui-tab-item>
    <aui-tab-item label="定时任务补偿">定时任务补偿</aui-tab-item>
  </aui-tabs>
</template>
<script>
  export default {
    data() {
      return {
        tabPosition: 'top'
      };
    },
    methods: {
      clickTop(){
        this.tabPosition = 'top'
      },
      clickRight(){
        this.tabPosition = 'right'
      },
      clickBottom(){
        this.tabPosition = 'bottom'
      },
      clickLeft(){
        this.tabPosition = 'left'
      }
    }
  };
</script>
```
:::

### 自定义标签页

可以通过具名 `slot` 来实现自定义标签页的内容

:::demo
```html
<aui-tabs type="border-card">
  <aui-tab-item>
    <span slot="label"><i class="aui-icon-date"></i> 我的行程</span>
    我的行程
  </aui-tab-item>
  <aui-tab-item label="消息中心">消息中心</aui-tab-item>
  <aui-tab-item label="角色管理">角色管理</aui-tab-item>
  <aui-tab-item label="定时任务补偿">定时任务补偿</aui-tab-item>
</aui-tabs>
```
:::

<!-- ### 动态增减标签页

增减标签页按钮只能在选项卡样式的标签页下使用

:::demo
```html
<aui-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
  <aui-tab-item
    :key="item.name"
    v-for="(item, index) in editableTabs"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </aui-tab-item>
</aui-tabs>
<script>
  export default {
    data() {
      return {
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    }
  }
</script>
```
::: -->

### 自定义增加标签页触发器

:::demo
```html
<div style="margin-bottom: 20px;">
  <aui-button
    size="small"
    @click="addTab(editableTabsValue2)"
  >
    add tab
  </aui-button>
</div>
<aui-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
  <aui-tab-item
    v-for="(item, index) in editableTabs2"
    :key="item.name"
    :label="item.title"
    :name="item.name"
  >
    {{item.content}}
  </aui-tab-item>
</aui-tabs>
<script>
  export default {
    data() {
      return {
        editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      addTab(targetName) {
        let newTabName = ++this.tabIndex + '';
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        });
        this.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        let tabs = this.editableTabs2;
        let activeName = this.editableTabsValue2;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }
        
        this.editableTabsValue2 = activeName;
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
      }
    }
  }
</script>
```
:::

### Tabs Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----------|----------|----------|----------|----------|
| type | 风格类型 | string | card / border-card | — |
| closable | 标签是否可关闭 | boolean | — | false |
| addable | 标签是否可增加 | boolean | — | false |
| v-model | 绑定值，选中选项卡的 name | string | — | 第一个选项卡的 name |
| position | 选项卡所在位置 | string  | top / right / bottom / left | top |
| default-text-color | 默认文字颜色 | string | — | — |
| active-text-color | 选中时文字颜色 | string | — | — |
| disabled-text-color | 不可点击时文字的颜色 | string | — | — |
| bar-color | 底部 bar 的颜色 | string | — | #409eff |

### Tabs Events
| 事件名称 | 说明 | 回调参数 |
|----------|--------|----------|
| tab-click | tab 被选中时触发 | 被选中的标签 tab 实例 |
| tab-remove | 点击 tab 移除按钮后触发 | 被删除的标签的 name |
| tab-add | 点击 tabs 的新增按钮后触发 | — |

### Tab-item Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----------|--------|----------|----------|----------|
| label | 选项卡标题  | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| name | 与选项卡 activeName 对应的标识符，表示选项卡别名 | string | — | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |
| closable | 标签是否可关闭 | boolean | — | false |

### Tab-item Slot
| name | description |
|-------|-------|
| default | 内容插槽 |
| label | 标题插槽 |

