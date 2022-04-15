# ab-manager-store@数据管理

## 初始化 storeManager

### **store.js**（例）

```js
  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)

  const store = new Vuex.Store({
    state() {
      return {
        currentTrade: '', // 打开的交易信息
        a: {
          b: ""
        }
      }
    },
    getters: {
      getCurrentTrade: (state) => {
        return state.currentTrade;
      }
    },
    mutations: {
      setCurrentTrade(state, tradeInfo) {
        state.currentTrade = tradeInfo;
      }
    }
  })
  export default store;
```

```js
  import store  from './store'
  import {storeManager}  from '@agree/ab-manager-store'
  storeManager.init(store)
```

### **交易页面** 操作使用方法：

```js
  import {storeManager} from "@agree/ab-manager-store";

  //dispatch 操作主状态库
  storeManager.dispatch(type, name, arg)

  //resetStates 重置 store 状态
  storeManager.resetStates()
```
> **storeManager**

| 事件名称    |     说明      |                             参数                             |
| ----------- | :-----------: | :----------------------------------------------------------: |
| init        |  初始化Store  |                    store:Vuex.store的实例                    |
| resetStates | 重置store状态 | 不传参数: 重置所有store状态; `paths:string[]`: 如：`["a.b"]` |
| dispatch    | 操作主状态库  |                       type, name, arg                        |

> **dispatch Attributes**

| 参数 |            说明             |   类型   |                      可选值                       |
| ---- | :-------------------------: | :------: | :-----------------------------------------------: |
| type |       操作状态的方法        | `string` | `states` \| `getters` \| `actions` \| `mutations` |
| name | 状态的key或操作方法的函数名 |  string  |                         -                         |
| arg  |  mutation/action操作的参数  |    *     |                         -                         |

## vuex 的缓存 state 插件

###  **store.js** 引入并使用

```js
  import Vue from 'vue'
  import Vuex from 'vuex'
  import persistedState from '@agree/ab-manager-store'
  Vue.use(Vuex)

  const store = new Vuex.Store({
    state() {
      return {
        currentTrade: '', // 打开的交易信息
      }
    },
    getters: {
      getCurrentTrade: (state) => {
        return state.currentTrade;
      }
    },
    mutations: {
      setCurrentTrade(state, tradeInfo) {
        state.currentTrade = tradeInfo;
      }
    },
    plugins: [persistedState({
      // ...options
    })]
  })
  export default store;
```
> **persistedState** 参数

| 参数               |          说明          |          类型          |                    可选值                    |
| ------------------ | :--------------------: | :--------------------: | :------------------------------------------: |
| key?               |     缓存的 KEY 值      |         string         |            默认:`persistedStates`            |
| paths?             |      缓存的属性名      |         Path[]         |                      -                       |
| storage?           |        缓存对象        |        Storage         |            默认:`sessionStorage`             |
| resetMutationType? |        重置方法        |         string         | 默认：`resetStates`,需要在 `mutations` 声明  |
| getStateAft?       | 获取缓存后公共处理方法 | (value: string) => any |   对数据进行解密操作或获取数据后的公共操作   |
| setStatePre?       | 设置缓存前公共处理方法 | (value: any) => string | 对数据进行加密操作或获取设置数据前的公共操作 |

> **Path** **Path[]**

| 属性         | 类型     | 默认值  |
| ------------ | -------- | ------- |
| **storage**? | Storage  | storage |
| **key**?     | string   | key     |
| **paths**    | string[] | -       |
