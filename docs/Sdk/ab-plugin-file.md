# ab-plugin-file@文件操作类

1.引入

```js
import { File } from "@agree/ab-plugin-file";
```

2.使用

###  获取客户端跟路径

> <font color ='green' style="font-weight:bold">支持移动渠道</font>

```js
// 外置存储卡的根路径  file:///storage/emulated/0
let externalRootDirectory = File.externalRootDirectory; 

// app缓存路径 file:///storage/emulated/0/Android/data/<appId>/cache
let cacheDirectory = File.cacheDirectory; 

// app私有目录路径 file:///storage/emulated/0/Android/data/<appId>/files
let workspaceDirectory = File.workspaceDirectory; 

// app资产目录路径(只读)  file:///android_asset/
let assetsDirectory = File.assetsDirectory; 

```

> <font color ='green' style="font-weight:bold">对应移动原SDK:
AgreeSDK.file.xxx
 </font>

----------------------------------------------------

###  readClientFile --读取客户端文件

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = "d://a.txt"; 
let encoding = "gbk"; 
let offset = 0; 
let size = -1; 
let res = await File.readClientFile(filePath, encoding, offset,size);
```

- 参数列表:

| 参数    | 类型   | 必填参数 | 参数差异 | 说明    | 
| ------- | ------ | ---|------|------------ |
| filePath | string | √ |  -----| 文件路径 |
| encoding | boolstringean | √ | -----| 例"gbk" |
| offset | number | √ | <font color='green'>移动端可缺省</font> |偏移量 0(不偏移) |
| size | number | √ | <font color='green'>移动端可缺省</font> |读取量 -1(全部读取) |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.resultArray | string | 读取结果 |

> <font color ='green' style="font-weight:bold">对应移动原SDK:
let fileReader = new AgreeSDK.file.FileReader();
fileReader.readAsText()
 </font>

----------------------------------------------------
###  clientDirCreate --创建深度遍历客户端文件夹

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = "d://a"; 
let res = await File.clientDirCreate(filePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 文件夹绝对路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 'true':创建成功;'false':创建失败 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.file.mkdirSync()</font>

----------------------------------------------------
###  clientFileCreate --创建客户端文件

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = "d://a.txt"; 
let res = await File.clientFileCreate(filePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 文件路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| clientFileCreate | boolean | true:创建成功;false:创建失败 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.file.createFile() </font>

----------------------------------------------------
###  clientFileDelete --删除客户端文件

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = "d://a.txt"; 
let res = await File.clientFileDelete(filePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 文件路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| clientFileDelete | boolean | true:删除成功;false:删除失败 |

> <font color ='green' style="font-weight:bold">对应移动原SDK:  AgreeSDK.file.deleteFile()</font>

----------------------------------------------------
###  isFileExist --文件是否存在

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = "d://a.txt";
let res = await File.isFileExist(path);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| path | string | √ | 文件路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| clientFileExist | object | 文件是否存在结果对象 |

> <font color ='green' style="font-weight:bold">对应移动原SDK:  AgreeSDK.file.isFileExist</font>

----------------------------------------------------
###  clientFileIsDir -- 判断当前路径是否为文件夹

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = "d://a.txt"; 
let res = await File.clientFileIsDir(filePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 文件路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":是;"false":否 |

----------------------------------------------------
###  getFileLength -- 获取文件大小

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let path = "d://a.txt"; 
let unitType="M";
let res = await File.getFileLength(path,unitType);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |参数差异 |说明    |
| ------- | ------ | ---|------|------------ |
| path | string | √ | --- |文件路径 |
| unitType | string | √ | <font color='green'>移动端不支持</font> |类型 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.size | string | "0.0"(文件大小结果) |

> <font color ='green' style="font-weight:bold">对应移动原SDK:  AgreeSDK.file.getFileInfo</font>

----------------------------------------------------
###  clientFileReadLines --柜面自有：按行读取客户端文件

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = "d://a.txt";
let startLines=1;
let endLines=2;
let res = await File.clientFileReadLines(filePath, startLines, endLines);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 文件路径 |
| startLines | int | √ | 首行行数 |
| endLines | int | √ | 最后一行行数 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.clientFileCreate | string | 读取结果 |

----------------------------------------------------
###  clientFileRename --客户端文件重命名

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let oldName = "d://a.txt"; 
let newName= "d://b.txt";
let res = await File.clientFileRename(oldName, newName);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| oldName | string | √ | 旧客户端文件全路径 |
| newName | string | √ | 新客户端文件全路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.clientFileRename | boolean | true:成功;false:失败 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.file.rename()</font>

----------------------------------------------------
###  clientFilesGetList --获取文件列表

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath = "d://a.txt"; 
let fileTypes = [".3gp",".mp4",".txt"];
let res = await File.clientFilesGetList(filePath, fileTypes);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 文件路径 |
| fileTypes | string | √ | 获取文件格式 |

- 返回值: `list`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| obj | object | 例:{"name":"Config.xml","size":176,"path":"file:///emulated/0/amap/Config.xml"} |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.file.getFilesFromDirectory()</font>
----------------------------------------------------
###  downloadFile --文件下载

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let remotePath = "http://127.0.0.1/a.txt"; 
let localPath= "d://b";
let fileName= "b.txt";
let serviceName= "";
let legalNum="";
let res = await File.downloadFile(remotePath, localPath, serviceName, fileName);

// 移动端测试案例
let remotePath = "/home/abs/abs_ocu/file/upload/test.png"; 
let localPath= "/storage/emulated/0/Android";
let fileName= "test222.png";
let serviceName= "http://192.9.200.111:53122/downService/downloadFile";
let res = await File.downloadFile(remotePath, localPath, serviceName, fileName);

```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| remotePath | string | √ | 服务端文件地址 |
| localPath | string | √ | 本地文件地址 |
| fileName | string | √ | 文件名称 |
| serviceName | string | √ | 服务端名称 (移动端需传完整的url) |
| legalNum | string | x | 柜员号 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| downloadFile | boolean | 是否下载成功 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.ft.downloadFile() </font>
----------------------------------------------------
###  getClientFileAsSavePath --柜面自有:获取客户端打开文件路径

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let fileTypesList = ["*.jpeg","*.txt","*.doc"]; 
let behavior= "open";
let fileName= "test.txt";
let filterPath= "D://";
let res = await File.getClientFileAsSavePath(fileTypesList, behavior, fileName, filterPath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| fileTypesList | list | √ | 支持打开文件的类型 默认不传值可以打开全部类型文件 |
| behavior | string | √ | 模态对话框打开样式 默认为open |
| fileName | string | √ | 文件名称 |
| filterPath | string | √ | 文件路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.path | string | 路径结果 |

----------------------------------------------------
###  listToExcel -- 柜面自有：导出表格

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let data = [
           ["1","name","sexual","age"],
           ["2","huangguan","male","30"],
           ["3","liudexin","male","29"]
         ]; 
let excelFilePath= "D://test.xls";
let head= "";
let sheetName= "sheet1";
let fontSize= 10;
let fontName= "宋体";
let FontColor= 'black';
let backgroundColor= -1;
let res = await File.listToExcel(data, excelFilePath, head, sheetName,fontSize,fontName,FontColor,backgroundColor);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| data | list | √ | list格式data |
| excelFilePath | string | √ | excel导出文件路径 |
| head | string | √ | 头部 |
| sheetName | string | x | 内部sheet名称,非必输 |
| fontSize | number | x | 字体大小,非必输 |
| fontName | string | x | 字体名称,非必输 |
| FontColor | string | x | FontColor,非必输 |
| backgroundColor | string | x | 背景颜色,非必输 |

- 返回值: ``

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功 |

----------------------------------------------------
###  pdfToTxt -- pdf转txt

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let pdfPath= "D:\\dq\\hg.pdf";
let txtPath= "D:\\dq\\hg.txt";
let encoding= "UTF-8";
let res = await File.pdfToTxt(pdfPath, txtPath, encoding);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| pdfPath | string | √ | pdf文件绝对路径 |
| txtPath | string | √ | txt文件绝对路径 |
| encoding | string | √ | 编码，默认为UTF-8 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功 |

----------------------------------------------------
###  readClientExcel -- 读取客户端excel

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let excelPath= "C:/a.xls";
let index= 1;
let res = await File.readClientExcel(excelPath, index);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| excelPath | string | √ | excel文件绝对路径 |
| index | number | √ | sheet index(例:index=1从1开始) |

- 返回值: ``

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | "true":成功 |

----------------------------------------------------
###  readClientFileBase64 -- 读取客户端文件，返回base64字符串

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath= "C:/test.log";
let res = await File.readClientFileBase64(filePath);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 文件路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.Base64Str | string | 例"MjEzMzMzMzMzMzMz"(base64字符串) |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.file.fileToBase64</font>
----------------------------------------------------
###  uploadFile -- 更新客户端文件

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let localPath= "/storage/emulated/0/Android/test.png";
let remotePath= "/home/abs/abs_ocu/file/upload/";
let serviceName= "http://192.9.200.111:53122/upService/uploadFile";
let res = await File.uploadFile(localPath, remotePath, serviceName);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| localPath | string | √ | 本地路径 |
| remotePath | string | √ | 远程路径 |
| serviceName | string | √ | 服务器名 |
| isAbsolutePath | boolean | √ | 是否绝对路径 |
| override | boolean | √ | 是否覆盖已有文件 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 是否更新成功 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.ft.uploadFile</font>
----------------------------------------------------
###  wordToTxt --  word转txt

> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let wordPath= "D:\\dq\\hg.doc";
let txtPath= "D:\\dq\\hg.txt";;
let encoding= "UTF-8";
let res = await File.wordToTxt(wordPath, txtPath, encoding);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| wordPath | string | √ | word文件绝对路径 |
| txtPath | string | √ | txt文件绝对路径 |
| encoding | string | √ | 编码，默认为UTF-8 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 文本内容 |

----------------------------------------------------
###  writeClientFile --  写客户端文件

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let filePath= "D:\\dq\\hg.doc";
let content= "hello";;
let append= "true";
let res = await File.writeClientFile(filePath, content, append);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| filePath | string | √ | 文件路径 |
| content | string | √ | 写入文件的内容 |
| append | string | √ | 是否追加写入 |
| encoding | string | - | 编码格式 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.clientFileWrite | boolean | 写入结果 |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.file.createFile()</font>
----------------------------------------------------
###  clientFileCopy --  复制客户端文件

> <font color ='green' style="font-weight:bold">支持移动渠道</font>
> <font color ='red' style="font-weight:bold">支持柜面渠道</font>

```js
let sourceFile= "D:\\dq\\hg.doc";
let destinationFile= "D:\\dq\\test.doc";
let res = await File.clientFileCopy(sourceFile, destinationFile);
```

- 参数列表:

| 参数    | 类型   | 必填参数 |说明    |
| ------- | ------ | ---|------------------ |
| sourceFile | string | √ | 原文件全路径 |
| destinationFile | string | √ | 文件全路径 |

- 返回值: `Object`

| 参数    | 类型   | 说明    |
| ------- | ------ |------------------ |
| res.result | string | 复制结果("true":成功;"false":失败) |

> <font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.file.copyFile() </font>
---------------------------------------------------