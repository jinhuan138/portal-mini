## TimeLine 时间线
<!--
 * @Author: your name
 * @Date: 2021-04-10 09:28:20
 * @LastEditTime: 2021-04-10 09:38:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \aui-web\docs\timeline.md
-->
<script>
  export default {
    data() {
      return {
            count: 3,
      };
    },
    methods: {

    },
    computed:{
		timestampValue(){
			return new Date().toLocaleString()
		},
	},
  };
</script>

### 基础用法

:::demo
```html
<div>
    <aui-timeline>
        <aui-timeline-item :timestamp="timestampValue">
            <h4 class="recent">【广东】 广州市 已发出</h4>
        </aui-timeline-item>
        <aui-timeline-item>
            <h4>申通快递员 广东广州 收件员 xxx 已揽件</h4>
        </aui-timeline-item>
    </aui-timeline>
</div>
<script>
export default {
  data() {
    return {

    }
  },
  
  computed:{
      timestampValue() {
        return new Date().toLocaleString()
      }
  }
}
</script>
```
:::

## timeline Attributes
| name       | type    | default | accepted values | description  |
| ---------- | ------- | ------- | --------------- | ------------ |
| color      | string  | primary | —               | 进度条颜色   |
| isShowIcon | boolean | true    | —               | 是否展示图标 |
## timelineItem Attributes
| name           | type    | default | accepted values       | description                                 |
| -------------- | ------- | ------- | --------------------- | ------------------------------------------- |
| timestamp      | string  | —       | —                     | 时间戳                                      |
| hide-timestamp | boolean | false   | —                     | 是否隐藏时间戳                              |
| placement      | string  | bottom  | top / bottom          | 时间戳位置                                  |
| type           | string  | —       |                       | primary / success / warning / danger / info | 节点类型 |
| color          | string  | —       | hsl / hsv / hex / rgb | 节点颜色                                    |
| size           | string  | normal  | normal / large        | 节点尺寸                                    |
| icon           | string  | —       | —                     | 节点图标                                    |