# ab-plugin-embed-xinwanjia@前端内嵌鑫万佳控件

1.引入

```js
import { XinWanJia } from '@agree/ab-plugin-embed-xinwanjia';
```
2.使用
###  scannerInit --图像采集模块初始化

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await XinWanJia.scannerInit();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.res    | string |  "success"  |
| res.handler    | string |  窗口句柄值  |

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  scannerFunBinaryImg --图像二值化处理，黑白图像

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let json = {
                SRCIMAGE: 'D:/abc_sit/sealImage/12.jpg', // 未加密图片的原路径
                DESIMAGE: 'D:/abc_sit/sealImage/122222.jpg', //处理后的图像，与源图像一致时覆盖原来的图像
                VALUE: 200, //黑白阈值0-255，0使用默认
            };
let res = await XinWanJia.scannerFunBinaryImg(JSON.stringify(json));
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| inParam| string | √   | x | 调用控件的参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  调用控件接口返回信息  |

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  scannerFunImgZomm --图片缩放

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let json = {
                SRCIMAGE: 'D:/abc_sit/sealImage/12.jpg', //源图像
                DESIMAGE: 'D:/abc_sit/sealImage/12suofang.jpg', //处理后的图像。与源图像一致时覆盖原来的图像
                SRCDPI: 50, //源图像dpi
                DESDPI: 20, //缩放后图像dpi
            };
let res = await XinWanJia.scannerFunImgZomm(JSON.stringify(json));
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| inParam| string | √   | x | 调用控件的参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  调用控件接口返回信息  |

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  scannerFunRotateImg --图像旋转

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let json = {
                SRCIMAGE: 'D:/abc_sit/sealImage/12.jpg', //源图像
                DESIMAGE: 'D:/abc_sit/sealImage/12zhuan90.jpg', //处理后的图像。与源图像一致时覆盖原来的图像
                ANGLE: 90, //旋转角度，90、180、270
            };
let res = await XinWanJia.scannerFunRotateImg(JSON.stringify(json));
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| inParam| string | √   | x | 调用控件的参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  调用控件接口返回信息  |

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  scannerFunScanDlgCreateWnd --创建窗口

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let json = {};
let inParam = JSON.stringify(json);
let res = await XinWanJia.scannerFunScanDlgCreateWnd(inParam);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| inParam| string | √   | x | 调用控件的参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  调用控件接口返回信息  |

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  scannerFunScanDlgDestroyWnd -- 销毁窗口

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let json = JSON.stringify({});
let res = await XinWanJia.scannerFunScanDlgDestroyWnd(json);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| inParam| string | √   | x | 调用控件的参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  调用控件接口返回信息  |

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  scannerFunScanDlgInitDev --选择采集设备

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let json = {
                DEVTYPE: 1,
            };
let inParam = JSON.stringify(json);
let res = await XinWanJia.scannerFunScanDlgInitDev(inParam);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| inParam| string | √   | x | 调用控件的参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  调用控件接口返回信息  |

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  scannerFunScanDlgRotateImage --窗口上图像进行旋转

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let json = {
                ANGLE: 90, //90右， 180翻， 270左
                ENCRYPT: 1,
                SRCFILE: 'D:/abc_sit/sealImage/1en.jpg',
            };
let res = await XinWanJia.scannerFunScanDlgRotateImage(JSON.stringify(json));
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| inParam| string | √   | x | 调用控件的参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  调用控件接口返回信息  |

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  scannerFunScanDlgStartPreview --鑫万佳设备打开预览

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await XinWanJia.scannerFunScanDlgStartPreview(JSON.stringify({}));
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| inParam| string | √   | x | 调用控件的参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  调用控件接口返回信息  |

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  scannerFunScanDlgStopPreview --鑫万佳设备关闭预览

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let json = {};
let res = await XinWanJia.scannerFunScanDlgStopPreview(JSON.stringify(json));
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| inParam| string | √   | x | 调用控件的参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  调用控件接口返回信息|  

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  scannerFunScanDlgImgPick --采集图片

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let json = {
                IMGFULLPATH: 'D:/abc_sit/sealImage/1en.jpg',
                ENCRYPT: 1,
            };
let res = await XinWanJia.scannerFunScanDlgImgPick(JSON.stringify(json));
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| inParam| string | √   | x | 调用控件的参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  调用控件接口返回信息|  

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  scannerFinish --图像采集模块销毁

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await XinWanJia.scannerFinish();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| inParam| string | √   | x | 调用控件的参数    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  调用控件接口返回信息| 

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------


###  xwjYanyinInit --验印模块初始化

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let res = await XinWanJia.xwjYanyinInit();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.res    | string |  "success"  |
| res.handler    | string |  窗口句柄值  |

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  xwjAutoVerify --自动验印

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let szAccNo = '100000220390010007';
let szBrNo = '350100011';
let szOpenBrNo = '350100011';
let szOper = '031100';
let szVouNo = '9999888877777141';
let szVouType = '1002';
let szVouDate = '20210729';
let szImgPath = 'D:/abc_sit/sealImage/1en.jpg';
let dVouAmt = '13123.00';
let nVerifyType = '3';
let result = await XinWanJia.xwjAutoVerify(
                szAccNo,
                szBrNo,
                szOpenBrNo,
                szOper,
                szVouNo,
                szVouType,
                szVouDate,
                szImgPath,
                dVouAmt,
                nVerifyType
);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| szAccNo | string | √   | x | 账号 |
| szBrNo | string | √   | x | 交易机构号 |
| szOpenBrNo | string | √   | x | 开户机构 |
| szOper | string | √   | x | 柜员号 |
| szVouNo | string | √   | x | 凭证号码  |
| szVouType | string | √   | x | 凭证类型  |
| szVouDate | string | √   | x | 凭证日期  |
| szImgPath | string | √   | x | 全路径图像  |
| dVouAmt | string | √   | x | 金额 |
| nVerifyType | string | √   | x | 验印类型（0公章/1全图像 验印） |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| result.result    | string |  调用控件接口返回信息| 

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  xwjManualVerify --手动验印

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let szAccNo = '100000220390010007';
let szBrNo = '350100011';
let szOpenBrNo = '350100011';
let szOper = '031100';
let szVouNo = '9999888877777141';
let szVouType = '1002';
let szVouDate = '20210729';
let szImgPath = 'D:/abc_sit/sealImage/1en.jpg';
let dVouAmt = '13123.00';
let nVerifyType = '3';
let result = await XinWanJia.xwjManualVerify(
                szAccNo,
                szBrNo,
                szOpenBrNo,
                szOper,
                szVouNo,
                szVouType,
                szVouDate,
                szImgPath,
                dVouAmt,
                nVerifyType
);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| szAccNo | string | √   | x | 账号 |
| szBrNo | string | √   | x | 交易机构号 |
| szOpenBrNo | string | √   | x | 开户机构 |
| szOper | string | √   | x | 柜员号 |
| szVouNo | string | √   | x | 凭证号码  |
| szVouType | string | √   | x | 凭证类型  |
| szVouDate | string | √   | x | 凭证日期  |
| szImgPath | string | √   | x | 全路径图像  |
| dVouAmt | string | √   | x | 金额 |
| nVerifyType | string | √   | x | 验印类型（0公章/1全图像 验印） |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| result.result    | string |  调用控件接口返回信息| 

> <font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.init(id)</font>

----------------------------------------------------
###  checkNetCallFile --检查ABC根目录/driver/xwj集成环境目录下netcall.ini配置文件是否存在并根据参数修改配置的地址和端口是否正确

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let ip = '10.136.7.16';
let port = '7710';
let result = await XinWanJia.checkNetCallFile(ip, port);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| ip | string | √   | x | IP地址 |
| port | string | √   | x | 端口号 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| result.result    | string |  调用控件接口返回信息| 

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
###  finish --验印模块销毁

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let result = await XinWanJia.finish();
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "success"  |

> <font color ='red' style="font-weight:bold">无</font>

----------------------------------------------------
