# ab-plugin-embed-scrcu-oleie@前端内嵌捷oleie

1.引入

```js
import { ScrcuOleIe } from "@agree/ab-plugin-embed-scrcu-oleie"
```
2.使用
###  init --发送内嵌请求初始化

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="oleie";//当前内嵌组件id
let res = await ScrcuOleIe.init(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  OieIE窗体的句柄值 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.init(id)</font>

----------------------------------------------------
###  setUrl --设置ie浏览器地址

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="oleie";//id
let url='http://www.baidu.com/';
let res = await ScrcuOleIe.setUrl(id,url);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |
| url| string | √   | x | 要设置的url    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.setUrl(id,url)</font>

----------------------------------------------------
###  execute --执行浏览器脚本

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="oleie";//id
let script = `document.getElementById('username').value='${
            this.username
            }';document.getElementById('userTypePwd').value='${
            this.password}';`;
let res = await ScrcuOleIe.execute(id,script);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |
| script| string | √   | x | 脚本字符串命令    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.execute(id,script)</font>

----------------------------------------------------
###  finish --执行销毁浏览器 注意：不允许在vue beforeDestroy中使用

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="oleie";//id
let res = await ScrcuOleIe.finish(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.finish(id)</font>

----------------------------------------------------
###  delayFinish -- 延时执行销毁浏览器 注意：不允许在vue beforeDestroy中使用

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="oleie";//id
let delayTime= 100;//延时时间(毫秒)
let res = await ScrcuOleIe.delayFinish(id,delayTime);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |
| delayTime| string | √   | x | 延时时间(毫秒)    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.delayFinish(id,delayTime)</font>

----------------------------------------------------
###  setValue --为浏览器中某个dom对象设置值

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="oleie";//id
let componentId = 'input_name';//浏览器内操作dom元素的id
let value = 'huangguan';//浏览器内操作dom元素的value值
let res = await ScrcuOleIe.setValue(componentId,id,value);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| componentId| string | √   | x | 浏览器内操作dom元素的id    |
| id| string | √   | x | 当前内嵌组件id    |
| value| string | √   | x | 浏览器内操作dom元素的value值    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.setValue(componentId,id,value)</font>

----------------------------------------------------
###  submit --浏览器中提交表单

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="oleie";//id
let formName="login";//浏览器内操作表单的dom元素名称
let res = await ScrcuOleIe.submit(id,formName);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |
| formName| string | √   | x | 浏览器内操作表单的dom元素名称    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.submit(id,formName)</font>

----------------------------------------------------
###  submitById --根据浏览器中提交表单提交按钮dom-id来触发表单提交

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="oleie";//id
let formId="button_login";//浏览器内操作表单的dom元素Id
let res = await ScrcuOleIe.submitById(id,formId);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |
| formId| string | √   | x | 浏览器内操作表单的dom元素Id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.submitById(id,formId)</font>

----------------------------------------------------
###  doLogin -- 触发浏览器登陆操作

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="oleie";//id
let url="https://mail.agree.com.cn";//登录url地址
let res = await ScrcuOleIe.doLogin(id,url);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |
| url| string | √   | x | 登录url地址    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.doLogin(id,url)</font>

----------------------------------------------------
###  doLogout --触发浏览器登出操作

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="oleie";//id
let url="https://mail.agree.com.cn";//登录url地址
let res = await ScrcuOleIe.doLogout(id,url);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |
| url| string | √   | x | 登录url地址    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.doLogout(id,url)</font>

----------------------------------------------------
###  getHtml --获取某个指定内嵌浏览器的全部html(返回的为html的Base64串)

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id="oleie";//id
let res = await ScrcuOleIe.getHtml(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 当前内嵌组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.htmlScript    | string |  html的Base64字符串 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.getHtml(id)</font>

----------------------------------------------------
