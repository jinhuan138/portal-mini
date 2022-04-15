# ab-manager-service@服务管理

管理页面调用的服务，包括向服务器发送请求以及外设调用。

## 1. 引入并初始化

```js
import { ServiceManager } from '@agree/ab-manager-service'

let services = [{
        desc: '登录请求',
        name: 'login',
        url: '/login',
        baseURL: 'http://187.0.0.1:8087',
        type: 'post',
        customParam: (...args) => args,
        customConfig: (...args) => args
    },{
        desc: '关于',
        name: 'about',
        url: '/about',
        type: 'post',
    }],
    errorHandle = (error) => {},
    config = {
        baseURL: 'http://127.0.0.1:8087',
        headers: {
            atoken: 'sdklglglknlnlmd='
        }
    };

let serviceManager = new ServiceManager({ services, errorHandle, config });
```

## 2. 发送请求：

```js
serviceManager.getService(serviceName[, parameter, config]).then(res => {
    // 回调函数
});
```
 
> 数组中参数可省略，当 `customParam` 和 `customConfig` 不存在时，传递的参数就是最终的传参结果。当 `customParam` 和 `customConfig` 存在时，两个参数分别对应 `customParam` 和 `customConfig` 中自定的方法的入参，最终传参结果为两个自定义函数的返回值

## 3. 自定义形式

> 如果配置config属性，config中的baseURL会覆盖原有的baseURL。baseURL 的优先级是 config 参数的 baseURL > 单个 service 的 baseURL > new 时传递的总的 baseURL

### 3.1 自定义参数形式(customParam)

如果设置customParam属性，表示自定义参数形式，最终的参数类型就是customParam函数的返回值。

例3 —— 自定义参数形式：

```js
serviceManager.getService('login', {name: 'Jack', age: 20}).then(res => {
    // 回调函数
});
```

```js
customParam: function(param) {
    param.height = 180;
    return param;
}
```

最终传参为：

```js
{
    name: "Jack",
    age: 20,
    height: 180
}
```

### 3.2 自定义config形式(customConfig)

如果设置customConfig属性，表示自定义config形式，最终的config类型就是customConfig函数的返回值。

例3 —— 自定义config形式：

```js
serviceManager.getService('login', {name: 'Jack', age: 20}, {headers:{"X-AmebaCloud-Token":""}}).then(res => {
    // 回调函数
});
```

```js
customConfig: function(config) {
    config.timeout = 15000;
    return config;
}
```

最终传参为：

```js
{
    headers: {"X-AmebaCloud-Token":""},
    timeout: 15000
}
```

## 4. 错误处理

errorHandle 参数接收一个错误处理函数，请求失败时会被调用。也可以在拦截器里处理。

## 5. 拦截器

可定义请求/响应拦截器

```js
// 注册请求拦截器
serviceManager.interceptors.request((state, arg) => {
    if(state === 'success') {
        // do something
        return arg;
    }
    if(state === 'error') {
        // do something
        return Promise.reject(arg);
    }
});

// 注册响应拦截器
serviceManager.interceptors.response((state, arg) => {
    if(state === 'success') {
        // do something
        return arg;
    }
    if(state === 'error') {
        // do something
        return Promise.reject(arg);
    }
});
```

## 参数结构

**构造函数参数对象**
| 参数 | 类型 | 说明 |
|-------|-------|-------|
| services | Array | 服务描述对象数组 |
| errorHandle | Function | 错误处理函数 |
| config | Object | 配置信息 |

**service 对象**
| 参数 | 类型 | 说明 |
|-------|-------|-------|
| desc | string | 请求描述 |
| type | string | 请求类型 |
| name | string | 定义的服务名称 |
| url | string | 请求路径 |
| baseURL(可选) | string | 请求路径的 baseURL |
| customParam(可选) | function | 自定义参数的方法 |
| customConfig(可选) | function | 自定义配置的方法 |

**getService参数**
| 参数 | 类型 | 说明 |
|-------|-------|-------|
| serviceName | string | 服务名称 |
| parameter | — | 请求中的参数 |
| config | — | 服务配置 |

**interceptors参数**
| 参数 | 类型 | 可选值 | 说明 |
|-------|-------|-------|-------|
| state | string | 'error','success' | 当前拦截器所在操作状态 |
| arg | — | — | state为success时，request拦截器为其配置，response拦截器为相应结果 \n state为error时，表示错误信息 |