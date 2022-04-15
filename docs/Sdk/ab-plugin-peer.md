# ab-plugin-peer@通讯组件

1.引入

```js
import { WSPeer } from "@agree/ab-plugin-peer";
```
2.事件方法的使用

1.初始化peer通讯单元。
```js
const context = {
                name: "ab5web",
                url: "ws://127.0.0.1:" + Hub.port,
            };
let peer = new WSPeer(context);
```
2.发送同步消息（有返回值）。
```js
const exchangeReq = {
            to: "ab3",//发送给谁
            command: "openTrade",//路由名称
            body: body//通讯报文(json)
        };
peer.exchangeAsync(exchangeReq).then()
```
3.发送异步消息。
```js
const exchangeReq = {
            to: "ab3",//发送给谁
            command: "openTrade",//路由名称
            body: body//通讯报文(json)
        };
peer.sendAsync(exchangeReq)
```
4.注册路由。
```js
this.peer.registerCommand("路由名称", (args: any) => {
    return null;
});
```
