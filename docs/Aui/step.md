## Steps 步骤条
引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

### 基础用法

简单的步骤条。

:::demo 设置`active`属性，接受一个`Number`，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置`space`属性即可，它接受`Boolean`，单位为`px`，如果不设置，则为自适应。设置`finish-status`属性可以改变已经完成的步骤的状态。
```html
<aui-step :active="active" finish-status="success">
  <aui-step-item title="步骤 1"></aui-step-item>
  <aui-step-item title="步骤 2"></aui-step-item>
  <aui-step-item title="步骤 3"></aui-step-item>
</aui-step>

<aui-button style="margin-top: 12px;" @click="next">下一步</aui-button>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
```
:::

### 含状态步骤条

每一步骤显示出该步骤的状态。

:::demo
```html
<aui-step :space="200" :active="1" finish-status="success">
  <aui-step-item title="已完成"></aui-step-item>
  <aui-step-item title="进行中"></aui-step-item>
  <aui-step-item title="步骤 3"></aui-step-item>
</aui-step>
```
:::

### 有描述的步骤条

每个步骤有其对应的步骤状态描述。

:::demo
```html
<aui-step :active="1">
  <aui-step-item title="步骤 1" description="这是一段很长很长很长的描述性文字"></aui-step-item>
  <aui-step-item title="步骤 2" description="这是一段很长很长很长的描述性文字"></aui-step-item>
  <aui-step-item title="步骤 3" description="这段就没那么长了"></aui-step-item>
</aui-step>
```
:::

<!-- ### 居中的步骤条

标题和描述都将居中。

:::demo
```html
<aui-step :active="2" align-center>
  <aui-step-item title="步骤1" description="这是一段很长很长很长的描述性文字"></aui-step-item>
  <aui-step-item title="步骤2" description="这是一段很长很长很长的描述性文字"></aui-step-item>
  <aui-step-item title="步骤3" description="这是一段很长很长很长的描述性文字"></aui-step-item>
  <aui-step-item title="步骤4" description="这是一段很长很长很长的描述性文字"></aui-step-item>
</aui-step>
```
::: -->

<!-- ### 带图标的步骤条
步骤条内可以启用各种自定义的图标。

:::demo
```html
<aui-step :active="1">
  <aui-step-item title="步骤 1" icon="aui-icon-edit"></aui-step-item>
  <aui-step-item title="步骤 2" icon="aui-icon-upload"></aui-step-item>
  <aui-step-item title="步骤 3" icon="aui-icon-picture"></aui-step-item>
</aui-step>
```
::: -->

### 竖式步骤条

竖直方向的步骤条。

:::demo 只需要在`aui-step`元素中设置`direction`属性为`vertical`即可。
```html
<div style="height: 300px;">
  <aui-step direction="vertical" :active="1">
    <aui-step-item title="步骤 1"></aui-step-item>
    <aui-step-item title="步骤 2"></aui-step-item>
    <aui-step-item title="步骤 3" description="这是一段很长很长很长的描述性文字"></aui-step-item>
  </aui-step>
</div>
```
:::

### S曲线的步骤条

步骤数量过多时，可以让步骤条转弯。

:::demo 只需要在`aui-step`元素中设置`mode`属性为`curveLine`，默认从第6步之后转弯。如果要自定义每行的步骤数量，设置并在`aui-step`中绑定`stepNum`属性即可。
```html
<aui-step :active="active1" finish-status="success" mode="curveLine">
  <aui-step-item v-for="index in 15" :key="index" :title="`步骤${index+1}`"></aui-step-item>
</aui-step>

<aui-button style="margin-top: 12px;" @click="next1">下一步</aui-button>

<script>
  export default {
    data() {
      return {
        active1: 0
      };
    },

    methods: {
      next1() {
        if (this.active1++ > 15) this.active1 = 0;
      }
    }
  }
</script>
```
:::

<!-- ### 简洁风格的步骤条
设置 `simple` 可应用简洁风格，该条件下 `align-center` / `description` / `direction` / `space` 都将失效。

:::demo
```html

<aui-step :active="1" simple>
  <aui-step-item title="步骤 1" icon="aui-icon-edit"></aui-step-item>
  <aui-step-item title="步骤 2" icon="aui-icon-upload"></aui-step-item>
  <aui-step-item title="步骤 3" icon="aui-icon-picture"></aui-step-item>
</aui-step>

<aui-step :active="1" finish-status="success" simple style="margin-top: 20px">
  <aui-step-item title="步骤 1" ></aui-step-item>
  <aui-step-item title="步骤 2" ></aui-step-item>
  <aui-step-item title="步骤 3" ></aui-step-item>
</aui-step>
```
::: -->

### Step Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----------|----------|----------|----------|----------|
| direction | 显示方向 | string | vertical/horizontal | horizontal |
| active | 设置当前激活步骤  | number | — | 0 |
| current-status | 设置当前步骤的状态 | string | wait / process / finish / error / success | process |
| finish-status | 设置结束步骤的状态 | string | wait / process / finish / error / success | finish |
| mode |设置步骤的是否可曲线展示 | string | straightLine / curveLine | straightLine |
| stepNum |步骤条每几个开始转弯 | number | - | 6 |
| align-center | 设置步骤和标题是否居中 | boolean | true/false | — |

### StepItem Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----------|----------|----------|----------|----------|
| title | 标题 | string | — | — |
| description | 描述性文字 | string | — | — |
| status | 设置当前步骤的状态，不设置则根据 steps 确定状态 | wait / process / finish / error / success | — |

### Step Events
| 事件名称 | 说明 | 回调参数 |
|----------|----------|----------|
| change | 步骤条发生改变时触发 | newVal,oldVal(改变后的步骤的索引，改变前的步骤的索引) |

### StepItem Events
| 事件名称 | 说明 | 回调参数 |
|----------|----------|----------|
| dblclick | 双击步骤时触发 | itemData(当前双击的步骤的索引和标题) |