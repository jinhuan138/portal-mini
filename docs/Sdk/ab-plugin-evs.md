# ab-plugin-evs@无纸化操作类

1.引入

```js
import { Evs } from "@agree/ab-plugin-evs";
```

2.使用
###  evsPrintPdf --打印PDF

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsPrintPdf(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsPdfSign --PDF签名

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>


```js
let parameter = ""; 
let res = await Evs.evsPdfSign(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsGetVectorImg --获取矢量图片

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>


```js
let parameter = ""; 
let res = await Evs.evsGetVectorImg(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsAddWatermark --添加水印

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsAddWatermark(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsExAttas --拆分附件 

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsExAttas(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsAddAttaToPdf --添加附件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsAddAttaToPdf(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsCreateSeal --生成电子印章

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsCreateSeal(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsCreatePdf --生成电子凭证
```js
let parameter = ""; 
let res = await Evs.evsCreatePdf(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsAddImage --添加图片

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsAddImage(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsPrintSeal --打印电子印章

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsPrintSeal(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsCallFileServer --传输无纸化文件到AFA 

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsCallFileServer(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsCreateEContract --生成电子合同 

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsCreateEContract(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsCombinePdfs --合并多张PDF
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsCombinePdfs(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 返回信息 |

----------------------------------------------------
###  evsFo2Pdf --FO2PDF

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let parameter = ""; 
let res = await Evs.evsFo2Pdf(parameter);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| parameter | string | √ | EVS参数 |

- 返回值: ``

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| |  |  |

----------------------------------------------------
