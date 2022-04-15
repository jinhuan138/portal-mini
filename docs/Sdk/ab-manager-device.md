# ab-manager-device@外设调用及配置

## 1. 引入

```js
import { DeviceManager } from "@agree/ab-manager-device"
```

## 2. 使用

> **获取外设配置信息**

```js
    DeviceManager.getDeviceList({
        url: "http://xxx/req/devicelist"
    }).then(res=>{
        //todo
    });
```
> **获取全部设备配置**

```js
    DeviceManager.getAllDevConfig({
        url: "http://xxx/req/devconfig"
    }).then(res=>{
        //todo
    });
```
> **保存全部设备配置**

```js
    DeviceManager.saveAllDevConfig({
        url: "http://xxx/req/devconfig",
        params: "外设的配置数据"
    }).then(res=>{
        //todo
    });
```

> **获取指定设备配置**

```js
    DeviceManager.getDevConfig({
        url: "http://xxx/req/devconfig",
        params: "指定的设备"
    }).then(res=>{
        //todo
    });
```
> **保存指定设备配置**

```js
    DeviceManager.saveDevConfig({
        url: "http://xxx/req/devconfig",
        params: "指定的设备"
    }).then(res=>{
        //todo
    });
```
> **获取系统硬件端口**

```js
    DeviceManager.getAllHardWare({
        url: "http://xxx/req/hardware"
    }).then(res=>{
        //todo
    });
```
> **关闭外设服务**

```js
    DeviceManager.shutDown({
        url: "http://xxx/req/shutdown"
    }).then(res=>{
        //todo
    });
```
> **解除设备占用**

```js
    DeviceManager.deoccupy({
        url: "http://xxx/req/shutdown",
        params: ""
    }).then(res=>{
        //todo
    });
```
> **获取设备状态**

```js
    DeviceManager.getAllDevStatus({
        url: "http://xxx/req/shutdown"
    }).then(res=>{
        //todo
    });
```
**调用外设**

```js
DeviceManager.getDevice({
    url: "外设的IP"
    devType: "外设类型",
    printArg: "打印的数据",
    devParams: "ADS外设调用的参数"
}).then(res => {
    // todo
});
```

**全屏打印**
```js
// 全屏打印 没有回调方法
DeviceManager.getDevice({
    devType: "printTradePage",
})

```

> **DeviceManager Events**

|事件|说明|参数|
|------|:------:|:-----:|
|getDeviceList|获取外设列表|url:url地址|
|getAllDevConfig|获取全部设备配置|url:url地址|
|saveAllDevConfig|保存全部设备配置|url:url地址|
|getDevConfig|获取指定设备配置|url:url地址,params:指定的设备|
|saveDevConfig|保存指定设备配置|url:url地址,params:指定的设备配置|
|getAllHardWare|获取系统硬件端口|url:url地址|
|shutDown|关闭外设服务|url:url地址|
|deoccupy|解除设备占用|url:url地址,params:不传解除所有外设,传值->解除指定外设|
|getAllDevStatus|获取设备状态|url:url地址|
|getDevice|调用外设|devType:设备类型;printArg:调用打印外设所需参数,icParam:调用刷卡器所需参数|


getDevice 参数说明
|参数|说明|默认|
|---|---|---|
|url|调用外设的 URL|null|
|devType|外设列表中name字段的值，(特殊全屏打印为printTradePage)|-|
|devParams|ads 外设调用的配置(具体的查看ads的外设配置)|`{
        Id: "",
        Method: "Test",
        Args: "{}",
        ReadTimeout: 20,
        WriteTimeout: 20,
        Key: "",
        IsOccupy: "0",
        ListenPort: ""
    }`|
|printArg|xml字符串，打印数据|-|
