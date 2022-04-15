# ab-plugin-customize 自定义组件

自定义组件允许通过规范的参数, 调用任意原生端方法.

## 引入

```js
import {
  Customize,
  RequestMsgBuilder,
  RequestMsg,
} from "../@agree/ab-sdk/ab-plugin-customize";
```

* `Customize`: 组件调用接口
* `RequestMsg`: 组件接口的参数
* `RequestMsgBuilder`: 参数`RequestMsg`的建造者类

## 使用

###  Customize.callAsync -- 以异步方式调用接口
###  Customize.call -- 以同异步方式调用接口

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道.柜面端不区分同异步,对柜面端来说,两个方法完全等效</font>
> 

```js
    // 构造移动端参数
    let mobileArgs = {
        groupID: "Device",
        functionID: "getDeviceInfo",
        args: {},
    }; 

    // 构造柜面端参数
    let tellerArgs = {
        type: "GetClientIp",
        uuid: StringManager.createUUID(),
        "" : ""
    }; 
    
    // 通过RequestMsgBuilder构建RequestMsg请求体
    let requestMsg:RequestMsg = new RequestMsgBuilder()
    .buildMobileArgs(mobileArgs)
    .buildTellerArgs(tellerArgs)
    .build();

    // 返回值处理函数
    let resolver = (res)=>{
        return OsManager.isMobile? res.ipAddress : res
    };

    // 发起参数调用  
    let result = await Customize.call("", requestMsg ,resolver);
    console.log(result);  // 输出本机IP 192.168.0.103
```

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| eventType     | `string` | √  | 方法调用的事件类型[柜面端有效] |
| requestMsg    | `RequestMsg` | √   | 请求参数包装类       |
| argResolver   | `Function` | ×   | 返回值处理器       |

- RequestMsg: 请求参数包装类

- RequestMsgBuilder: 请求参数建造者.

1. `buildMobileArgs(obj:Object): RequestMsgBuilder` : 构造移动端参数,默认为空

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| groupID     | `string` | √  | 移动端方法组 (对应`feature name="Device"`中name的值) |
| functionID    | `string` | √   | 移动端方法,对应插件中java方法的方法名   |
| args   | Object / Array  | ×   | 方法参数   |

```js
    // 构造移动端Device模块下getDeviceInfo方法
    let mobileArgs = {
        groupID: "Device",
        functionID: "getDeviceInfo",
        args: {},
    }; 
    buildMobileArgs(mobileArgs);
```
2. `buildTellerArgs(obj:Object): RequestMsgBuilder` : 构造柜面端参数,默认为空

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| type    | `string` | √   | 柜面方法的方法名   |
| uuid    | `string` | √   | 方法UUID ,随机生成  |
| ?   | any  | ×   | 方法的剩余参数   |

3. `build(): RequestMsg` 完成RequestMsg的构造

-------------------------------------------------
