# ab-manager-trade@交易管理--柜面特有

交易注入平台方法，

## 1. 引入

```
import {
  TradeManager,
  Panel
} from "@agree/ab-manager-trade"
Vue.use(TradeManager);

new Vue({
    el: "#app",
    store: store,
    render: h => h(TradeManager.createApp(App), {
        props: {
            _panel: new Panel('App',undefined),
            panelActive: true
        }
    }),
});
```
## 2.方法

| 方法          |      说明      | 参数 |
| ------------- | :------------: | :--: |
|$getTradeImportVar|获取交易入参||
|$putTradeExportVar|设置交易出参|exportVar:any 交易出参对象|
|$getPanelImportVar|获取画面入参||
|$putPanelExportVar|设置画面出参|exportVar:any 交易出参对象|
|$getTargetId|获取当前交易打开targetId||
|$dm|交易数据区||
|$syncOpenTrade|同步打开交易|url:string 交易vue路径,例'@/module/trade/test/test01.vue', title:string 交易签页名称, targetId:string 交易打开位置, importVar:any 交易入参, exportVar:any 交易出参|
|$asyncOpenTrade|异步打开交易|url:string 交易vue路径,例'@/module/trade/test/test01.vue', title:string 交易签页名称, targetId:string 交易打开位置, importVar:any 交易入参|
|$openPanel|打开画面|url:string 交易vue路径,例'@/module/trade/test/test01.vue', title:string 画面签页名称, targetId:string 画面打开位置|
|$exitTrade|退出交易||
|$exitPanel|退出面板||
|$sendMessage|发送消息|path：string 交易画面路径，data:any 消息对象|

## 3.使用
### Panel

----

Panel是展示交易的主要容器，需要初始化获取Id，用于后面打开交易时确定交易展示位置

```javascript
/**
* 	@param host 交易根对象，可通过this.getHost()或this.$a.guiView获取
* 	@param name string 该panel的自定义名称
* 	@returns {panelId: string}
*/
panel.initTarget(host,name);
1、如果指定了name，则panelId与name相同
```

#### MultiplePanel

多面板容器。封装tabs组件，通过签页的方式打开或关闭交易

- 初始化

  ```javascript
  <multiple-panel ref="multiple-panel">
  </multiple-panel>
  
  this.panelId = this.$refs['multiple-panel'].initTarget(this.$getHost(),"myMultiplePanel");
  ```

- 关闭交易

  点击签页上的`x`关闭签页时，会通知交易。交易在vue中定义`onClose`方法，当该方法返回`true`时，交易关闭。否则不做操作。

#### BookPanel

多面板容器，与MultiPlePanel相比没有签页栏。
**BookPanel**打开交易后不会自动切换显示，需要打开交易后changePanel

- 初始化

  ```javascript
  <book-panel ref="bookPanel"></book-panel>
  this.bookPanel = this.$refs.bookPanel.initTarget(this.$getHost(),'bookPanel');
  ```

- 切换显示交易

  ```javascript
  //此处title为打开交易时的title
  this.$refs.bookPanel.changePanel(title);
  ```

#### SinglePanel

单面板容器，没有签页栏，没有切换交易操作

- 初始化	

  ```javascript
  <single-panel ref="singlePanel"></single-panel>
  this.$refs.singlePanel.initTarget(this.$getHost(),'singlePanel');
  ```

#### WindowPanel

- 初始化

  ```javascript
  //注册WindowPanel的panelId为'window'
  this.$a.guiView.putTradePanel('window',this.$windowPanel);
  ```

### 交易操作

----

#### 打开交易

##### 异步打开交易

```javascript
/**
* 
* @param url 交易vue路径
* @param title 交易签页标题
* @param targetId 交易打开位置
* @param importVar 交易入参
* @param options 交易可配属性
	{showClose: {
      type: Boolean,
      default: true,
    },
    showMinus: {
      type: Boolean,
      default: true,
    },
    showMax: {
      type: Boolean,
      default: true,
    },
    width:{
      type: String
    },
    height:{
      type: String
    },
    fullscreen:{
      type: Boolean
    }
    }
*            
*/
$asyncOpenTrade(url, title, targetId, importVar, options)

//例
this.$asyncOpenTrade("@/components/bank/basic/trade-panel/InternalService.vue",'internal-service',this.panelId,{message:'imputTest'},{showClose:false});
```

##### 同步打开交易

```javascript
/**
* 
* @param url 交易vue路径
* @param title 交易签页标题
* @param targetId 交易打开位置
* @param importVar 交易入参
* @param options 交易可配属性
* @return promise 交易返回出参  
*/
$syncOpenTrade(url, title, targetId, importVar, options)

//例子
let result = await this.$syncOpenTrade('@/modules/Test/Test02.vue','test02',this.$getTargetId(),{ tradeName: 'test02' },null)

1、$syncOpenTrade返回promise对象，当同步打开的交易结束并关闭后，返回交易出参。
2、同步打开的交易使用`this.$putExportVar({'result':'Test02_success'})`设置交易出参
```

##### 打开面板

```javascript
/**
* 
* @param url 交易vue路径
* @param title 交易签页标题
* @param targetId 交易打开位置
* @param options 交易可配属性
 * @param importVar 画面入参
* @return promise 交易返回出参  
*/
$openPanel(url, title, targetId, importVar, options) 

//例子
await this.$openPanel('@/modules/Test/Test02.vue', 'test02', this.$getTargetId())

1、打开面板与打开交易不同在于被打开的面板与打开的交易公用数据区
```

##### 打开交易在WindowPanel上

```javascript
//例子
let result = await this.$syncOpenTrade('@/modules/Test/Test02.vue','test02',this.$getTargetId(),{ tradeName: 'test02' },null,{showClose:true,showMinus:false})
```

#### 退出交易

##### 退出交易

```
$exitTrade()

//例
this.$exitTrade();
```

##### 退出画面

````
// 入参panel可不传，默认为退出当前画面，退出其他画面需要指定DomainPanel
$exitPanel(panel)

//例
this.$exitPanel();
````

#### 消息

##### 发送消息

```javascript
/**
* @param url vue路径
* @param message 消息
*/
$sendMessage(url,message)

//例
this.$sendMessage('@/modules/Test/Test02.vue',{message:"test message"});
```

##### 接收消息

```javascript
交易在vue中定义方法
onCommonMessage(message)
onMessage(message)

//例
onCommonMessage(data){console.log('onCommonMessage',data)}
onMessage(data){console.log('onMessage',data)}
```
