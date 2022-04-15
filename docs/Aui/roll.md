## Roll 滚动公告栏
<script>
    export default {
        data() {
            return {
				autoPlay: false,
				direction1:2,
                height1:100,
                step1:0.5,
                listData: [
                    '滚动公告栏第一行',
                    '滚动公告栏第二行',
                    '滚动公告栏第三行',
                    '滚动公告栏第四行',
                    '滚动公告栏第五行'
				],
				listDataPicture: [1, 2, 3, 4, 5, 6, 7, 8],
                rollTitle: '通知[系统]'
            };
        },
        computed: {
            classOption() {
                return {
                    limitMoveNum: 5
                };
			},
			classOption2() {
                return {
					height:30
                };
			},
			classOption3() {
				return {
					switchSingleStep: 110,
					height: 100
				};
			}
        }
    };
</script>
<style  lang="scss" scoped>
.item-left li{
	float: left;
	padding-left:15px
}
.roll-picture {
  height: 100px;
  width: 430px;
  margin: 0 auto;
  ul.item {
    margin-left: -40px;
    width: 920px;
    li {
      float: left;
      width: 100px;
      height: 100px;
      margin-right: 10px;
      line-height: 100px;
      background-color: #999;
      color: #fff;
      text-align: center;
      font-size: 30px;
    }
  }
}
</style>

## Roll 滚动公告栏

用来滚动显示公告

### 基本用法

基本的文字消息滚动公告栏
:::demo
```html
<aui-roll :options="listData" :step="step1" :class-option="classOption" :title="rollTitle">
    <ul class="item">
        <li v-for="item in listData"><span v-text="item"></span></li>
    </ul>
</aui-roll>

<script>
    export default {
        data() {
            return {
                listData: [
                    '向上滚动公告栏第一行',
                    '向上滚动公告栏第二行',
                    '向上滚动公告栏第三行',
                    '向上滚动公告栏第四行',
                    '向上滚动公告栏第五行'
                ],
                rollTitle: '通知[系统]',
                step1:0.5,
                direction1:2,
            };
        },
        computed: {
            classOption() {
                return {
                    limitMoveNum: 5
                };
            }
        }
    };
</script>
```

:::

### 横向滚动

默认是整体的向左滚动，如需单行滚动要将 li 标签设置为 float:left
:::demo
```html
<aui-roll :direction="direction1" :options="listData" :class-option="classOption2">
    <ul class="item-left">
        <li v-for="item in listData">{{item}}</li>
    </ul>
</aui-roll>

<script>
    export default {
        data() {
            return {
                listData: [
                    '向左滚动公告栏第一行',
                    '向左滚动公告栏第二行',
                    '向左滚动公告栏第三行',
                    '向左滚动公告栏第四行',
                    '向左滚动公告栏第五行'
                ],
                rollTitle: '通知[系统]',
                direction1:2
            };
        },
        computed: {
            classOption2() {
                return {
                    direction: 2,
                    height: 30
                };
            }
        }
    };
</script>
```

:::

### 图片滚动

如果需要使用 left(right)-switch 的 slot 插槽，需要将 autoplay 置为 false
:::demo
```html
<template>
    <aui-roll :height="height1" :class-option="classOption3" class="roll-picture">
        <span slot="left-switch" class="aui-roll__left-arrow"></span>
        <span slot="right-switch" class="aui-roll__right-arrow"></span>

        <ul class="item">
            <li v-for="item in listDataPicture">{{item}}</li>
        </ul>
    </aui-roll>
</template>
<script>
    export default {
        data() {
            return {
                height1:100,
                listDataPicture: [1, 2, 3, 4, 5, 6, 7, 8]
            };
        },
        computed: {
            classOption3() {
                return {
                    autoPlay: false,
                    switchSingleStep: 110,
                    // height: 100
                };
            }
        }
    };
</script>
```

:::

### Roll Attributes

| 参数                | 说明                                                             | 类型    | 可选值                      | 默认值   |
| ------------------- | ---------------------------------------------------------------- | ------- | --------------------------- | -------- |
| step                | 数值越大速度滚动越快                                             | Number  | -                           | 1        |
| title           | 公告栏标题                                                       | String  | —                           | -        |
| height              | 自定义高度(px)                                                   | Number  | —                           | 30       |
| hoverStop           | 是否启用鼠标 hover 控制                                          | Boolean |                             | true     |
| direction           | 滚动方向                                                         | Number  | 0:往下 1:往上 2:向左 3:向右 | 1        |
| interval            | 单步停止等待时间                                                 | Number  | -                           | 1000(ms) |
| autoPlay            | 是否自动播放使用 switch 切换时候需要置为 false                   | Boolean | -                           | true     |
| duration         | 单步切换的动画时间(ms)                                           | Number  | -                           | 400      |

### Roll Events

| 事件名称  | 说明                   | 回调参数 |
| --------- | ---------------------- | -------- |
| ScrollEnd | 一次滚动完成的回调事件 | null     |
