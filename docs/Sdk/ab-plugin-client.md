# ab-plugin-client @客户端类组件

1.引入

```js
import { Client } from '@agree/ab-plugin-client';
```

2.使用

###  closeClient --关闭客户端

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let isFinish = true;
let res = await Client.closeClient(isFinish);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| isFinish | boolean | x | 是否关闭 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.app.quitApp(isFinish)</font>

--------------------------------------------------------
###  getOid --获取客户端oid

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.getOid();
```

- 移动渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 获取到的oid |

- 柜面渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 获取到的oid |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.device.getInfo()</font>

--------------------------------------------------------
###  getClientIp --获取客户端ip地址

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.getClientIp();
```

- 移动渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 获取到的客户端ip |

- 柜面渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 获取到的客户端ip |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.device.getInfo()</font>

--------------------------------------------------------
###  getAppID --获取客户端应用唯一标识

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let clientIp = ""; 
let res = await Client.getAppID(clientIp);
```

- 参数列表:

| 参数    | 类型   | 必填参数 | 参数差异 | 说明    |
| ------- | ------ | ---|---|--------------- |
| clientIp | string | √ | <font color='green'> 移动端可缺省</font> | 客户端ip地址 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 获取到的appId |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.app.getAppId </font>

--------------------------------------------------------
###  getMac --获取客户端Mac地址

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let clientIp = "";
let res = await Client.getMac(clientIp);
```

- 参数列表

| 参数    | 类型   | 必填参数 |参数差异|说明    |
| ------- | ------ | ---|-----------|------- |
| clientIp | string | √ |  <font color='green'> 移动端可缺省</font> | 客户端ip地址 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 获取到的mac地址 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.device.getInfo()</font>

--------------------------------------------------------
###  getClientRootPath --获取客户端根路径

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.getClientRootPath();
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 获取到的客户端根路径 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.file.workspaceDirectory</font>

--------------------------------------------------------
###  getClientOSName --获取客户端操作系统名称

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.getClientOSName();
```

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 获取到的客户端操作系统名称 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.device.getInfo()</font>

--------------------------------------------------------
###  setThemePreference -- 设置主题

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let theme = '#FFF';
let result = await Client.setThemePreference(theme);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| theme | string | √ | 主题颜色 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 是否设置成功("true":成功;"false":失败) |

--------------------------------------------------------
###  setLegalNum --设置柜面渠道法人号

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let legalNum = '0010';
let result = await Client.setLegalNum(legalNum);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| legalNum | string | √ | 柜面渠道法人号 |

- 柜面渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 是否设置成功("true":成功;"false":失败) |

--------------------------------------------------------
###  setMina --设置是否与服务端通讯

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let MINA = 'true'
let result = await Client.setMina(MINA);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| MINA | string | √ | 是否与服务端通讯 |

- 柜面渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 是否设置成功("true":成功;"false":失败) |

--------------------------------------------------------
###  setMode --设置连接服务端环境

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let MODE = 'dev';
let result = await Client.setMode(MODE);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| MODE | string | √ | 设置连接服务端环境 |

- 柜面渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 是否设置成功("true":成功;"false":失败) |

--------------------------------------------------------
###  setCommPreference --设置通讯配置

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let name="hg";
let httpUrlList = ["http://3.1.11.76:8867"];
let aarmUrlList = ["ws://127.0.0.1:51003/websocket"];
let msgUrlList = ["ws://127.0.0.1:51004/websocket"];
let result = await Client.setCommPreference(name,httpUrlList,aarmUrlList,msgUrlList);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| name | string | √ | oid名称 |
| httpUrlList | string | √ | aase的http的url |
| aarmUrlList | List | √ | aarm的websocket资源更新url |
| msgUrlList | List | √ | amessage的websocket消息推送url |

- 柜面渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 是否设置成功("true":成功;"false":失败) |

--------------------------------------------------------
###  getProperties --读取客户端配置

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let qualifier = "cn.com.agree.ab.a4.client.web";  
let key = "port"; 
let type = "String";  
let result = await Client.getProperties(qualifier,key,type);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| qualifier | string | √ | 插件标识前缀 |
| key | string | √ | 配置名称 |
| type | string | √ | 类型:Boolean,String,int,double,float,long |

- 柜面渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result |  | 读取到的内容 |

--------------------------------------------------------
###  closeSubscribe --关闭客户端事件订阅

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.closeSubscribe(()=>{
    TODO:do something to clean the cache
    Client.closeClient();
});
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| fun | function | √ | 关闭客户端方法(可以添加其他方法,例如清楚缓存) |

--------------------------------------------------------
###  setMinimized --最小化客户端

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.setMinimized();
```
--------------------------------------------------------
###  setMaxmized --最大化客户端

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.setMaxmized();
```
--------------------------------------------------------
###  closeSystem --关机操作

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.closeSystem();
```
--------------------------------------------------------
###  restartSystem --重启操作

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.restartSystem();
```
--------------------------------------------------------
###  getClientNowSystemTime --获取客户端当前系统时间

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let format = "yyyy-MM-dd"; 
let res = await Client.getClientNowSystemTime(format)
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| format | string | √ | 时间格式 |

- 柜面渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result |  | 获取的时间 |

--------------------------------------------------------
###  getClientFileLastModified --获取客户端文件最后修改时间

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = "D:\\test.txt"; 
let res = await Client.getClientFileLastModified(filePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 客户端文件地址 |

- 柜面渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result |  | 获取的时间 |

--------------------------------------------------------
###  openSysPage --打开客户端系统配置页面

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.openSysPage();
```
--------------------------------------------------------
###  setShellClosable --窗口关闭按钮是否可以关闭

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let ifClose = true;
let res = await Client.setShellClosable(ifClose);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| ifClose | boolean | √ | 是否关闭变量:true 可以关闭，false 不允许关闭 |

--------------------------------------------------------
###  startLockScreen --一段时间不操作界面跳转锁屏界面

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let time = 3; 
let res = await Client.startLockScreen(time);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| time | int | √ | 单位：秒 |

--------------------------------------------------------
###  stopLockScreen --停止锁屏计时

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await Client.stopLockScreen();
```
--------------------------------------------------------
###  clientToTop --霸屏

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let keepInTop = "true";  
let res = await Client.clientToTop(keepInTop);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| keepInTop | string | √ | 是否霸屏 true为霸屏 false为结束霸屏 |

--------------------------------------------------------
###  setSystemDate --设置系统时间

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let date = "2021-01-01"; 
let time = "12:00:00"
let res = await Client.setSystemDate(date,time);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| date | string | √ | 日期，日期格式 2021-03-08 |
| time | string | √ | 时间，时间格式 12:00:00 |

--------------------------------------------------------
###  getMultiProperties --获取多个配置

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let list = [];
let defaultTradePath = `cn.com.agree.ab.a5.client.gui.aui/defaultTradePath/String`;
let parentMsgUrl = `cn.com.agree.ab.a5.client.communication/parentMsgUrl/String`;
let accessKey = `cn.com.agree.ab.a5.client.communication/accessKey/String`;
let secretKey = `cn.com.agree.ab.a5.client.communication/secretKey/String`;
let mode = `Platform,MODE,String`;
list.push(defaultTradePath);
list.push(parentMsgUrl);
list.push(accessKey);
list.push(secretKey);
list.push(mode); 
let result = await Client.getMultiProperties(list);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| list | array\<string> | √ |  |

- 柜面渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res |  promise| 返回的多个配置 |

--------------------------------------------------------
###  getWindowInfo --获取设备屏幕的高度和宽度，ABC窗口的高度和宽度方法

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let result = await Client.getWindowInfo();
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |

- 柜面渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |

--------------------------------------------------------