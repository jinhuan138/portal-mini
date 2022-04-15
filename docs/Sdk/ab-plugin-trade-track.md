# ab-plugin-trade-track@日志链路追踪

1.引入

```js
import { TradeTrack } from "@agree/ab-plugin-trade-track";
```
2.事件方法的使用

###  getTradeId --申请tradeId
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let result = await TradeTrack.getTradeId("T1001");
this.tradeId1 = result.tradeId;

let childResult = await TradeTrack.getTradeId("T1001",this.tradeId1)
this.childTradeId = childResult.tradeId
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| tradeId | string | x  | x |交易ID    |
| tradeName| string | √  | x |交易名称    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  返回的交易ID  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: TradeTrack.getTradeId(tradeName,tradeId)</font>
----------------------------------------------------
###  getRequestId --根据tradeId申请requestId
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js 
let result1 = await TradeTrack.getRequestId(this.tradeId1);
this.requestId1 = result1.requestId;
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| tradeId | string |  √  | x |交易ID    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  返回对应ID  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: TradeTrack.getRequestId(tradeId)</font>
----------------------------------------------------
###  remove --清除tradeId
><font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let result1 = await TradeTrack.remove(this.tradeId1);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| tradeId | string |  √  | x |交易ID    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result| string |  success,代表删除成功 |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: TradeTrack.remove(tradeId)</font>
----------------------------------------------------
