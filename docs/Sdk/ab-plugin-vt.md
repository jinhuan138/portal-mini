# ab-plugin-vt@VT组件桥接器

1.引入

```js
import { Vt } from "@agree/ab-plugin-vt"
```

2.使用
###  init --初始化
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id="vt";
let res = await Vt.init(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id      | string | √  | x |Vt组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.msg   | string |  handle,句柄  |
| res.result| string |  成功的标识  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: VT.init(id)</font>
----------------------------------------------------
###  dispose --销毁
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let id="vt";
let res = await Vt.dispose(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id      | string | √  | x |Vt组件的id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无    | 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: VT.dispose(id)</font>
----------------------------------------------------
###  sendMessageTriggerByKeywords --根据屏幕关键字发送对应消息
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let keywords="";
let messageKey="";
let res = await Vt.sendMessageTriggerByKeywords(keywords,messageKey);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| keywords | string | √  | x |监听关键字    |
| messageKey| string | √  | x |发送给交易的key值    |
- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  预览页面的url  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: VT.sendMessageTriggerByKeywords(keywords,messageKey)</font>
----------------------------------------------------
###  disconnect --与vt断开连接
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let res = await Vt.disconnect();
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------| ---|---|------------------ |
| 无      | 无 | x  | x |无    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无    | 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: VT.disconnect()</font>
----------------------------------------------------
###  sendCommand --给vt发送指令
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>
```js
let command="";
let res = await Vt.sendCommand(command);
```
- 参数列表:

| 参数    | 类型   | 必填参数|默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| command | string | √  | x |vt指令    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| 无   | 无 |  无  |
> <font color ='red' style="font-weight:bold">对应柜面原SDK: VT.sendCommand(command)</font>
----------------------------------------------------
