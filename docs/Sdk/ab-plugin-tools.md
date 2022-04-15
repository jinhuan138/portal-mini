# ab-plugin-tools@工具类

1.引入

```js
import { Tools } from "@agree/ab-plugin-tools"
```

2.使用

###  cutFileReadLine --截取正文内容读取文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath="d://a.txt";
let res = await Tools.cutFileReadLine(filePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 文件路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 读取的内容信息 |

----------------------------------------------------
###  openCal --柜面自有：扩展工具（打开计算器）

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Tools.openCal();
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功 |

----------------------------------------------------
###  startScreenCap --开始录屏

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let videoName="luping";
let filePath="d://";
let res = await Tools.startScreenCap(videoName,filePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| videoName | string | √ | 生成视频的名称 |
| filePath | string | √ | 生成视频的保存路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息:"交易开始被记录!!!,录屏已经开始." |

----------------------------------------------------
###  stopScreenCap --停止录屏

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Tools.stopScreenCap();
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息:filepath(成功);"错误操作！！！"(失败) |

----------------------------------------------------
###  catchScreen --截屏

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath="d://a.jpg";
let res = await Tools.catchScreen(filePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 生成图片路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":截图成功 |

----------------------------------------------------
###  csvToMap --CsvToMap

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let csv="d://a.jpg";
let res = await Tools.csvToMap(csv);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| csv | string | √ | 需要转化得csv |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 转化的结果 |

----------------------------------------------------
###  mapToCsv --mapToCsv

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let map="d://a.jpg";
let res = await Tools.mapToCsv(map);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| map | string | √ | 需要转化得map |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 转化的结果 |

----------------------------------------------------
###  addBorderToImg --addBorderToImg

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let borderPara="d://a.jpg";
let imgPath="d://a.jpg";
let res = await Tools.addBorderToImg(para,imgpath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| borderPara | string | √ | 圈化参数 |
| imgPath | string | √ | 图片路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 新路径 |

----------------------------------------------------
###  getEhcache --获取缓存

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let key="";
let childkey="";
let locale="";
let res = await Tools.getEhcache(key, childkey, locale);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| key | string | √ | 缓存key |
| childkey | string | √ | 缓存 |
| locale | string | √ | locale |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  setEhcache --设置缓存

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let key="";
let value="";
let res = await Tools.setEhcache(key, value);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| key | string | √ | 缓存key |
| value | string | √ | 缓缓存value存 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功 |

----------------------------------------------------
###  createGif --创建gif

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let gifId="";
let delay="";
let quality="";
let res = await Tools.createGif(gifId, delay, quality);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| gifId | string | √ | gifId |
| delay | string | √ | 每一帧显示时间ms 默认2000 |
| quality | string | √ | 生成质量1-100,越小越好 默认100 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | gifId |

----------------------------------------------------
###  addFrameGif --addFrameGif

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let gifId="";
let data="";
let scale="";
let quality="";
let x="";
let y="";
let height="";
let width="";
let res = await Tools.addFrameGif(gifId, data,scale, quality,x ,y, height,width);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| gifId | string | √ | gifId |
| data | string | √ | data |
| scale | string | √ | 缩放大小，0-1 默认0.8 |
| quality | string | √ | 生成质量 0-1 默认 1 |
| position | string | √ | 位置信息 {x,y,width,height} 均为整数，x,y相对于abc左上角位置 |


- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功 |

----------------------------------------------------
###  getGif --getGif

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let gifId="";
let gifFilePath="";
let res = await Tools.getGif(gifId, gifFilePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| gifId | string | √ | gifId |
| gifFilePath | string | √ | 路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | base64字符串 |

----------------------------------------------------
###  deleteGif --deleteGif

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let gifId="";
let res = await Tools.deleteGif(gifId);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| gifId | string | √ | gifId |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功删除 |

----------------------------------------------------
###  taskClientCache --定时任务加载缓存

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Tools.taskClientCache();
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功 |

----------------------------------------------------
###  fileToZip1 --压缩文件夹为zip文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let srcDir = "";
let outDir = "";
let res = await Tools.fileToZip1(srcDir,outDir);
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string |  |

----------------------------------------------------
###  fileToZip2 --压缩文件列表为zip文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePaths = "";
let outDir = "";
let res = await Tools.fileToZip2(filePaths,outDir);
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string |  |

----------------------------------------------------
###  zipToFile --解压zip文件到指定目录

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let zipFile = "";
let outDir = "";
let res = await Tools.zipToFile(zipFil,outDir);
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string |  |

----------------------------------------------------
###  startUpExe --启动本地的exe程序

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let exePath = "";
let args = "";
let res = await Tools.startUpExe(exePath,args);
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |

----------------------------------------------------