## BMap百度地图组件
<!--
 * @Author: zhoushiyong
 * @LastEditors: Zhou Shiyong
 * @email: zhoushiyong@agree.com.cn
 * @Date: 2021-01-05 21:35:21
 * @LastEditTime: 2021-01-07 14:32:13
-->

<script>
  export default {
    data() {
      return {
        pointA: [112.96032539827146, 28.231178291990425],
        pointB: [112.95064840216843, 28.18625910744467],
        zooming:true,
        zoom:12,
        control:true,
        dragging: true,
        queryShow: true
      }
    },

    methods:{
    setCenter(pointA) {
        this.$refs.myChild.setCenter(pointA);
    },
    setZooming(zooming) {
        this.$refs.myChild.setZooming(zooming)
    },
     setZoom(zoom) {
        this.$refs.myChild.setZoom(zoom);
    },
    addControl(control) {
        this.$refs.myChild.addControl(control);
    },
    setDragging(dragging) {
        this.$refs.myChild.setDragging(dragging);
    },
    getDistance(pointA,pointB) {
        this.$refs.myChild.getDistance(pointA,pointB);
    },
    addOverlay() {
         let point = this.pointA
        this.$refs.myChild.addOverlay(point,"","","","","","");
    },
    addTextInfoWindow() {   
        let opts = {
        width: 200, // 信息窗口宽度
        height: 60, // 信息窗口高度
        title: "赞同科技股份有限公司", // 信息窗口标题
        enableMessage: true //设置允许信息窗发送短息
      };
      let message = "欢迎来到赞同科技股份有限公司！！";
      this.$refs.myChild.addTextInfoWindow(opts, message);
    },
     addComplexInfoWindow() {
        // 拼接html字符串
      let sContent =
        "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>赞同科技股份有限公司</h4>" +
        "<img style='float:right;margin:4px' id='imgDemo' src='../aui-docs/examples/assets/agree.png' width='139' height='104' title='赞同科技股份有限公司'/>" +
        "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>赞同科技股份有限公司坐落于...</p>" +
        "</div>";
      this.$refs.myChild.addComplexInfoWindow(sContent);
    },
    setTrajectory() {
      let point = ["112.96032539827146, 28.231178291990425", "112.95064840216843, 28.1862591074446"];
      this.$refs.myChild.setTrajectory(point);
    },
    walkingRouteSearch(pointA, pointB) {
      this.$refs.myChild.walkingRouteSearch(pointA, pointB);
    },
    drivingRouteSearch(pointA, pointB) {
      this.$refs.myChild.drivingRouteSearch(pointA, pointB);
    },
    removeAllOverlay() {
       this.$refs.myChild.removeAllOverlay(); 
    }
    }
  }
</script>



### 基本用法

地图通用功能属性方法调用:设置中心点位置、设置是否可缩放、设置缩放比例级别等封装属性

注：地图已对检索框进行了封装处理，子组件默认将其设置为false，如若使用，父组件引用queryShow属性并将其设置为true即可
::: demo
```html
<template>
  <div class="aui-bmap" style="min-width:300px">
    <aui-map ref="myChild" :query-show="queryShow"></aui-map>
    <aui-form style="margin-left:120px;width:800px;min-width:500px">
    <aui-form-item>
    <aui-button @click="setCenter(pointA)">设置中心点位置</aui-button>
    <aui-button @click="setZooming(zooming)">设置是否可缩放</aui-button>
    <aui-button @click="setZoom(zoom)">设置缩放比例级别</aui-button>
    </aui-form-item>
    <aui-form-item>
    <aui-button @click="addControl(control)">添加平移缩放控件</aui-button>
    <aui-button @click="setDragging(dragging)">设置是否可拖拽</aui-button>
    <aui-button @click="getDistance(pointA,pointB)">获取两个点的直线距离</aui-button>
    </aui-form-item>
    <aui-form-item>
    <aui-button @click="addOverlay()">定义标注图标与文字</aui-button>
    <aui-button @click="addTextInfoWindow()">自定义纯文本信息窗口</aui-button>
    <aui-button @click="addComplexInfoWindow()">自定义复杂信息窗口</aui-button>
    </aui-form-item>
    <aui-button @click="setTrajectory()">设置轨迹</aui-button>
    <aui-button @click="walkingRouteSearch(pointA,pointB)">规划步行路线导航</aui-button>
    <aui-button @click="drivingRouteSearch(pointA,pointB)">规划开车路线导航</aui-button>
    <aui-button @click="removeAllOverlay()">清楚所有覆盖物</aui-button>
    </aui-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pointA: [112.96032539827146, 28.231178291990425],
        pointB: [112.95064840216843, 28.18625910744467],
        zooming:true,
        zoom:12,
        control:true,
        dragging: true,
        queryShow: true
      }
    },
    methods: {
    setCenter(pointA) {
        this.$refs.myChild.setCenter(pointA);
    },
    setZooming(zooming) {
        this.$refs.myChild.setZooming(zooming)
    },
    setZoom(zoom) {
      this.$refs.myChild.setZoom(zoom);
    },
    addControl(control) {
        this.$refs.myChild.addControl(control);
    },
    setDragging(dragging) {
        this.$refs.myChild.setDragging(dragging);
    },
    getDistance(pointA,pointB) {
        this.$refs.myChild.getDistance(pointA,pointB);
    },
    addOverlay() {
        let point = this.pointA
        this.$refs.myChild.addOverlay(point,"","","","","","");
    },
    addTextInfoWindow() {
        let opts = {
        width: 200, // 信息窗口宽度
        height: 60, // 信息窗口高度
        title: "赞同科技股份有限公司", // 信息窗口标题
        enableMessage: true //设置允许信息窗发送短息
      };
      let message = "欢迎来到赞同科技股份有限公司！！";
      this.$refs.myChild.addTextInfoWindow(opts, message);
    },
    addComplexInfoWindow() {
        // 拼接html字符串
      let sContent =
       "<h4 style='margin:0 0 5px 0;padding:0.2em 0'>赞同科技股份有限公司</h4>" +
        "<img style='float:right;margin:4px' id='imgDemo' src='../aui-docs/examples/assets/agree.png' width='139' height='104' title='赞同科技股份有限公司'/>" +
        "<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>赞同科技股份有限公司坐落于...</p>" +
        "</div>";
      this.$refs.myChild.addComplexInfoWindow(sContent);
    },
    setTrajectory() {
      let point = ["112.96032539827146, 28.231178291990425", "112.96033438132656, 28.230955513851562"];
      this.$refs.myChild.setTrajectory(point);
    },
    walkingRouteSearch(pointA, pointB) {
      this.$refs.myChild.walkingRouteSearch(pointA, pointB);
    },
    drivingRouteSearch(pointA, pointB) {
      this.$refs.myChild.drivingRouteSearch(pointA, pointB);
    },
    removeAllOverlay() {
       this.$refs.myChild.removeAllOverlay(); 
    }
    }
  }
</script>

```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| queryShow | 检索框 | Boolean | true/false | false |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| setCenter | 设置中央位置 | 城市名或者经纬度 ,如："长沙" point |
| setZooming | 设置是否可缩放 | Boolean |
| setZoom | 设置缩放比例 | 非负数,如：12 |
| addControl | 是否添加平移缩放控件 | Boolean |
| setDragging | 是否可拖拽 | Boolean |
| setDragging | 是否可拖拽 | Boolean |
| getDistacnce | 获取两个点的直线距离 | 两个点的坐标(pointA、pointB) |
| addOverlay | 定义标注图标与文字 | point(x,y坐标，例如:"121.123,33.321") iconPath(图标路径,可以是网络地址或者相对路径。如果输入空字符串，按百度地图默认图标) iconSize(图标的大小,单位为px,例如:"23,25"。如果iconPath为空字符串，则iconSize也填空字符串) iconOffset(图标的指定定位位置,当标注显示在地图上时，其所指向的地理位置距离图标左上角偏移,例如:"10, 25"。如果iconPath为空字符串，则iconOffset也填空字符串) imageOffset(当您需要从一幅较大的图片中截取某部分作为标注图标时需要指定大图的偏移位置,例如:"0,-20"。如果iconPath为空字符串，则imageOffset也填空字符串 text(设置文本标注的内容。支持HTML。如果没有内容则填空字符串) labelOffset(	文本标注的位置偏移值。如果text为空字符串，则labelOffset也填空字符串) |
| addTextInfoWindow | 自定义纯文本信息窗口 | opts(信息窗格样式)   message(内容主体)|
| addComplexInfoWindow | 自定义复杂信息窗口 | sContent(拼接html字符串)|
| setTrajectory | 设置轨迹 | 两个坐标点(pointA,pointB)|
| walkingRouteSearch | 规划步行路线导航 | 两个坐标点(pointA,pointB)或者两个地名字符串("长沙","北京")|
| drivingRouteSearch | 规划开车路线导航 | 两个坐标点(pointA,pointB)或者两个地名字符串("长沙","北京")|
| removeAllOverlay | 清楚所有覆盖物 | -------- |
