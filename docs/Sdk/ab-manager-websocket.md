# ab-manager-websocket@websocket连接
## 1. 引入
```js
import { WebsocketManager } from '@agree/ab-manager-websocket';
```
## 2. 事件使用说明
```js
    let WebsocketManager = new WebsocketManager({
        url: "ws:xxxx",
        id: "oid_1",
        data: {
            app: '',
            branch: '',
            corporation: ''
        }
    });
```

> 连接建立时触发
```js
    WebsocketManager.onopen = function () {
        // todo
    }
```
> 通信发生错误时触发
```js
    WebsocketManager.onerror = function (e) {
        console.log(`onerror: ${e}`);
    }
```
> 客户端接收服务端数据时触发
```js
    WebsocketManager.onmessage = function (e) {
        console.log(`onmessage: ${e.data}`);
    }
```
> 连接关闭时触发
```js
    WebsocketManager.onclose = function (e) {
        console.log('close...');
    }
```
> 发生重连触发
```js
    WebsocketManager.onreconnect = function () {
        console.log('reconnecting...');
    }
```
## 3. 方法使用说明
> send 发送消息
```js
    WebsocketManager.send({
        scope: '',
        destId: '',
        branch: '',
        app: '',
        content: ''
    });
```
> close 关闭连接
```js
    WebsocketManager.close('hello server');
```
## 4. 使用案例
```js
import { WebsocketManager } from "ab-manager-websocket"
export default {
name: "HelloWorld",
data() {
    return {
    ws: undefined
    };
},
mounted() {
    this.ws = new WebsocketManager({
        url:"ws://127.0.0.1:50010/ws/broadcast",
        id: "oid_1",
        data: {
            app: 'app1',
            branch: 'boss1',
            corporation: 'agree' // 法人
        }
    });
```
> **WebsocketManager Attributes**

| 参数               |                 说明                 |     类型      |   默认值    |   可选值    |
| ------------------ | :----------------------------------: | :-----------: | :---------: | :---------: |
| url                |         websocket服务端接口          |    string     |      -      |      -      |
| id                 |        websocket连接唯一标识         | string/number |      -      |      -      |
| pingTimeOut        |       每隔15秒发送一次心跳请求       |    number     |    15000    |      -      |
| pongTimeOut        | 10秒内没收到后端消息便会认为连接断开 |    number     |    10000    |      -      |
| reconnectTimeOut   |          尝试重连的间隔时间          |    number     |    2000     |      -      |
| pingMsg            |             ping消息内容             |    string     | "heartbeat" | "heartbeat" |
| forbidReconnect    |           是否禁止重连操作           |    boolean    |    true     |      -      |
| data               |                 消息                 |    DataObj    |      -      |      -      |
| reconnectFrequency |               重连次数               |    number     |      -      |      5      |


> **WebsocketManager Events**

| 事件名      |            说明            | 参数  |
| ----------- | :------------------------: | :---: |
| onopen      |       连接建立时触发       | event |
| onerror     |     通信发生错误时触发     | event |
| onmessage   | 客户端接收服务端数据时触发 | event |
| onclose     |       连接关闭时触发       | event |
| onreconnect |        发生重连触发        | event |

> **WebsocketManager Methods**

| 方法名 |   说明   |    参数    |
| ------ | :------: | :--------: |
| send   | 发送消息 | 消息的内容 |
| close  | 关闭连接 |     -      |

> **DataObj**

| 属性名       | 说明 |
| ------------ | ---- |
| app          | -    |
| branch       | -    |
| corporation  | -    |
| [key:string] | -    |
