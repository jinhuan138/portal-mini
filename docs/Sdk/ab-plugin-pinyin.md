# ab-plugin-pinyin @拼音相关内容

1.引入

```js
import { Pinyin } from '@agree/ab-plugin-pinyin';
```

2.使用

###  stringToPinYin --汉字到字母转换

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let input = "赞同科技";  
let type = 3; 
let separator = "-"; 
let res = await Pinyin.stringToPinYin(input, type, separator);
```

- 参数列表: 

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| input | string | √ | 汉字内容 |
| type | number | √ | 0--小写全拼 1--小写首字母 2--首字母大写 3--全拼字母大写 |
| separator | string | √ | 分隔符 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 转换的结果 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.moneynameconvert.name2Pinyin()</font>
-------------------------------------------------------
