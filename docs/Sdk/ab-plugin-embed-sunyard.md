# ab-plugin-embed-sunyard@前端内嵌信雅达影像控件

1.引入

```js
import { SunYard } from "@agree/ab-plugin-embed-sunyard"
```
2.使用
###  sunYardInit --内嵌请求初始化

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="sunyard";//当前内嵌组件id
let res = await SunYard.sunYardInit(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  窗口句柄值  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.init(id)</font>

----------------------------------------------------
###  sunYardFinish --关闭信雅达控件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="sunyard";//id
let res = await SunYard.sunYardFinish(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.finish(id)</font>

----------------------------------------------------
###  sunYardActiveAbcShell --信雅达窗口置顶

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await SunYard.sunYardActiveAbcShell();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.activeShell()</font>

----------------------------------------------------
###  sunYardAddListener --启动信雅达控件主动发送报文的监听器

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="sunyard";//id
let res = await SunYard.sunYardAddListener(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  返回的结果  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.addListener(id)</font>

----------------------------------------------------
###  sunYardCommOcxFunction -- 调用ocx控件提供的接口

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="sunyard";//id
let value= ""
let res = await SunYard.sunYardCommOcxFunction(id,value);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |
| value| string | √   | x | 查看信雅达的接口文档    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.commOcxFunction(id,value)</font>

----------------------------------------------------
###  sunYardCreateSunScan --发送内嵌请求初始化:业务参数

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="sunyard";
let appId = '';
let tradeId = '';
let res = await SunYard.sunYardCreateSunScan(id,appId,tradeId);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| appId| string | √   | x | 应用号    |
| id| string | √   | x | 当前内嵌组件id    |
| tradeId| string | √   | x | 业务号    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.createSunScan(id,appId,tradeId)</font>

----------------------------------------------------
###  sunYardDeactiveAbcShell --取消窗口置顶

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await SunYard.sunYardDeactiveAbcShell();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.deactiveShell()</font>

----------------------------------------------------
###  sunYardFindSunYard --查询存活信雅达控件id

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await SunYard.sunYardFindSunYard();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.findSunYard()</font>

----------------------------------------------------
###  sunYardRemoveListener -- 关闭信雅达控件主动发送报文的监听器

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="sunyard";//id
let res = await SunYard.sunYardRemoveListener(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.removeListener(id)</font>

----------------------------------------------------
###  sunYardSetTimeout --设置信雅达控件进程的超时时间

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="sunyard";//id
let connectTimeout = 5;
let timeout = 5;
let res = await SunYard.sunYardSetTimeout(id,connectTimeout, timeout);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |
| connectTimeout| number | √   | x | socket连接超时时间    |
| timeout| number | √   | x | 通讯超时时间    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.setTimeout(id,connectTimeout，timeout)</font>

----------------------------------------------------
###  sunYardShowSunScan --操作控件,主要动作为新增修改查询

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="sunyard";//id
let tradeInfo = '';
let treeInfo = '';
let res = await SunYard.sunYardShowSunScan(id,tradeInfo,treeInfo);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |
| tradeInfo| string | √   | x | 业务信息    |
| treeInfo| string | √   | x | 目录树信息    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  返回的结果 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.showSunScan(id, tradeInfo, treeInfo)</font>

----------------------------------------------------
