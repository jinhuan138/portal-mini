# ab-plugin-window 多窗口组件

1.引入

```js
import { WindowPage } from '@agree/ab-plugin-window';
```

2.使用

###  open -- 以新窗口的方式打开目标URL

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let url = "http://192.168.31.204:8080/#/";
    let name = "mySDK";
    WindowPage.open(url, name);
```

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| url     | string | √  | 新窗口加载的网页内容,可以在本地地址,如index.html |
| name    | string | √   | 新窗口的窗口名       |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.window.open()</font>

-------------------------------------------------
###  pop -- 关闭顶层窗口

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    WindowPage.pop();
```

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.window.pop()</font>
-------------------------------------------------------
###  sendMessage -- 向指定窗口发送自定义消息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let name = "mySDK"; 
    let message = "hello AB"; 
    WindowPage.sendMessage( name , message );
```

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| name    | string | √   | 目标窗口的窗口名    |
| message | string | √  | 向目标窗口要发送的消息 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.window.sendMessage()</font>

-------------------------------------------------------
###  getWindowStackSize -- 获取当前窗口栈的栈深度

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let size = await WindowPage.getWindowStackSize( );
```

- 移动渠道返回值: `number`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| size | number | 当前窗口栈的深度 |


> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.window.getWindowStackSize()</font>

-------------------------------------------------------

###  getCurrentWindow -- 获取当前窗口信息

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let currentWindow = await WindowPage.getCurrentWindow();
```

- 移动渠道返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| currentWindow.name | string | 窗口名 |
| currentWindow.url | string | 窗口装载的url |
| currentWindow.style | object | 缺省 |
| currentWindow.extras | object | 当前窗口接收的参数 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.window.getCurrentWindow()</font>

-------------------------------------------------------

###  closeWindow -- 关闭指定窗口

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let windowName = "";
    WindowPage.closeWindow( windowName );
```

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| windowName    | string | √   | 指定窗口的窗口名    |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.window.closeWindow()</font>

-------------------------------------------------------