# ab-manager-watermark@增加水印

用于给页面增加水印信息

## 1.引入
```js
import { watermarkManager } from "@agree/ab-manager-watermarkManager"
```

## 2.使用
```js
  //展示水印
  watermarkManager.showWatermark({
    transparency:0.5,
    fontSize:14,
    text:'测试信息',
    el:this.$el
  })
  //清除水印
  watermarkManager.clearWatermark(this.$el)
```

## 3.参数
### showWatermark方法参数

| 参数 | 类型 | 说明 |默认值
| -------- | --- | --- | --- |
| transparency | number | 水印透明度 | 0.5 |
| fontSize | number | 水印字体大小 | 14 |
| text | string | 水印内容 | 水印测试 |
| el | HTMLElement | 展示水印的区域 | document.body |

### clearWatermark方法参数

| 参数 | 类型 | 说明 |默认值
| -------- | --- | --- | --- |
| el | HTMLElement | 清除水印的区域 | document.body |







