# ab-plugin-window-message 窗口定时消息 

1.引入

```js
import { WindowMessenger } from '@agree/ab-plugin-window-message';
```

2.使用
###  sendWindowMessageDelay -- 定时发送窗口消息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let timeout = 1000;
    let jtname = "mySDK";
    let result = await WindowMessenger.sendWindowMessageDelay(timeout, jtname);
```

* 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| timeout   | number | √  | 定时时间,单位毫秒 |
| jtname    | string | √   | 消息体  |

* 返回值:

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| result   | string | 加入定时队列是否成功 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.windowmessage.sendWindowMessageDelay()</font>

--------------------------------------------------------
###  pauseWindowMessageDelay -- 暂停定时

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let result = await WindowMessenger.pauseWindowMessageDelay();
```

* 返回值:

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| result   | string | 是否暂停成功 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.windowmessage.pauseWindowMessageDelay()</font>
-------------------------------------------------------
###  startWindowMessageDelay -- 暂停后重新开始定时

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let result = await WindowMessenger.startWindowMessageDelay();
```
* 返回值:

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| result | string | 是否重新计时成功 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.windowmessage.startWindowMessageDelay()</font>
-------------------------------------------------------

###  cancelWindowMessageDelay -- 取消定时

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let result = await WindowMessenger.cancelWindowMessageDelay();
```
* 返回值:

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| result   | string | 取消定时是否成功 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.windowmessage.cancelWindowMessageDelay()</font>
-------------------------------------------------------

###  getGeoFenceInfo -- 获取地理位置

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let result = await WindowMessenger.getGeoFenceInfo();
```
- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| result.longitude   | number | 经度 |
| result.latitude   | number | 纬度 |
| result.isGeoFenceMatch   | boolean | 是否匹配地理围栏 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.windowmessage.getGeoFenceInfo()</font>
-------------------------------------------------------
