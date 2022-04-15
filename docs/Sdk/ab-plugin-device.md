# ab-plugin-device @外设操作类组件

1.引入

```js
import { DeviceSetting } from "@agree/ab-plugin-device"
```

2.使用
###  setAdsPreference --设置外设ads链接url

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let adsUrl="http://127.0.0.1:3306";  //ads的链接url
let result = await DeviceSetting.setAdsPreference(adsUrl);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| adsUrl| string | √   | x |ads的链接url    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "true"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.setAdsPreference(adsUrl)</font>

--------------------------------------------------------
###  getDeviceList --获取外设列表

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await DeviceSetting.getDeviceList();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  外设列表  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.getDeviceList()</font>

-------------------------------------------------------
###  setDeviceList --设置外设配置信息

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let setting = "";   //配置的json字符串
let res = await DeviceSetting.setDeviceList(setting);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| setting| string | √   | x |配置的json字符串    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "true"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.setDeviceList(setting)</font>

-------------------------------------------------------
###  clearDeviceList --清空外设配置信息

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await DeviceSetting.clearDeviceList();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "true"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.clearDeviceList()</font>

-------------------------------------------------------
###  getAbcSocketPort --获取abc监听adssocket端口

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await DeviceSetting.getAbcSocketPort();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string | abc监听adssocket端口  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.getAbcSocketPort()</font>

-------------------------------------------------------
###  getDeviceSocketPort --获取adssocket端口

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await DeviceSetting.getDeviceSocketPort();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string | adssocket端口  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.getDeviceSocketPort()</font>

-------------------------------------------------------
###  isAdsConnect --判断ads是否启动成功

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await DeviceSetting.isAdsConnect();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string | "true"或"false"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.isAdsConnect()</font>

-------------------------------------------------------
###  getOneTypeDeviceConfig --根据传入外设类型获取外设配置(壳子中无对应实现，勿调用！)

> <font color ='red' style="font-weight:bold">支持柜面渠道(壳子中无对应实现，勿调用！)</font>

```js
let adsType = ""; //外设类型
let adsQuery = "";  //是否从ads获取外设配置信息
let res = await DeviceSetting.getOneTypeDeviceConfig(adsType,adsQuery);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| adsType| string | √   | x |外设类型    |
| adsQuery| string | √   | x |是否从ads获取外设配置信息    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  暂时未知 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.getOneTypeDeviceConfig(adsType,adsQuery)</font>

-------------------------------------------------------
###  jsSubscribeReady --js消息订阅完成

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await DeviceSetting.jsSubscribeReady();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "true" |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.jsSubscribeReady()</font>

-------------------------------------------------------