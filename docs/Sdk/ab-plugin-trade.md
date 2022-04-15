# ab-plugin-trade@ab5内嵌ab3交易专属

1.引入

```js
import { AB3Trade } from "@agree/ab-plugin-trade";
```
2.事件方法的使用

1.打开并内嵌ab3交易(body为ab3专属交易报文;x,y为内嵌坐标;width、height为打开交易大小;parentTitle为内嵌父窗体)。
```js
   AB3Trade.getInstance().openTrade(body: any, x: number, y: number, width: number, height: number, parentTitle?: String);
```
2.同步ab5柜员信息到ab3
```js
   AB3Trade.getInstance().tellerInfo(body: any); 
```
3.内嵌窗体
```js
   AB3Trade.getInstance(). embedTrade(body: any, x: number, y: number, width: number, height: number, parentTitle?: String); 
```
4.关闭ab3交易。
```js
   AB3Trade.getInstance(). closeTrade(body: any); 
```
5.截图并返回base64字符串。
```js
   AB3Trade.getInstance(). screenShoot(x: number, y: number, width: number, height: number): String; 
```
6.隐藏或显示ab3交易。
```js
   AB3Trade.getInstance().hideOrShowTrade(body: any);
```
7.linux版本锁屏。
```js
   AB3Trade.getInstance().startLockScreen(time: number); 
```
8.结束锁屏。
```js
   AB3Trade.getInstance().stopLockScreen(); 
```