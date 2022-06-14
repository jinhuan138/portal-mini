## PicViewer 图片查看组件

图片查看组件，有放大、缩小、旋转、拖拽、缩略图等功能。
<script>
  export default {
    data() {
      return {
        imgArr: []
      }
    },
    methods: {
		getMultiPicArr() {
			let res = [  //多图显示的图片数据,模拟请求接口拿到的数据
				{	
					index: "1",
					imgurl: "https://www.agree.com.cn/plugins/ueditor/jsp/ueditor/jsp/upload/images/20200828/1598580285386097541.jpg",
					title: "开放银行平台解决方案",
				},
				{
					index: "2",
					imgurl: "https://www.agree.com.cn/plugins/ueditor/jsp/ueditor/jsp/upload/images/20200828/1598579883443034053.jpg",
					title: "云柜员解决方案",
				},
				{
					index: "3",
					imgurl: "https://www.agree.com.cn/file/img/index/infoPicture/20200630093921_max_1121.jpg",
					title: "全渠道解决方案供应商",
				}
			];
        	this.imgArr = res 
		},
		roteLeft() {
			this.$refs["picViewer"].rotateLeft()
		},
		roteRight() {
			this.$refs["picViewer"].rotateRight()
		},
		recover() {
			this.$refs["picViewer"].recoverImage()
		},
		bigImg() {
			this.$refs["picViewer"].biggerImage()
		},
		smallImg() {
        	this.$refs["picViewer"].smallerImage()
		}
    }
  }
</script>

<style>
	.viewer1 {
		width: 100%;
		height: 300px;
	}
	.viewer2 {
		width: 100%;
		height: 300px;
	}
	.viewer3 {
		width: 100%;
		height: 450px;
		border: 1px solid #BFBFBF;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
	}
	.tools {
		width: 100%;
		height: 50px;
		background-color: #F5F8FA;
	}
	.toolbar {
		margin: 0 30px;
		line-height: 50px;
	}
	.toolbar span {
		cursor: pointer;
		margin: 5px 14px;
	}
	.toolbar span i {
		font-size: 18px;
	}
	.viewcontent {
		width: 100%;
		height: 350px;
	}
	.bottom {
		width: 100%;
		height: 50px;
		background-color: #F5F8FA;
		position: absolute;
		bottom: 0;
	}
	.text {
		margin: 0 20px;
		line-height: 50px;
		font-size: 13px;
	}
	.divider {
		display: inline-block;
		width: 1px;
		height: 1em;
		margin: 0 8px;
		vertical-align: middle;
		position: relative;
		background-color: #DCDFE6;
	}
</style>



### 基础用法

点击放大缩小按钮或者滚动鼠标滚轮可以放大缩小图片
:::demo

```html
<template>
	<div class="viewer1">
		<aui-picviewer
			image-url="https://www.agree.com.cn/plugins/ueditor/jsp/ueditor/jsp/upload/images/20200828/1598580285386097541.jpg"
			:pre-or-next-show="false"
			:multi-show="false"
		></aui-picviewer>
	</div>
</template>

<style>
	.viewer1 {
		width: 100%;
		height: 300px;
	}
</style>
```

:::

### 多张图片展示
点击多图显示按钮，传入多图显示所需的图片数组信息。传入图片数组长度不同，展示效果不同。
传入两张图片，一行两列展示；传入三张图片，第一张占左边一列，第二张和第三张占右边一列分两行展示；传入四张及四张以上图片四分展示(两行两列)，超出可视区域部分在右侧显示滚动条
::: demo

```html
<template>
  	<div class="viewer2">
		<aui-picviewer
			image-url="https://www.agree.com.cn/plugins/ueditor/jsp/ueditor/jsp/upload/images/20200828/1598579883443034053.jpg"
			:pre-or-next-show="false"
			:multi-img-arr="imgArr"
			@get-multi-pic-arr="getMultiPicArr"
		></aui-picviewer>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        imgArr: []
      };
    },
    methods: {
		getMultiPicArr() {
			let res = [  //多图显示的图片数据,模拟请求接口拿到的数据
				{	
					index: "1",
					imgurl: "https://www.agree.com.cn/plugins/ueditor/jsp/ueditor/jsp/upload/images/20200828/1598580285386097541.jpg",
					title: "开放银行平台解决方案",
				},
				{
					index: "2",
					imgurl: "https://www.agree.com.cn/plugins/ueditor/jsp/ueditor/jsp/upload/images/20200828/1598579883443034053.jpg",
					title: "云柜员解决方案",
				},
				{
					index: "3",
					imgurl: "https://www.agree.com.cn/file/img/index/infoPicture/20200630093921_max_1121.jpg",
					title: "全渠道解决方案供应商",
				}
			];
        	this.imgArr = res 
		}
    },
  };
</script>

<style>
	.viewer2 {
		width: 100%;
		height: 300px;
	}
</style>
```

:::

### 自定义工具栏的图标、样式
通过设置属性toolbar-show为false隐藏工具栏，然后根据需求自义定工具栏按钮样式
::: demo

```html
<template>
  	<div class="viewer3">
		<div class="tools">
			<div class="toolbar">
				<span title="向左旋转" @click="roteLeft"><i class="aui-icon-refresh-left"></i></span>
				<span title="向右旋转" @click="roteRight"><i class="aui-icon-refresh-right"></i></span>
				<span title="还原" @click="recover"><i class="aui-icon-full-screen"></i></span>
				<span title="放大" @click="bigImg"><i class="aui-icon-zoom-in"></i></span>
				<span title="缩小" @click="smallImg"><i class="aui-icon-zoom-out"></i></span>
			</div>
		</div>
		<div class="viewcontent">
			<aui-picviewer
				ref="picViewer"
				image-url="https://www.agree.com.cn/file/img/index/infoPicture/20200630093921_max_1121.jpg"
				:toolbar-show="false"
			></aui-picviewer>
		</div>
		<div class="bottom">
			<div class="text">
				<span>当前操作：查询批次</span>
				<div class="divider"></div>
				<span>共1张</span>
			</div>
		</div>  
	</div>
</template>

<script>
  export default {
    data() {
    	return {};
    },
    methods: {
		roteLeft() {
			this.$refs["picViewer"].rotateLeft()
		},
		roteRight() {
			this.$refs["picViewer"].rotateRight()
		},
		recover() {
			this.$refs["picViewer"].recoverImage()
		},
		bigImg() {
			this.$refs["picViewer"].biggerImage()
		},
		smallImg() {
        	this.$refs["picViewer"].smallerImage()
		}
    },
  };
</script>

<style>
	.viewer3 {
		width: 100%;
		height: 450px;
		border: 1px solid #BFBFBF;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
	}
	.tools {
		width: 100%;
		height: 50px;
		background-color: #F5F8FA;
	}
	.toolbar {
		margin: 0 30px;
		line-height: 50px;
	}
	.toolbar span {
		cursor: pointer;
		margin: 5px 14px;
	}
	.toolbar span i {
		font-size: 18px;
	}
	.viewcontent {
		width: 100%;
		height: 350px;
	}
	.bottom {
		width: 100%;
		height: 50px;
		background-color: #F5F8FA;
		position: absolute;
		bottom: 0;
	}
	.text {
		margin: 0 20px;
		line-height: 50px;
		font-size: 13px;
	}
	.divider {
		display: inline-block;
		width: 1px;
		height: 1em;
		margin: 0 8px;
		vertical-align: middle;
		position: relative;
		background-color: #DCDFE6;
	}
</style>
```

:::

### Attributes

| 参数   | 说明                      | 类型    | 可选值      | 默认值 |
| ------ | ------------------------ | ------- | ----------- | ------ |
| image-url | 图片的地址 | string | — |
| toolbar-show | 是否显示工具栏 | boolean | true / false | true |
| rotate-show | 左旋和右旋图标是否显示 | boolean | true / false | true |
| pre-or-next-show | 上一张和下一张图标是否显示 | boolean | true / false | true |
| multi-show | 多图显示图标是否显示 | boolean | true / false | true |
| multi-img-arr | 多图显示的图片信息数组 | array | — | — |

### Events

| 事件名称 | 说明               | 回调参数 |
| -------- | ------------------ | -------- |
| pre-img | 点击上一张按钮的回调 | — |
| next-img | 点击下一张按钮的回调 | — |
| get-multi-pic-arr | 点击多图显示按钮的回调 | — |

### Methods
| 方法名    | 说明          | 参数 |
|---------- |-------------- | -- |
| biggerImage | 放大按钮对应的方法 | — |
| smallerImage | 缩小按钮对应的方法 | — |
| recoverImage | 还原按钮对应的方法 | — |
| rotateLeft | 左旋按钮对应的方法 | — |
| rotateRight | 右旋按钮对应的方法 | — |
| prevImage | 上一张按钮对应的方法 | — |
| nextImage | 下一张按钮对应的方法 | — |
| openMultiPic | 多图显示按钮对应的方法 | — |
