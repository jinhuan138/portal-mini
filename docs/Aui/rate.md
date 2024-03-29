## Rate 评分
<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: 3.7,
        space1:20
      };
    },
    mounted() {
      this.$nextTick(() => {
        let firstDemo = document.querySelector('.source');
        firstDemo.style.padding = '0';
      });
    }
  }
</script>
<style lang="scss">
  .demo-rate .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
    &:last-child {
      border-right: none;
    }
  }

  .demo-rate .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }
</style>

## Rate 评分

评分组件

### 基础用法

:::demo 评分被分为三个等级，可以利用颜色对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用过`colors`属性设置，而它们对应的两个阈值则通过 `low-threshold` 和 `high-threshold` 设定。
``` html
<div class="block">
  <span class="demonstration">默认不区分颜色</span>
  <aui-rate v-model="value1"></aui-rate>
</div>
<div class="block">
  <span class="demonstration">区分颜色11</span>
  <aui-rate
    v-model="value2"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :space="space1">
  </aui-rate>
</div>

<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        space1:20
        
      }
    }
  }
</script>
```
:::

### 辅助文字

用辅助文字直接地表达对应分数

:::demo 为组件设置 `show-text` 属性会在右侧显示辅助文字。通过设置 `texts` 可以为每一个分值指定对应的辅助文字。`texts` 为一个数组，长度应等于最大值 `max`。
``` html
<aui-rate
  v-model="value3"
  show-text>
</aui-rate>

<script>
  export default {
    data() {
      return {
        value3: null
      }
    }
  }
</script>
```
:::

### 其它 icon

当有多层评价时，可以用不同类型的 icon 区分评分层级

:::demo 设置`icon-classes`属性可以自定义对应 3 个不同分段的图标。本例还使用`void-icon-class`指定了未选中时的图标类名。
``` html
<aui-rate
  v-model="value4"
  :icons="['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3']"
  void-icon-class="icon-rate-face-off"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
</aui-rate>

<script>
  export default {
    data() {
      return {
        value4: null
      }
    }
  }
</script>
```
:::

### 只读

只读的评分用来展示分数，允许出现半星

:::demo 为组件设置 `disabled` 属性表示组件为只读，支持小数分值。此时若设置 `show-score`，则会在右侧显示目前的分值。
``` html
<aui-rate
  v-model="value5"
  disabled
  show-score>
</aui-rate>

<script>
  export default {
    data() {
      return {
        value5: 3.7
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| max | 最大分值 | number | — | 5 |
| disabled | 是否为只读 | boolean | — | false |
| allow-half | 是否允许半选 | boolean | — | false |
| colors | icon 的颜色数组，共有 3 个元素，为 3 个分段所对应的颜色 | array | — | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| space | 间隙 | number | — | 2 |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change | 分值改变时触发 | 改变后的分值 |

