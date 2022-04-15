# ab-plugin-codec-file @编解码类组件

1.引入

```js
import { CodecFile } from '@agree/ab-plugin-codec-file';
```

2.使用

###  cryptoHandler --crypto加密

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = "C://test.txt";  
let cryptoType = "SM3";  
let res = await CodecFile.cryptoHandler(filePath,cryptoType);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 路径 |
| cryptoType | string | √ | 方式 "SM3" SM3方式加密 "Md5"获取文件md5 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 加密的结果 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.secure.encrypt 或 AgreeSDK.encryption.encrySM3File</font>

-------------------------------------------------------
###  clientFileBase64Handler --文件转换base64

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = "D:/text.png"
let transferType =  "encode"
CodecFile.clientFileBase64Handler(path,transferType)

let path = "D:/text.png"
let transferType =  "decode"
let base64String = "xxxx"
CodecFile.clientFileBase64Handler(path,transferType,base64String)
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| path | string | √ | 路径 |
| transferType | string | √ | 类型 |
| base64String | string | √ | base64字符串 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 转换的结果 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.file.fileToBase64 或 AgreeSDK.file.base64ToFile</font>
