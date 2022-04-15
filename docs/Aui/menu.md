## Menu 导航菜单

为网站提供导航功能的菜单。

### 顶栏

适用广泛的基础用法。

:::demo 导航菜单默认为垂直模式，通过`mode`属性可以使导航菜单变更为水平模式。另外，在菜单中通过`submenu`组件可以生成二级菜单。Menu 还提供了`background-color`、`text-color`和`active-text-color`，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。
```html
<aui-menu :default-active="activeIndex" class="aui-menu-demo" mode="horizontal" @select="handleSelect">
  <aui-menu-item index="1">处理中心</aui-menu-item>
  <aui-submenu index="2">
    <template slot="title">我的工作台</template>
    <aui-menu-item index="2-1">选项1</aui-menu-item>
    <aui-menu-item index="2-2">选项2</aui-menu-item>
    <aui-menu-item index="2-3">选项3</aui-menu-item>
    <aui-submenu index="2-4">
      <template slot="title">选项4</template>
      <aui-menu-item index="2-4-1">选项1</aui-menu-item>
      <aui-menu-item index="2-4-2">选项2</aui-menu-item>
      <aui-menu-item index="2-4-3">选项3</aui-menu-item>
    </aui-submenu>
  </aui-submenu>
  <aui-menu-item index="3" disabled>消息中心</aui-menu-item>
  <aui-menu-item index="4"><a href="https://www.agree.com.cn/" target="_blank">订单管理</a></aui-menu-item>
</aui-menu>
<div class="line"></div>
<aui-menu
  :default-active="activeIndex2"
  class="aui-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <aui-menu-item index="1">处理中心</aui-menu-item>
  <aui-submenu index="2">
    <template slot="title">我的工作台</template>
    <aui-menu-item index="2-1">选项1</aui-menu-item>
    <aui-menu-item index="2-2">选项2</aui-menu-item>
    <aui-menu-item index="2-3">选项3</aui-menu-item>
    <aui-submenu index="2-4">
      <template slot="title">选项4</template>
      <aui-menu-item index="2-4-1">选项1</aui-menu-item>
      <aui-menu-item index="2-4-2">选项2</aui-menu-item>
      <aui-menu-item index="2-4-3">选项3</aui-menu-item>
    </aui-submenu>
  </aui-submenu>
  <aui-menu-item index="3" disabled>消息中心</aui-menu-item>
  <aui-menu-item index="4"><a href="https://www.agree.com.cn/" target="_blank">订单管理</a></aui-menu-item>
</aui-menu>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::

### 侧栏

垂直菜单，可内嵌子菜单。

:::demo 通过`aui-menu-item-group`组件可以实现菜单进行分组，分组名可以通过`title`属性直接设定，也可以通过具名 slot 来设定。
```html
<aui-row class="tac">
  <aui-col :span="12">
    <h5>默认颜色</h5>
    <aui-menu
      default-active="2"
      class="aui-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <aui-submenu index="1">
        <template slot="title">
          <i class="aui-icon-location"></i>
          <span>导航一</span>
        </template>
        <aui-menu-item-group>
          <template slot="title">分组一</template>
          <aui-menu-item index="1-1">选项1</aui-menu-item>
          <aui-menu-item index="1-2">选项2</aui-menu-item>
        </aui-menu-item-group>
        <aui-menu-item-group title="分组2">
          <aui-menu-item index="1-3">选项3</aui-menu-item>
        </aui-menu-item-group>
        <aui-submenu index="1-4">
          <template slot="title">选项4</template>
          <aui-menu-item index="1-4-1">选项1</aui-menu-item>
        </aui-submenu>
      </aui-submenu>
      <aui-menu-item index="2">
        <i class="aui-icon-menu"></i>
        <span slot="title">导航二</span>
      </aui-menu-item>
      <aui-menu-item index="3" disabled>
        <i class="aui-icon-document"></i>
        <span slot="title">导航三</span>
      </aui-menu-item>
      <aui-menu-item index="4">
        <i class="aui-icon-setting"></i>
        <span slot="title">导航四</span>
      </aui-menu-item>
    </aui-menu>
  </aui-col>
  <aui-col :span="12">
    <h5>自定义颜色</h5>
    <aui-menu
      default-active="2"
      class="aui-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <aui-submenu index="1">
        <template slot="title">
          <i class="aui-icon-location"></i>
          <span>导航一</span>
        </template>
        <aui-menu-item-group>
          <template slot="title">分组一</template>
          <aui-menu-item index="1-1">选项1</aui-menu-item>
          <aui-menu-item index="1-2">选项2</aui-menu-item>
        </aui-menu-item-group>
        <aui-menu-item-group title="分组2">
          <aui-menu-item index="1-3">选项3</aui-menu-item>
        </aui-menu-item-group>
        <aui-submenu index="1-4">
          <template slot="title">选项4</template>
          <aui-menu-item index="1-4-1">选项1</aui-menu-item>
        </aui-submenu>
      </aui-submenu>
      <aui-menu-item index="2">
        <i class="aui-icon-menu"></i>
        <span slot="title">导航二</span>
      </aui-menu-item>
      <aui-menu-item index="3" disabled>
        <i class="aui-icon-document"></i>
        <span slot="title">导航三</span>
      </aui-menu-item>
      <aui-menu-item index="4">
        <i class="aui-icon-setting"></i>
        <span slot="title">导航四</span>
      </aui-menu-item>
    </aui-menu>
  </aui-col>
</aui-row>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
```
:::

### Menu Attribute
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----------|--------|----------|-------------|--------|
| mode | 模式 | string |   horizontal / vertical   | vertical |
| collapse | 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）| boolean |   —   | false |
| background-color | 菜单的背景色（仅支持 hex 格式）| string |   —   | - |
| text-color | 菜单的文字颜色（仅支持 hex 格式）| string |   —   | - |
| active-text-color | 当前激活菜单的文字颜色（仅支持 hex 格式）| string |   —   | - |
| active-background-color | 当前激活菜单的背景颜色（仅支持 hex 格式）| string |   —   | - |
| default-active | 当前激活菜单的 index | string | — | — |
| default-openeds | 当前打开的sub-menu的 key 数组 | Array    | — | — |
| unique-opened | 是否只保持一个子菜单的展开 | boolean | — | false |
| menu-trigger | 子菜单打开的触发方式(只在 mode 为 horizontal 时有效) | string   | — | hover |
| click-item-open | 点击子选项是否关闭全部子菜单 | boolean | true/false | true   |
| is-spread-mode | 垂直状态，平铺时子菜单是否悬浮 | boolean | — | false |


### Menu Methods
| 事件名称 | 说明 | 参数 |
|----------|--------|----------|
| open | 展开指定的 sub-menu | index: 需要打开的 sub-menu 的 index |
| close | 收起指定的 sub-menu | index: 需要收起的 sub-menu 的 index |

### Menu Events
| 事件名称 | 说明 | 回调参数 |
|----------|--------|----------|
| select | 菜单激活回调 | index: 选中菜单项的 index, indexPath: 选中菜单项的 index path |
| open | sub-menu 展开的回调 | index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path |
| close | sub-menu 收起的回调 | index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path |

### SubMenu Attribute
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----------|--------|----------|-------------|--------|
| index | 唯一标志 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| body-height | 设置submenu的高度和窗口高度一致 | boolean | — | false |
| showSearch | 是否显示搜索框 | boolean | — | false |
| menu-data | 搜索框搜索的数据 | Array | — | - |

### SubMenu Events
| 事件名称 | 说明 | 回调参数 |
|----------|--------|----------|
| select | 选择某一项搜索结果时的回调(showSearch为true时添加才会被调用) | menu-data中的某一项 |

### Menu-Item Attribute
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----------|--------|----------|-------------|--------|
| index | 唯一标志 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |

### Menu-Item-Group Attribute
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|----------|--------|----------|-------------|--------|
| title | 分组标题 | string | — | — |
