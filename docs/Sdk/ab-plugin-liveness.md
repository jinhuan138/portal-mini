# ab-plugin-liveness 活体检测插件

1.引入

```js
import { Liveness } from '@agree/ab-plugin-liveness';
```

2.使用

###  init -- 开启活体检测.检测完毕后可自动关闭

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let isFullScreen: true;
    let pointX: 200;
    let pointY: 100;
    let frameWidth: 300;
    let frameHeight: 300;
    let volume: 0.5;
    let ret = await Liveness.init(isFullScreen,pointX,pointY,frameWidth,frameHeight,volume);
    console.error(ret);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| isFullScreen     | boolean | √  | 是否全屏 |
| pointX    | number | √   | 非全屏时,左上角坐标点       |
| pointY    | number | √   | 非全屏时,左上角坐标点       |
| frameWidth    | number | √   | 非全屏时的长宽       |
| frameHeight    | number | √   | 非全屏时的长宽       |
| volume    | number | √   | 语音音量 0~1     |

- 返回值: `LivenessResult`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.path    | string |  活体识别的最佳图片路径  |
| res.verificationDataPath    | string |  验证数据的文件路径  |
| res.state    | string |  结果, 成功为success  |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.olive.init()</font>

-------------------------------------------------
###  remove -- 关闭活体检测

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
    let ret = await Liveness.remove();
    console.error(ret); // 返回true
```
- 返回值: `boolean`

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.olive.remove()</font>
-------------------------------------------------------
