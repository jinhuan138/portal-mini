## Collapse 折叠面板

通过折叠面板收纳内容区域

### 基础用法

可同时展开多个面板，面板之间不影响

:::demo
```html
<aui-collapse v-model="activeNames" @change="handleChange">
  <aui-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </aui-collapse-item>
  <aui-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </aui-collapse-item>
  <aui-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </aui-collapse-item>
  <aui-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </aui-collapse-item>
</aui-collapse>
<script>
  export default {
    data() {
      return {
        activeNames: ['1']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
```
:::

### 手风琴效果

每次只能展开一个面板

:::demo 通过 `accordion` 属性来设置是否以手风琴模式显示。
```html
<aui-collapse v-model="activeName" accordion>
  <aui-collapse-item title="一致性 Consistency" name="1">
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </aui-collapse-item>
  <aui-collapse-item title="反馈 Feedback" name="2">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </aui-collapse-item>
  <aui-collapse-item title="效率 Efficiency" name="3">
    <div>简化流程：设计简洁直观的操作流程；</div>
    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
  </aui-collapse-item>
  <aui-collapse-item title="可控 Controllability" name="4">
    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
  </aui-collapse-item>
</aui-collapse>
<script>
  export default {
    data() {
      return {
        activeName: '1'
      };
    }
  }
</script>
```
:::

### Attributes

| 属性            | 说明                                                                      | 类型              | 可选值          | 默认值  |
| --------------- | ------------------------------------------------------------------------- | ----------------- | --------------- | ------- |
| **`accordion`** | 是否手风琴模式                                                            | `boolean`         | `true`\|`false` | `false` |
| **`v-model`**     | 当前激活的面板(如果是手风琴模式，绑定值类型需要为`string`，否则为`array`) | `string`\|`array` | —               | —       |
### Item Attributes

| 属性        | 说明       | 类型               | 可选值 | 默认值 |
| ----------- | ---------- | ------------------ | ------ | ------ |
| **`name`**  | 唯一标志符 | `string`\|`number` | -      | -      |
| **`title`** | 面板标题   | `string`           | -      | -      |

### Item-Slots

| **插槽名**    | **说明**     |
| ------------- | ------------ |
| **`default`** | 主体内容插槽 |

### Events

| 事件名       | 描述                                                                                 | 参数                          |
| ------------ | ------------------------------------------------------------------------------------ | ----------------------------- |
| **`change`** | 当前激活面板改变时触发(如果是手风琴模式，参数 activeNames 类型为string，否则为array) | `(activeNames: array|string)` |

