# ab-manager-burypoint@埋点调试

用于调试交易、panel、lfc、aui组件、通讯的埋点数据。

## 1.引入
```js
// main.js
import { BurypointManager, event } from "@agree/ab-manager-burypoint"
let burypointManager = new BurypointManager()
Vue.use(burypointManager)
```

## 2. 更新/设置callback：
# 方式一：
```js
  Vue.use(burypointManager,{
    callback:function(res){
      //todo...
    }
  })
```
# 方式二：
```js
  // callbackRegister函数的参数为一个函数，成为新的回调函数
  burypointManager.callbackRegister(function(res){
    //todo...
  })
```

## 3. 埋点标识
```js
event.$emit('burypoint',{type:'OPENTRADE',url,tradeId}) 
```
# 参数

| 参数 | 类型 | 说明 |
| -------- | --- | --- |
| url | string | 路径 |
| tradeId | string | 交易id |


# type 可选值

| 类型 | 说明 |
| -------- | --- |
| OPENTRADE | 添加交易埋点 |
| OPENPANEL | 添加panel埋点 |
| OPENLFC | 添加LFC埋点 |
| EXITTRADE | 退出交易埋点 |
| EXITPANEL | 退出panel埋点 |
| EXITLFC | 退出LFC埋点 |





