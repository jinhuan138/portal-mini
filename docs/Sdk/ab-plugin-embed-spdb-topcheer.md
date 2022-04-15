# ab-plugin-embed-spdb-topcheer@前端嵌入控件
1.引入

```js
import {Topcheer} from '@agree/ab-plugin-embed-spdb-topcheer'
```
2.使用
###  embed --发送内嵌请求初始化

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = "Topcheer"; //当前内嵌组件id
let res = await Topcheer.embed(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  Topcheer窗体的句柄值 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Topcheer.embed(id)</font>

----------------------------------------------------
###  init --发送内嵌请求初始化

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = ""; //当前内嵌组件id
let initData = {}; //初始化信息
let res = await Topcheer.init(id,initData);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |
| initData| map | √   | x | 初始化信息    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  返回信息  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Topcheer.init(id,initData)</font>

----------------------------------------------------
###  submit --浏览器中提交表单

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = ""; //
let res = await Topcheer.submit(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  返回信息  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Topcheer.submit(id)</font>

----------------------------------------------------
###  currentFocus --

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Topcheer.currentFocus();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.msg    | string |  返回的信息 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Topcheer.currentFocus()</font>

----------------------------------------------------
###  dispose --销毁

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = ""; //
let res = await Topcheer.dispose(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Topcheer.dispose(id)</font>

----------------------------------------------------
