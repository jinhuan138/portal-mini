# ab-logger@日志管理

目前分为`FrameLogger`和`TradeLogger`两种，移动端目前只支持`TradeLogger`。

- FrameLogger为框架级别日志
- TradeLogger为交易级别日志

### 日志级别

| 参数    |  数值   | 说明               |
| ------- | ------ | -------------- |
| fatal   |   1    | 致命 |
| debug   |   2    | 调试 |
| info    |   3    | 提示       |
| warn    |   4    | 警告       |
| error   |   5    | 错误       |

### 使用说明

#### 引入依赖

1、前端引入相应依赖

```js
import { FrameLogger } from "@agree/ab-logger" // FrameLogger为框架级别日志
import { TradeLogger } from "@agree/ab-logger" // TradeLogger为交易级别日志
```

2、移动基座引入相应插件

[点击查看引入文档](http://192.168.180.26:50150/third-api/alog.html) 

### 接口调用

日志格式示例：
```javascript
`[20210408 10:37:40.010][C][12345678][0000][00]INFO Thread-38 ConsoleNativeLogger:write - register finish`
```
**格式**：
`[时间][C][tradeId][serviceId][stepId]日志级别 线程名 业务类型:执行动作 - 日志内容`

`[20210408 10:37:40.010]`：时间，21位，格式按照yyyyMMdd HH:mm:ss.SSS格式；

`[C]`：端标识，1位，C端使用`[C]`，S端使用`[S]`；

`[tradeId]`：16位（暂定），交易id，正常情况下由C端生成。消息推送等S端发起的场景由S端生成，不重复；

`[serviceId]`：4位，通讯id，每个交易从0开始，客户端每次发送通讯时加1，收到响应当次id按服务端返回的报文中id记录到日志；

`[stepId]`：2位，客户端每次发送通讯时从0开始，服务端每跳转一个节点加1，如abc调用abs1，abs1调用abs2，则abc发送时为00，收到时为02。

1、写入info信息或者/fatal/debug/warn信息

**TradeLogger.info(message, args1, args2);**

- message: 日志的相关描述信息，例如上面的示例：`[tradeId][serviceId][stepId]`表示这部分内容，会写入到日志文件对应的格式中;
- args1：表示日志的真正内容，会写到每一条日志的末尾;
- args2：多参数设定，通args1一样。

```javascript
async logInfo() {
      let args = [];
      args.push("测试1");
      args.push("测试2");
      let demo = { head: { user: "liming" }, info: { detail: "liming" } };
      args.push(demo);
      let message = "[12345678][0000][00]";
      TradeLogger.info(message, args, "1433223");
      TradeLogger.fatal(message, args, "1433223");
      TradeLogger.debug(message, args, "1433223");
      TradeLogger.warn(message, args, "1433223");
}
```

2、写入error信息

接口说明：

TradeLogger.error(message, args1, args2);

参数说明同info接口。

```javascript
let message = "[12345678][0000][00]";
TradeLogger.error(message, "this is error");
TradeLogger.error(message, new Error("this is error"), "1433223");
```

3、刷新日志（移动端调用，可正常调用，PC端为空实现）

将缓存中的日志内容刷新到日志文件中。

```javascript
TradeLogger.flush();
```

4、发送日志到服务端(目前只移动端支持,包版本>=2.0.11)

TradeLogger.send(url, unionId, date, headers);

- url: 上传的文件接口
- unionId: 用户ID
- date对应的日志文件日期，格式`yyyy-MM-dd`
- headers发送的自定义请求头，与服务端对应

[点击查看详细说明](http://192.168.180.26:50150/third-api/alog.html#版本管理) 

示例如下：

```javascript
async send() {
  let url = "http://192.168.187.136:50002/alog/native/create";
  //let url = "http://192.9.200.101:8000/alog/native/create";
  let unionId = "tellerR100";
  let date = "2021-08-05";
  let branchId = "AgreeR100";
  let headers = {
    "branchId":"AgreeR100",
    "relativePath": `${branchId}/${unionId}/${date}` // 定义相对路径，/home/abs/relativePath/20210805152530.log, /home/abs/AgreeR100/tellerR100/20210805152530.log
  }
  try{
        let ret = await TradeLogger.send(url, unionId, date, headers);
        console.log("上传成功："+JSON.stringify(ret))
      }catch (e) {
        console.log("上传失败：" + JSON.stringify(e))
      }
  }
```

