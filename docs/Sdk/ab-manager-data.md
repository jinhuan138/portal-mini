# ab-manager-data@交易数据模型

## 0. 依赖
```javascript
"vuex": "^3.2.0",
"@agree/ab-manager-database": "^2.0.0",
"@agree/ab-manager-context": "^2.0.0"
```

## 1. 引入
```javascript
import {
    VuexManager,
    DataManager,
    DataMixin
} from '@agree/ab-manager-data';
```
## 2.使用



### 2.1 初始化

#### 2.1.1 使用vuex
ab-manager-data管理的数据储存在vuex中，如果项目使用了vuex并创建了store，需要将store设置到VuexManager中。

**该操作必须在`Vue.use(DataManager,options)`之前。**

```javascript
let store = new Vuex.Store({
    strict: false //store不推荐使用strict模式
})
VuexManager.getInstance().setStore(store);
```
#### 2.1.2 使用DataManager
调用`Vue.use(DataManager,options)`使用DataManager。
DataManager此时会做初始化相关操作，分为以下几个步骤

- 初始化DataModel

DataModel会在当前VuexManager管理的store中注册模块`_dataModels`
- 初始化SharedDataModel

SharedDataModel会在当前VuexManager管理的store中注册模块`_sharedDataModels`并注册配置中配置的sharedDataModels。例如_sharedDataModel.AdvertInfo
- 初始化LocalData 

LocalData在IndexDB中创建数据库`LocalData`，数据表`localData`

- 挂载metadata合并策略

配置Vue.config.optionMergeStrategies.metadata 合并mixin中的metadata


#### 2.1.3 DataManager options配置
- **sizeLimit**

每次设值数据大小限制，例如当使用`this.dm.testKey = {a:"1"}`设置数据时，会估算设置的对象大小。当大小超过配置的值时，**不允许设值**并在控制台报**警告**。
sizelimit中sdm指SharedDataModel，dm指DataModel。单位是字节。默认为1024字节也就是1k

```javascript
sizeLimit: {
    sdm: 2048,
    dm: 4096,
    localData: 2400000
}
```

- **sharedDataModels**

配置SharedDataModel中key值，**不允许**在交易中使用this.sdm.xxx来添加一个key值，需要提前配置好所有需要的key。
```javascript
sharedDataModels: ['AdvertInfo', 'AppInfo', 'BranchInfo', 'DeviceInfo', 'LegalInfo', 'MenuInfo', 'UserInfo', 'VirtualTellerInfo', 'QueueInfo']
```

- **SDMToSessionStorageList**

sdm可以配置将某些key储存的对象储存在SessionStorage中，来保证刷新页面不会丢失数据。配置的key必须在`sharedDataModels`中存在

```javascript
SDMToSessionStorageList: ['UserInfo', 'BranchInfo']
```

```javascript
//初始化DataManager示例代码
Vue.use(DataManager, {
  sizeLimit: {
    sdm: 2048,
    dm: 4096,
    localData: 2400000
  },
  sharedDataModels: ['AdvertInfo', 'AppInfo', 'BranchInfo', 'DeviceInfo', 'LegalInfo', 'MenuInfo', 'UserInfo', 'VirtualTellerInfo', 'QueueInfo'],
  SDMToSessionStorageList: ['UserInfo', 'BranchInfo']
})
```

#### 2.1.4 SharedDataModel初始化赋值

sdm规定需要初始化各个key中的字段。在运行时**不允许**设置未初始化的值，即不允许添加、删除key中的字段。

```javascript
//实体类初始化sdm
let advertInfo = new AdvertInfo();
DataManager.initSharedDataModel("AdvertInfo", advertInfo);
```

#### 2.1.5 初始化完整实例代码

```javascript
import {
  VuexManager,
  DataManager
} from '@agree/ab-manager-data';

let store = new Vuex.Store({
})
VuexManager.getInstance().setStore(store);
Vue.use(DataManager, {
  sizeLimit: {
    sdm: 2048,
    dm: 4096,
    localData: 2400000
  },
  sharedDataModels: ['AdvertInfo', 'AppInfo', 'BranchInfo', 'DeviceInfo', 'LegalInfo', 'MenuInfo', 'UserInfo', 'VirtualTellerInfo', 'QueueInfo'],
  SDMToSessionStorageList: ['UserInfo', 'BranchInfo']
})
//简单对象初始化sdm
DataManager.initSharedDataModel('AdvertInfo', {
  name: "lihua",
  srr: {
    no: "1",
    add: false
  }
});
```



### 2.2 交易中使用



#### 2.2.1 交易Vue页面

```javascript
import {
    DataMixin
} from '@agree/ab-manager-data';
```

交易Vue页面引入并混入`DataMixin`

#### 2.2.2 DataModel

DataModel指在交易中共享的数据，可以跨多个vue页面来访问同一个响应式数据。这些数据区使用_tradeId来标识。vue中可以通过访问Vuex的方式来查看所有数据：

```javascript
this.$store.state._dataModels.${_tradeId}._data
```

也可以通过this.dm获取_data对象

```javascript
this.dm.getDataModelObject()
```

Vue实例中访问DataModel的方式为`this.dm`，该属性是`DataMixin`在`beforeMount`生命周期挂载到vue的this上的。



##### 权限控制

DataModel使用vue对象中定义的`metadata`来做权限控制，只有在该对象中定义的key才能被赋值到DataModel中，但是不影响读取dm中的值。例如

```javascript
export default {
  metadata: {
    globalArgs: {
      isLimitAge: { desc: "是否年龄限制" },
      ageLimit: { desc: "年龄限制", default: "16" },
      IfContinue: { desc: "客户信息不存在是否继续办理", default: "1" },
      AllowAgent: { desc: "是否允许代理", default: "1" },
    },
  data() {
    return {
      src: ""
    }
  },
  mounted() {
    console.log(this);
  }
}
```

其中`metadata:{globalArgs:{}}`为固定结构。globalArgs中定义的key指可用来赋值的key。如果key对应的value中配置了default字段，则对应DataModel中该字段使用该值作为**默认值**。

如果设置了未在metadata中定义的值，则**控制台会报出警告**，且**赋值失败**



##### 取值/赋值

直接使用this.dm.xxx来取值，例如上面的例子

```javascript
console.log(this.dm.ageLimit) // 16
```

也可以绑定到dom中

```javascript
<fc-input label="年龄限制" v-model="dm.ageLimit" ref="custom-input_ctfNum"></fc-input>
```

直接赋值

```javascript
this.dm.ageLimit = "22"
```

**注意**

当value为对象时，例如

```javascript
this.dm.info={ name:"abc",age:"22" }
```

此时对dm.info赋值没有问题，但是这种情况时

```javascript
this.dm.info.age = "21"
```

此时如果vuex创建的store 严格模式开启的情况下会报错，因为这相当于直接修改了vuex的值。并不是vuex推荐的使用commit来修改值

##### 删除key

dm不允许删除存在的key，但是可以将该key设置为undefined，这样当下一次页面初始化时，会将metadata中定义默认值赋到该key上

```javascript
this.dm.info = undefined
```

#### 2.2.3 SharedDataModel

SharedDataModel指在应用中共享的数据，可以跨多个vue页面来访问同一个响应式数据。所有Vue页面公用一个数据区。可以通过vuex的方式来访问

```javascript
this.$store.state._sharedDataModel.${sdmKey}._data
```

Vue实例中访问SharedDataModel的方式为`this.sdm`，该属性是`DataMixin`在`beforeMount`生命周期挂载到vue的this上的。



##### 权限控制

在Vue页面中，使用该Vue页面的dm值`canSetSDM`来判断是否可以赋值。只有在该值为true时才可以进行sdm赋值。

```javascript
this.dm.canSetSDM = true //设置canSetSDM
```

**注意canSetSDM不需要在metadata中定义，可以直接修改。dm不关心该字段的权限**



##### 取值赋值

直接使用this.sdm取值。例如初始化时定义的sdm

```javascript
console.log(this.sdm.AdvertInfo.name) //lihua
```

也可以绑定到dom中

```javascript
<fc-input label="名称" v-model="sdm.AdvertInfo.name" ></fc-input>
```

**注意**

当sdm.sdmKey为对象时，例如

```javascript
this.sdm.AdvertInfo = {
    no: "1",
    add: false
 }
```

此时对sdm.AdvertInfo赋值没有问题，但是这种情况时

```javascript
this.sdm.AdvertInfo.add = true
```

此时如果vuex创建的store 严格模式开启的情况下会报错，因为这相当于直接修改了vuex的值。并不是vuex推荐的使用commit来修改值



##### 删除

sdm不允许删除某值，如果需要清空sdm，可以找到对应的实体类进行重新赋值，例如

```javascript
//实体类初始化sdm
let advertInfo = new AdvertInfo();
this.sdm.AdvertInfo = advertInfo;
```


##### 重置SDM
可以通过$resetSDM重置某个已经存在的sdm,例如
```javascript
this.$resetSDM("AdvertInfo")
```
该方法会将AdvertInfo中所有key对应的value设置为undefined。
如果需要重新初始化默认值，可以通过
```javascript
this.$resetSDM("AdvertInfo",new AdvertInfo());
```
该方法会将AdvertInfo中所有的key、value覆盖为传入的第二个参数对象


##### 同步SessionStorage 

sdm支持将某些sdmkey同步到SessionStorage中。通过**SDMToSessionStorageList**进行配置。

当向sdm赋值时，如果该sdmKey配置了需要同步SessionStorage，则同时会向SessionStorage同步一下数据。

在SharedDataModel初始化时，会先检查SessionStorage是否保存了对应sdmkey的数据，如果保存了数据，则从SessionStorage同步回sdm，即vuex。

此时后续的初始化操作**不会生效且会报警告**该sdmkey已经被初始化。



#### 2.2.4 LocalData

LocalData指存储在IndexDB中的数据，当使用LocalData存储时，所有的数据都存储在IndexDB中，可以通过调式工具查看。

**取值赋值**

```javascript
this.localData.abc = "123"
console.log(this.localData.abc) // "123"
```



#### 2.2.5 ab-manager-data对交易的定义

当Vue页面混入`DataMixin`后，DataMixin在`beforeMount`生命周期首先判断该实例是否存在`this._tradeId`，

- 如果`this._tradeId`不存在

  不存在`this._tradeId`则认为该Vue为新的交易，创建新的tardeId并赋值到`this._tradeId`。创建新的dm区域来存放交易数据。

- 如果`this._tradeId`存在

  存在`this._tradeId`则认为该Vue不是新交易，不需要创建新的dm区域，使用`this._tradeId`对应的dm区域来共享交易数据。


交易子页面或子组件想要使用`this.dm`等数据共享时

1. 子页面或子组件先引入`DataMixin`
2. 通过传值方式将`_tradeId`传递给子页面或子组件，用于标识属于同一只交易
3. 在子页面或子组件上挂载`this._tradeId`
4. 子页面或子页面即可使用`this.dm`、`this.sdm`访问对应数据

> 柜面上独有交易的开发，由于使用了ab-manager-trade，不需要关心_tradeId传递的问题

## 3. DataMixin API

| api                | 参数                                 | 说明                                                         |
| ------------------ | ------------------------------------ | ------------------------------------------------------------ |
| $removeLocalData   | key: String 必传                     | 根据入参key删除对应的localdata                               |
| $resetSDM          | key: String 必传<br />data: any 可选 | 重置key对应的sdm，当不传data时，将对应sdm所有值设置为undefined，当传data时，将对应sdm设置为data |
| $getDmKey          |                                      | 获取当前vue对应dm的所有key                                   |
| $getDmObject       |                                      | 获取当前vue对应dm对象的复制对象                              |
| $getSdmObject | key: String 必传                     | 获取key对应的sdm对象的复制对象                                   |
| $createShadowSDM |                                     | 创建sdm数据隔离区，该交易所有vue访问的sdm都指向该区域 |
| $initShadowSDM | sdmKey: string 必传<br />data: any 可选 | 初始化sdm隔离区数据，与普通sdm初始化相同             |
| $deleteShadowSDM |                                      | 删除sdm数据隔离区，DataMixin destroyed生命周期调用                              |
