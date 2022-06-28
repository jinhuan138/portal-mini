## Container 布局容器
用于布局的容器组件，方便快速搭建页面的基本结构：

`<aui-container>`：外层容器。当子元素中包含 `<aui-header>` 或 `<aui-footer>` 时，全部子元素会垂直上下排列，否则会水平左右排列。

`<aui-header>`：顶栏容器。

`<aui-aside>`：侧边栏容器。

`<aui-main>`：主要区域容器。

`<aui-footer>`：底栏容器。

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，`<aui-container>` 的子元素只能是后四者，后四者的父元素也只能是 `<aui-container>`。

**为了更好地演示以下的 demo 效果，下列代码中不再重复定义样式，下列演示的样式均设置如下：**
:::demo
```
<style scope>
  .aui-header, .aui-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .aui-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .aui-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
```
:::

### 常见页面布局

:::demo
```html
<aui-container>
  <aui-header>Header</aui-header>
  <aui-main>Main</aui-main>
</aui-container>
```
:::

:::demo
```html
<aui-container>
  <aui-header>Header</aui-header>
  <aui-main>Main</aui-main>
  <aui-footer>Footer</aui-footer>
</aui-container>
```
:::

:::demo
```html
<aui-container>
  <aui-aside width="200px">Aside</aui-aside>
  <aui-main>Main</aui-main>
</aui-container>
```
:::

:::demo
```html
<aui-container>
  <aui-header>Header</aui-header>
  <aui-container>
    <aui-aside width="200px">Aside</aui-aside>
    <aui-main>Main</aui-main>
  </aui-container>
</aui-container>
```
:::

:::demo
```html
<aui-container>
  <aui-header>Header</aui-header>
  <aui-container>
    <aui-aside width="200px">Aside</aui-aside>
    <aui-container>
      <aui-main>Main</aui-main>
      <aui-footer>Footer</aui-footer>
    </aui-container>
  </aui-container>
</aui-container>
```
:::

:::demo
```html
<aui-container>
  <aui-aside width="200px">Aside</aui-aside>
  <aui-container>
    <aui-header>Header</aui-header>
    <aui-main>Main</aui-main>
  </aui-container>
</aui-container>
```
:::

:::demo
```html
<aui-container>
  <aui-aside width="200px">Aside</aui-aside>
  <aui-container>
    <aui-header>Header</aui-header>
    <aui-main>Main</aui-main>
    <aui-footer>Footer</aui-footer>
  </aui-container>
</aui-container>
```
:::
<style scope>
  .aui-header, .aui-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .aui-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .aui-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
### Container Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| direction | 子元素的排列方向 | string | horizontal / vertical | 子元素中有 `aui-header` 或 `aui-footer` 时为 vertical，否则为 horizontal |

### Header Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| height | 顶栏高度 | string | — | 60px |

### Aside Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| width | 侧边栏宽度 | string | — | 300px |

### Footer Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| height | 底栏高度 | string | — | 60px |