# ab-plugin-communication-bridge@前端通信桥接器

1. 引入
```js
    import { CommunicationBridge } from "@agree/ab-plugin-communication-bridge"
```

2. 使用
###  sendAsync --发送报文

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let message = '报文内容';
let res = await CommunicationBridge.sendAsync(message);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| message| string | √   | x |报文内容    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  返回的信息  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: CommunicationBridge.sendAsync(message)</font>

--------------------------------------------------------