## Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

### 基础用法

移动到下拉菜单上，展开更多操作。

:::demo 通过组件`slot`来设置下拉触发的元素。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单。
```html
<aui-dropdown :options="options">
  <span class="aui-dropdown-link">
    下拉菜单<i class="aui-icon-arrow-down aui-icon--right"></i>
  </span>
</aui-dropdown>

<script>
export default {
  data(){
    return {
      options: [
        {
          label: "黄金糕",
        },
        {
          label: "狮子头",
        },
        {
          label: "螺蛳粉",
        },
        {
          label: "双皮奶",
          disabled: true
        },
        {
          label: "蚵仔煎",
          divided: true
        }
      ]
    }
  }
}
</script>

<style>
  .aui-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .aui-icon-arrow-down {
    font-size: 12px;
  }
</style>
```
:::

### 触发对象

可使用按钮触发下拉菜单。

:::demo 设置`split-button`属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为`true`即可。
```html
<aui-dropdown :options="options">
  <aui-button type="primary">
    更多菜单<i class="aui-icon-arrow-down aui-icon--right"></i>
  </aui-button>
</aui-dropdown>
<aui-dropdown :options="options" split-button type="primary">
  更多菜单
</aui-dropdown>

<script>
export default {
  data(){
    return {
      options: [
        {
          label: "黄金糕",
        },
        {
          label: "狮子头",
        },
        {
          label: "螺蛳粉",
        },
        {
          label: "双皮奶",
          disabled: true
        },
        {
          label: "蚵仔煎",
          divided: true
        }
      ]
    }
  }
}
</script>

<style>
  .aui-dropdown {
    vertical-align: top;
  }
  .aui-dropdown + .aui-dropdown {
    margin-left: 15px;
  }
  .aui-icon-arrow-down {
    font-size: 12px;
  }
</style>

```
:::

### 触发方式

可以配置 click 激活或者 hover 激活。

:::demo 在`trigger`属性设置为`click`即可。
```html
<aui-row class="block-col-2">
  <aui-col :span="12">
    <span class="demonstration">hover 激活</span>
    <aui-dropdown :options="options">
      <span class="aui-dropdown-link">
        下拉菜单<i class="aui-icon-arrow-down aui-icon--right"></i>
      </span>
    </aui-dropdown>
  </aui-col>
  <aui-col :span="12">
    <span class="demonstration">click 激活</span>
    <aui-dropdown :options="options" trigger="click">
      <span class="aui-dropdown-link">
        下拉菜单<i class="aui-icon-arrow-down aui-icon--right"></i>
      </span>
    </aui-dropdown>
  </aui-col>
</aui-row>

<script>
export default {
  data(){
    return {
      options: [
        {
          label: "黄金糕",
        },
        {
          label: "狮子头",
        },
        {
          label: "螺蛳粉",
        },
        {
          label: "双皮奶",
          disabled: true
        },
        {
          label: "蚵仔煎",
          divided: true
        }
      ]
    }
  }
}
</script>

<style>
  .block-col-2 {
    margin: -24px;

    .aui-col {
      padding: 30px 0;
      text-align: center;
      border-right: 1px solid #eff2f6;

      &:last-child {
        border-right: 0;
      }
    }
  }
  .aui-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .aui-icon-arrow-down {
    font-size: 12px;
  }
  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>
```
:::

### 触发事件

点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作

:::demo
```html
<aui-dropdown :options="options2" split-button type="primary" @selected="handleSelected" @click="handleClick" @visible-change="visibleChange">
  下拉菜单
</aui-dropdown>

<script>
  export default {
    data(){
      return {
        options2: [
          {
            label: "黄金糕",
            value: "a"
          },
          {
            label: "狮子头",
            value: "b"
          },
          {
            label: "螺蛳粉",
            value: "c"
          },
          {
            label: "双皮奶",
            value: "d",
            disabled: true
          },
          {
            label: "蚵仔煎",
            value: "e",
            divided: true
          }
        ]
      }
    },
    methods: {
      handleClick() {
        alert('button click');
      },
      handleSelected(value) {
        alert('click on item ' + value);
      },
      visibleChange(status){
        console.log('current status is ' + status);
      }
    }
  }
</script>
```
:::

### 不同尺寸

Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。
```html
<aui-dropdown :options="options" split-button type="primary">
  默认尺寸
</aui-dropdown>

<aui-dropdown :options="options" size="medium" split-button type="primary">
  中等尺寸
</aui-dropdown>

<aui-dropdown :options="options" size="small" split-button type="primary">
  小型尺寸
</aui-dropdown>

<aui-dropdown :options="options" size="mini" split-button type="primary">
  超小尺寸
</aui-dropdown>

<script>
export default {
  data(){
    return {
      options: [
        {
          label: "黄金糕",
        },
        {
          label: "狮子头",
        },
        {
          label: "螺蛳粉",
        },
        {
          label: "双皮奶",
          disabled: true
        },
        {
          label: "蚵仔煎",
          divided: true
        }
      ]
    }
  }
}
</script>
```
:::

### 弹出方向
:::demo
```html
<aui-row>
  <aui-col>
    <aui-dropdown :options="options" placement="top" split-button type="primary">
      top
    </aui-dropdown>
  </aui-col>

  <aui-col>
    <aui-dropdown :options="options" placement="top-start" split-button type="primary">
      top-start
    </aui-dropdown>
  </aui-col>

  <aui-col>
    <aui-dropdown :options="options" placement="top-end" split-button type="primary">
      top-end
    </aui-dropdown>
  </aui-col>
</aui-row>

<aui-row style="margin-top: 20px;">
  <aui-col>
    <aui-dropdown :options="options" placement="bottom" split-button type="primary">
      bottom
    </aui-dropdown>
  </aui-col>

  <aui-col>
    <aui-dropdown :options="options" placement="bottom-start" split-button type="primary">
      bottom-start
    </aui-dropdown>
  </aui-col>

  <aui-col>
    <aui-dropdown :options="options" split-button type="primary">
      bottom-end
    </aui-dropdown>
  </aui-col>
</aui-row>
<script>
export default {
  data(){
    return {
      options: [
        {
          label: "黄金糕",
        },
        {
          label: "狮子头",
        },
        {
          label: "螺蛳粉",
        },
        {
          label: "双皮奶",
          disabled: true
        },
        {
          label: "蚵仔煎",
          divided: true
        }
      ]
    }
  }
}
</script>
```
:::

### Dropdown Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| options | 下拉选项数组，具体结构详见下方 | array | — | [] |
| size | 菜单选项的尺寸 | string | medium / small / mini | — |
| type | 菜单按钮类型，同 Button 组件(只在`split-button`为 true 的情况下有效) | string | — | — |
| split-button | 下拉触发元素呈现为按钮组 | boolean | — | false |
| placement | 菜单弹出位置 | string | top / top-start / top-end / bottom / bottom-start / bottom-end | bottom-end |
| trigger | 触发下拉的行为 | string | hover / click | hover |

### Dropdown Events
| 事件名称 | 说明 | 回调参数 |
|-------|-------|-------|
| click | `split-button` 为 true 时，点击左侧按钮的回调 | — |
| selected | 点击菜单项触发的事件回调 | dropdown-item 的指令 |
| visible-change | 下拉框出现 / 隐藏时触发 | 出现则为 true，隐藏则为 false |

### options 选项结构
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|-------|-------|-------|-------|-------|
| label | 选项名称 | string | — | — |
| value | 选项值 | string / number / object | — | — |
| disabled | 禁用 | boolean | — | false |
| divided | 显示分割线 | boolean | — | false |

### Slot 插槽
| name | 说明 |
|-------|-------|
| default | 触发元素 |
