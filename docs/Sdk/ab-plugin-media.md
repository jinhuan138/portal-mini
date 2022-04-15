# ab-plugin-media 多媒体组件

1.引入

```js
import { Media } from '@agree/ab-plugin-media'
```

2.使用
###  captureImage -- 拍照

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
 let maxWidth = 700;
 let maxHeight = 400;
 let isFront = false;
 let encrypt = false;
 let fileName = "photo";
 let res = await Media.captureImage(maxWidth,maxHeight,isFront,encrypt,fileName)
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| maxWidth    | number | ×   | 0 |最大宽度    |
| maxHeight | number | ×  | 0 |最大高度 |
| isFront | boolean | ×  | false |是否使用前置摄像头 |
| encrypt | boolean | ×  | false |是否加密 |
| fileName | String | ×  | 时间戳 |照片名称 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  拍照结果路径  |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.captureImage()</font>
--------------------------------------------------------
###  barcodeScan -- 二维码扫描识别
> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
let res = await Media.barcodeScan();
```
- 返回值:`Object`

| 参数    | 类型   | 说明    |
| ------- | ------ | ---|------------------ |
| res.result | string | 二维码内容 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.barcode.scan()</font>
-------------------------------------------------------
###  barcodeEncode -- 生成二维码
> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
 let data = "hello wolrd , AB";
 let size = 450;
 let title = "条码标题";
 let description = "下部描述";
 let logoName = "/storage/emulated/0/xxxx";
 let res = await Media.barcodeEncode(data,size,title,description);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| data    | string | √   | 编码内容    |
| size | number | √  | 二维码尺寸 |
| title | string | ×  | 条码标题，可选参数 |
| description | string | ×  | 条码下部描述，可选参数 |
| logoName | string | ×  | 条码中间Logo图标路径，可选参数，指向前端工程静态资源下的目录 |

- 返回值:`Object`

| 参数    | 类型   | 说明    |
| ------- | ------ | ------------------ |
| res.result    | string | 二维码的base64  |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.barcode.encode()</font>
-------------------------------------------------------

###  captureVideo -- 录制视频
> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
let res = await Media.captureVideo();
console.log(res.result);
```

- 参数列表:

| 参数    | 类型   | 必填参数 | 默认值 |说明    |
| ------- | ------ | ---|---|--------------- |
| videoBitrate   | number | × | 600000 | 视频的比特率 |
| recordTimeMax | number | ×  | 60000 | 视频录制最长时间 , 单位毫秒 |
| maxFrameRate | number | × | 20 |最大帧率 |
| minFrameRate | number | × | 8 |最小帧率 |

- 返回值:`Object`

| 参数    | 类型   | 说明    |
| ------- | ------ | ------------------ |
| res.result    | string | 生成视频路径 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.video.captureVideo()</font>
-------------------------------------------------------

###  base64ToImage -- base64转图片

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
 let base64Str = "";
 let fileName = "ren.jpg";
 let encrypt = false;
 let width = 300;
 let height = 400;
 let res = await Media.base64ToImage(base64Str, fileName, encrypt, width, height)
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| base64Str  | String | √   |  | 不带前缀的base64字符串    |
| fileName | String | √  |  |文件名称 |
| encrypt | boolean | × | false |是否将base64存储成密文格式的文件，密文格式文件为.agree |
| width | number | ×  | 300 |图片宽度 |
| height | number | ×  | 300 |图片高度 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  图片路径  |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.base64ToImage()</font>
--------------------------------------------------------

###  chooseImage -- 选择图片

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
 let res = await Media.chooseImage()
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  图片路径  |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.chooseImage()</font>
--------------------------------------------------------

###  convertImg -- 图片格式转换

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
 let target= "workspace@www:///static/dust/test.png";
 let format= "jpeg";
 let res = await Media.convertImg(target, format)
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| target  | String | √   |  | 图片路径    |
| format  | String | √  |  | 转换后的格式 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  图片路径  |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.convertImg()</font>
--------------------------------------------------------

###  imageToBase64 -- 图片转base64

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
 let fileName= "workspace@www:///static/dust/test.png";
 let format= "png";
 let decrypt= false;
 let res = await Media.imageToBase64(fileName, decrypt, format)
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| fileName  | String | √   |  | 图片路径    |
| decrypt  | Boolean | √   |  | 是否为.agree格式的图片    |
| format  | String | √  |  | 格式 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  base64字符串  |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.imageToBase64()</font>
--------------------------------------------------------

###  scaleImage -- 图片缩放

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
 let fileName= "workspace@www:///static/dust/test.png";
 let width= 400;
 let height= 400;
 let scaleType= 0;
 let isCover= false;
 let quality= 100;
 let res = await Media.scaleImage(fileName, width, height, scaleType, isCover, quality);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| fileName  | String | √   |  | 图片路径    |
| width  | number | √   |  | 缩放宽    |
| height  | number | √   |  | 缩放高    |
| scaleType  | number | ×   | 0 | 1以高为标准按比例缩放，2以宽为标准按比例缩放，3为宽高不变按照质量压缩，0按照指定宽高缩放，默认0    |
| isCover  | Boolean | ×  | false | 是否覆盖原文件，默认false |
| quality  | number | ×  | 100 | 图片质量，100为不压缩，越低压缩率越高，范围0-100 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  图片路径  |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.scaleImage()</font>
--------------------------------------------------------

###  cropImage -- 图片裁剪

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
 let src = "workspace@www:///static/dust/test.png";
 let outputX= 400;
 let outputY= 400;
 let res = await Media.cropImage(src, outputX, outputY);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| src  | String | √   |  | 输入文件路径    |
| outputX  | number | √   |  | 裁剪后生成图片的大小    |
| outputY  | number | √   |  | 裁剪后生成图片的大小    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  图片路径  |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.cropImage()</font>
--------------------------------------------------------

###  synthesisIDCard -- 身份证合成

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
 let type = "total";
 let cType = "IDC";
 let orientation = "vertical";
 let position = "front";
 let width = 445;
 let height = 445;
 let data =  {
        id: "372928199112123910", // 身份证号码
        name: "张含韵",            // 姓名
        sex: "女",                // 性别
        nation: "汉",             // 民族
        birthday: "19911212",     // 出生日期
        portrait: "apps/agreesdk/static/idcard_portrait.png", // 头像
        address: "北京市朝阳区望京西花家地北里北区9号楼1单元",// 居住地址
        issuingAuthority: "北京市朝阳区公安局",               // 签发机关
        issuingCount: "01",                                   // 签发次数,港澳台身份证时需加上该字段
        validityTerm: "2013.01.01-2023.01.01"                 // 有效期限
    };
 let res = await Media.synthesisIDCard(type, cType, orientation, position, width, height, data);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| type  | String | √   |  | 合成证件正反面类型，可选：front(国徽页)、back(人像页)、total(合成两张)    |
| cType  | String | √   |  | 合成证件类型，IDC 身份证， HMTC港澳台居住证 FC外国人永久居住证    |
| orientation  | String | √   |  | 证件合成方向，horizontal，两张图片并列横向,vertical两张图片并列竖向，可选    |
| position  | String | √   |  | 证件图片方向，front代表国徽页在前，back代表人像页在前|
| width  | String | √   |  | 合成图片长度    |
| height  | number | √   |  | 合成图片高度    |
| data  | Object | √   |  | 合成证件信息    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  图片路径  |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.synthesisIDCard()</font>
--------------------------------------------------------
