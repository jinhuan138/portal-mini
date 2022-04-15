# ab-plugin-aft @前端AFT类组件

1.引入

```js
import { TENativeAft } from '@agree/ab-plugin-aft';
```

2.使用
###  printPreviewXmlString --xml打印预览

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let xmlString = `<xml?XXXXXX>`;  //打印xml入参
let res = await AFT.printPreviewXmlString(xmlString);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| xmlString| string | √   | x |打印xml字符串入参    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  预览页面的url  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.printPreviewXmlString(xmlString)</font>

--------------------------------------------------------
###  printWordPreview --word打印预览

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = "d://test.docx";  //word文件路径 
let res = await AFT.printWordPreview(path);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| path| string | √  | x |word文件路径    |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "true"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.printWordPreview(path)</font>

-------------------------------------------------------
###  printExcelPreview --excel打印预览

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = "d://test.xlsx"; //excel文件路径
let res = await AFT.printExcelPreview(path);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| path| string | √  | x | excel文件路径   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  "true"  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.printExcelPreview(path)</font>

-------------------------------------------------------
###  parseAft --解析aft文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = "www/test.aft";  //aft资源文件路径
let map = {
      account: "1,230.00",
      text: "test",
      namelist:[{
        name:'hg',
        sexual:'male',
        age:'29'
        },{
        name:'ly',
        sexual:'famle',
        age:'18'
        }],
      huangguan:['123','456'],
      male:['nan','nv','other']
    };   //映射mapping
let controlParam = {
      notRepeatPrintHeaderFooter: "6,10"
    };    //打印配置，详细请参考打印文件aft说明
let result = await AFT.parseAft(path, map, controlParam);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| path| string | √  | x | aft资源文件路径   |
| map| obj | √  | x | 映射mapping   |
| controlParam| obj | √  | x | 打印配置，详细请参考打印文件aft说明   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.transferContent    | string |  解析后的xml字符串  |
| res.totalHeight    | string |  解析后xml的高度  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.parseAft(path, map, controlParam)</font>

-------------------------------------------------------
###  parseMultiPageAft --解析循环打印文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = "/www/FCClient/print/1/T00401017.aft"; //aft资源文件路径
let map = {
         ORG_NUM:"12",
         ORG_NO:"34",
         PRT_DT:"2019-09",
         data:{
           //[序号，扣款日期，待报解账户，批次号，证件号码，姓名，扣款账号，扣款金额，扣款结果]
           "tablePrintSerach_Id":[
           ["1","20200518","371342289","23023"],
           ["2","20200519","222222223","234023"],
           ["3","20200511","2122222313","23423"],
           ["4","20200512","2132222122","23423"],
           ["5","20200513","213222222","23"],
           ["6","20200514","213222214","2023"],
           ["7","20200515","2132222412","234223"],
           ["8","20200516","212222342","2343"],
           ["9","20200516","212222342","2343"],
           ["0","20200516","212222342","2343"]
           ]
         }
      }; //映射mapping
let para = {
        //控制分页有两种参数
        // notRepeatPrintHeaderFooter: "6,10",
        TableRowNumOfPage:"34",
        TableColWidth:["30","30","30","30"],
      }; //打印配置，详细请参考打印文件aft说明
let prtRes = await AFT.parseMultiPageAft(path, map, para);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| path| string | √  | x | aft资源文件路径   |
| map| obj | √  | x | 映射mapping   |
| para| obj | √  | x | 打印配置，详细请参考打印文件aft说明   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | array |  解析后的xml字符串数组  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.parseMultiPageAft(path, map, para)</font>

-------------------------------------------------------
###  combineAndClipAft --拼接并分割已解析好的aft字符串，合并多个利用ParseAftCommandHandler解析出的Xml字符串.根据参数切割并返回可供打印的xml字符串List

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let aftXmls = this.prtlist; //解析好的aft字符串List 必输
let gaps = ["2","2","2"];  //合并时每页面之间域的间距List 必输
let insertElemMarginTop = "15";  //insertXml插入新页时距离顶部的偏移量 undefined时视作0
let insertElemMarginBottom = "5"; //insertXml插入新页时底部距离下一field的偏移量,insertXml为空时可视作页面顶部偏移量 必输
let insertXml = this.head;  //每次换页时在头部插入的aft Xml String,可以为null
let clipThreshold = "250";   //切割切割限制,合并时位置超出此高度的域会被加入下页的大小
let result = await AFT.combineAndClipAft(aftXmls, gaps, insertElemMarginTop, insertElemMarginBottom, insertXml, clipThreshold);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| aftXmls| list | √  | x | 解析好的aft字符串List   |
| gaps| list | √  | x | 合并时每页面之间域的间距List   |
| insertElemMarginTop| string | x  | x | insertXml插入新页时距离顶部的偏移量   |
| insertElemMarginBottom| string | √  | x | insertXml插入新页时底部距离下一field的偏移量   |
| insertXml| string | x  | x | 每次换页时在头部插入的aft   |
| clipThreshold| string | √  | x | 切割切割限制,合并时位置超出此高度的域会被加入下页的大小   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | array |  解析后的xml字符串数组  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.combineAndClipAft(aftXmls, gaps, insertElemMarginTop, insertElemMarginBottom, insertXml, clipThreshold)</font>

-------------------------------------------------------
###  combineAftWithHeadAndTail --拼接Aft包含头和尾

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let head =this.head;  //解析后的xml字符串
let tail =this.tail;  //解析后的xml字符串
let aftXmls = this.prtlist;  //解析后的xml字符串数组
let offsets = [["10", "0"], ["10", "0"], ["10", "0"]]; 
let pageTop = "10.0";
let pageBottom = "10.0";
let gap = "10.0";
let result = await AFT.combineAftWithHeadAndTail(aftXmls,head,tail,offsets,pageTop,pageBottom,gap);
```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| aftXmls| list | √  | x | 解析后的xml字符串数组   |
| head| string | √  | x | 解析后的xml字符串   |
| tail| string | √  | x | 解析后的xml字符串   |
| offsets| array | √  | x | insertXml插入新页时底部距离下一field的偏移量   |
| pageTop| string | √  | x | 距离头部的距离   |
| pageBottom| string | √  | x | 距离底部的距离  |
| gap| string | √  | x | 暂时未知   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | array |  解析后的xml字符串数组  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.combineAftWithHeadAndTail(aftXmls,head,tail,offsets,pageTop,pageBottom,gap)</font>

-------------------------------------------------------
###  combineAft --拼接Aft字符串

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let aftPaths =["/www/FCClient/print/1/T00401017.aft","/www/FCClient/print/1/T00401018.aft"]; //aft资源文件路径数组
let mapping ={ 
    ORG_NUM:"12",
    ORG_NO:"34",
    PRT_DT:"2019-09"}; //映射mapping
let controlParams ={ 
    //控制分页有两种参数
    // notRepeatPrintHeaderFooter: "6,10",
    TableRowNumOfPage:"34",
    TableColWidth:["30","30","30","30"]}; //打印配置，详细请参考打印文件aft说明
let bodyOffsetTop = "10";
let tailOffsetTop = "10";
let res = await AFT.combineAft(aftPaths,mapping,controlParams,bodyOffsetTop,tailOffsetTop);

```
- 参数列表:

| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| aftPaths| array | √  | x | aft资源文件路径数组   |
| mapping| map | √  | x | 映射mapping   |
| controlParams| map | √  | x | 打印配置，详细请参考打印文件aft说明   |
| bodyOffsetTop| string | √  | x | body距离头部的距离   |
| tailOffsetTop| string | √  | x | 底部到头部的距离   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  解析后的xml字符串  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.combineAft(aftPaths,mapping,controlParams,bodyOffsetTop,tailOffsetTop)</font>

-------------------------------------------------------
###  aftToPdf --aft转换为pdf （壳子无相应支持，勿调用！）

> <font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font>

```js
let aftPath ="D://test.aft";  //aft文件路径 相对路径      
let pdfPath ="D://test.pdf";  //pdf文件路径 绝对路径
let mapping = {ORG_NUM:"12",ORG_NO:"34",PRT_DT:"2019-09"}; //所有文本框的赋值
let controlParams ={ //控制分页有两种参数
        // notRepeatPrintHeaderFooter: "6,10",
        TableRowNumOfPage:"34",
        TableColWidth:["30","30","30","30"]}; //打印配置，详细请参考打印文件aft说明
let waterMarkName = ""; //水印值
let font = "";  //水印字体大小
let res = await AFT.aftToPdf(aftPath,pdfPath,mapping,controlParams,waterMarkName,font)
```
| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| aftPath| any | √  | x | aft文件路径   |
| pdfPath| any | √  | x | pdf文件路径   |
| mapping| any | √  | x | 所有文本框的赋值   |
| controlParams| any | √  | x | 打印配置，详细请参考打印文件aft说明   |
| waterMarkName| any | √  | x | 水印值   |
| font| any | √  | x | 水印字体大小   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  暂时未知  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.aftToPdf(aftPath,pdfPath,mapping,controlParams,waterMarkName,font)</font>

-------------------------------------------------------
###  looperAftToPdf --循环打印PDF（壳子无相应支持，勿调用！）

> <font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font>

```js
let aftPath ="D://test.aft";  //aft文件路径 相对路径      
let pdfPath ="D://test.pdf";  //pdf文件路径 绝对路径
let jointString ="";  //一页中aft的数量，false确认一页一个
let mapping = {ORG_NUM:"12",ORG_NO:"34",PRT_DT:"2019-09"}; //所有文本框的赋值
let controlParams ={ //控制分页有两种参数
        // notRepeatPrintHeaderFooter: "6,10",
        TableRowNumOfPage:"34",
        TableColWidth:["30","30","30","30"]}; //打印配置，详细请参考打印文件aft说明
let waterMarkName = ""; //水印值
let font = "";  //水印字体大小
let res = await AFT.looperAftToPdf(aftPath,pdfPath,jointString,mapping,controlParams,waterMarkName,font)
```
| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| aftPath| any | √  | x | aft文件路径   |
| pdfPath| any | √  | x | pdf文件路径   |
| jointString| any | √  | x | 一页中aft的数量，false确认一页一个   |
| mapping| any | √  | x | 所有文本框的赋值   |
| controlParams| any | √  | x | 打印配置，详细请参考打印文件aft说明   |
| waterMarkName| any | √  | x | 水印值   |
| font| any | √  | x | 水印字体大小   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  暂时未知  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.looperAftToPdf(aftPath,pdfPath,jointString,mapping,controlParams,waterMarkName,font)</font>

-------------------------------------------------------
###  selectDirector --选择文件夹目录（壳子无相应支持，勿调用！）

> <font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font>

```js
let mkdirOrGet = ""; //文件夹目录判断变量 mkdir 打开弹窗 get 返回路径
let result = await AFT.selectDirector(mkdirOrGet)
```
| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| mkdirOrGet| string | √  | x | 文件夹目录判断变量   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  暂时未知  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.selectDirector(mkdirOrGet)</font>

-------------------------------------------------------
###  concatAft --合并aft（壳子无相应支持，勿调用！）

> <font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font>

```js
let aftList =["/www/FCClient/print/1/T00401017.aft","/www/FCClient/print/1/T00401018.aft"];  //所有aft文件路径 相对路径
let pdfString ="D://test.pdf";  //pdf文件路径 绝对路径
let mapping = {ORG_NUM:"12",ORG_NO:"34",PRT_DT:"2019-09"}; //所以文本框的赋值 list<map>
let controlParams = { //控制分页有两种参数
        // notRepeatPrintHeaderFooter: "6,10",
        TableRowNumOfPage:"34",
        TableColWidth:["30","30","30","30"]}; //打印配置，详细请参考打印文件aft说明
let waterMarkName = "";  //水印值
let font = "";  //水印字体大小
let result = await AFT.concatAft(aftList,pdfString,mapping,controlParams,waterMarkName,font)
```
| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| aftList| list | √  | x | 所有aft文件路径   |
| pdfString| string | √  | x | pdf文件路径   |
| mapping| map | √  | x | 所有文本框的赋值   |
| controlParams| map | √  | x | 打印配置，详细请参考打印文件aft说明   |
| waterMarkName| string | √  | x | 水印值   |
| font| string | √  | x | 水印字体大小   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  暂时未知  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.concatAft(aftList,pdfString,mapping,controlParams,waterMarkName,font)</font>

-------------------------------------------------------
###  looperAddPicture --AFT中按需求添加图片（壳子无相应支持，勿调用！）

> <font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font>

```js
let aftPath = "D://test.aft"; //本体表单的aft路径，图片的aft路径
let pdfPath = "D://test.pdf"; //pdf文件路径 绝对路径
let mapping = {ORG_NUM:"12",ORG_NO:"34",PRT_DT:"2019-09"}; //所有文本框的赋值 list<map>
let ImgSrcKey = ""; //图片src的值
let controlParams = { //控制分页有两种参数
        // notRepeatPrintHeaderFooter: "6,10",
        TableRowNumOfPage:"34",
        TableColWidth:["30","30","30","30"]}; //Map<String, Object>
let waterMarkName = ""; //水印值
let font = ""; //水印字体大小
let result = await AFT.looperAddPicture(aftPath,pdfPath,mapping,ImgSrcKey,controlParams,waterMarkName,font)
```
| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| aftPath| list | √  | x | 本体表单的aft路径，图片的aft路径   |
| pdfPath| string | √  | x | pdf文件路径   |
| mapping| map | √  | x | 所有文本框的赋值   |
| ImgSrcKey| map | √  | x | 图片src的值   |
| controlParams| map | √  | x | 打印配置，详细请参考打印文件aft说明   |
| waterMarkName| string | √  | x | 水印值   |
| font| string | √  | x | 水印字体大小   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  暂时未知  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.looperAddPicture(aftPath,pdfPath,mapping,ImgSrcKey,controlParams,waterMarkName,font)</font>

-------------------------------------------------------
###  printTable --通用表格打印（不带线）

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let dataList = [
["柜员号", "身份证号码", "柜员类型", "库管员标志", "现金业务类型"],
["002001", "371481198303070032", "A", "N-否", "Y-是"],
["002002", "371481198303070032", "1-一般柜员", "Y-是", "Y-是"]
]; //表格数据
let encoding = "GBK"; //字符编码
let separator = "  ";  //单元要素分隔符
let columnLenList = ""; //单元格宽度List
let endWithSeparator = "*"; //结束符
let flushRight = true; //是否右对齐 是true 否false
let maxLength = 100; //单行最大长度
let data = "hello world"; //额外要素内容
let result = await AFT.printTable(dataList,encoding,separator,columnLenList,endWithSeparator,flushRight,maxLength,data);
```
| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| dataList| list | √  | x | 表格数据   |
| encoding| string | √  | x | 字符编码   |
| separator| string | √  | x | 单元要素分隔符   |
| columnLenList| string | √  | x | 单元格宽度List   |
| endWithSeparator| string | √  | x | 结束符   |
| flushRight| bollean | √  | x | 是否右对齐   |
| maxLength| number | √  | x | 单行最大长度   |
| data| string | √  | x | 额外要素内容   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | string |  解析后的xml字符串  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.printTable(dataList, encoding, separator, columnLenList, endWithSeparator, flushRight, maxLength, data)</font>

-------------------------------------------------------
###  printTableWithLine --通用表格打印（带线）

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = "www/table.aft"; //通用aft路径
let map = {
    TranNm: "我是表头!",
    _printDate_: "打印时间！",
    BrahNum: "打印机构！",
    PRT_CZY: "操作员",
    PRT_SQY: "授权员",
    PRT_FHY: "复核员"
    }; //数据映射关系
let data = [
    ["第一行第一列", "第一行第二列","第一行第三列","第一行第四列"],
    ["第二行第一列", "第二行第二列"]
    ]; //表格数据
let colWidth = 50; //单元格宽度
let controlParam = {
    TableColWidth: "true"
    }; //配置参数
let result = await AFT.printTableWithLine(path,map,data,colWidth,controlParam);
```
| 参数    | 类型   | 必填参数 |默认值 |说明    |
| ------- | ------ | ---|---|------------------ |
| path| list | √  | x | 通用aft路径   |
| map| string | √  | x | 数据映射关系   |
| data| string | √  | x | 表格数据   |
| colWidth| string | √  | x | 单元格宽度   |
| controlParam| string | √  | x | 配置参数   |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result    | array |  解析后的xml字符串数组  |

> <font color ='red' style="font-weight:bold">对应柜面原SDK: Printer.printTableWithLine(path,map,data,colWidth,controlParam)</font>

-------------------------------------------------------
