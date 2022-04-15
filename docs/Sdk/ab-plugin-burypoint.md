# ab-plugin-burypoint @前端BuryPoint(埋点信息收集)类组件

1.引入

```js
import { BuryPoint } from '@agree/ab-plugin-burypoint';
```

2.使用
###  record --埋点信息收集组件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let message = `{demo}`;  //字符串入参
let res = await BuryPoint.record(message);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| message| string | √   | x |字符串入参    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result  | string |  成功的标识  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: 无</font>

--------------------------------------------------------