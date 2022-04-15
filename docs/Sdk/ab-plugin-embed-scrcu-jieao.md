# ab-plugin-embed-scrcu-jieao@前端内嵌捷奥影像控件

## 1.引入

```js
import { JieaoExe } from "@agree/ab-plugin-embed-scrcu-jieao"
```

## 2.使用
###  init --发送内嵌请求初始化

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let initJson ={
    id:"JieaoExe",  //对应组件id
    displayMode: "",
    poolName: "",
    treeId: "",
    bizId: "",
    path: "",
    width: "",
    height: "",
    tellerNum: "",
    branchNum: "",
    tellerName: "",
    branchName: "",
}
let res = await JieaoExe.init(initJson);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| initJson| map | √   | x | 杰奥初始化参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  杰奥窗体的句柄值 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.init(initJson)</font>

--------------------------------------------------------
###  show --发送内嵌请求初始化显示界面，在init之后立刻执行

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = "JieaoExe";  //对应组件id
let result = await JieaoExe.show(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 对应组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  "showFinish" |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.show(id)</font>

-------------------------------------------------------
###  commit --提交

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = "";
let param = "";
let bizid = "";
let res = await JieaoExe.commit(id, param, bizid);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| map | √   | x | 对应组件id    |
| param| map | √   | x | 杰奥参数    |
| bizid| map | √   | x | 杰奥参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  返回信息 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.commit(id, param, bizid)</font>

--------------------------------------------------------
###  showImage --影像调阅

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = "JieaoExe";  //对应组件id
let paramJson = {};
let result = await JieaoExe.showImage(id,paramJson);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 对应组件id    |
| paramJson| map | √   | x | 杰奥参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  返回信息 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.showImage(id,paramJson)</font>

-------------------------------------------------------
###  finish --执行销毁捷奥影像exe，关闭窗体

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = "JieaoExe";  //对应组件id
let res = await JieaoExe.finish(id);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 对应组件id    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  返回信息 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.finish(id)</font>

--------------------------------------------------------
###  base64encode --对字符串以Base64编码

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let src = "";  //字符串
let result = await JieaoExe.base64encode(src);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| src| string | √   | x | 字符串    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  返回信息 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.base64encode(src)</font>

-------------------------------------------------------
###  base64decode --解码Base64字符串

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let src = "";  //字符串
let res = await JieaoExe.base64decode(src);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| src| string | √   | x | 字符串    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  返回信息 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.base64decode(src)</font>

--------------------------------------------------------
###  bizCopy --批次拷贝

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = "JieaoExe";  ////对应组件id
let srcbizid = "";
let srccode = "";
let destbizid = "";
let destcode = "";
let result = await JieaoExe.bizCopy(id, srcbizid, srccode, destbizid, destcode);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 对应组件id    |
| srcbizid| string | √   | x | 杰奥参数    |
| srccode| string | √   | x | 杰奥参数    |
| destbizid| string | √   | x | 杰奥参数    |
| destcode| string | √   | x | 杰奥参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  返回信息 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.bizCopy(id, srcbizid, srccode, destbizid, destcode)</font>

-------------------------------------------------------
###  extrafile --添加图片

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let id = "JieaoExe";  ////对应组件id
let bizid = "";
let code = "";
let Type = "";
let data = "";
let res = await JieaoExe.extrafile(id, bizid, code, Type, data);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| id| string | √   | x | 对应组件id    |
| bizid| string | √   | x | 杰奥参数    |
| code| string | √   | x | 杰奥参数    |
| Type| string | √   | x | 杰奥参数    |
| data| string | √   | x | 杰奥参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |
| res.msg    | string |  返回信息 |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.extrafile(id, bizid, code, Type, data)</font>

--------------------------------------------------------