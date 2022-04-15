# ab-logger-upload @前端LogUpload

1.引入

```js
import { LogUpload } from '@agree/ab-logger-upload';
```

2.使用
###  diffUploadLog --作用于差量上传日志

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await LogUpload.diffUploadLog();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result  | string |  成功的标识  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: 无</font>

--------------------------------------------------------