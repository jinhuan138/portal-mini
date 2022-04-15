# ab-manager-auf@轻量级画面流管理

## 使用

**需要手动引入注册的部分**

> 在app-loaderjs里面
```js
//ab-manager-auf
import '@agree/ab-manager-auf/auf-panel/index.css'
import { AufPlugin } from "@agree/ab-manager-auf"
Vue.use(AufPlugin,{
  $aufAlias:{
    // 项目中的别名
    '@FM': 'TEClientFM',
    '@TETrade': 'TEClientTrade',
    '@Trade': 'TEClientTrade',
    '@METrade': 'MEClientTrade',
    '@SSTrade': 'SSClientTrade',
    '@Project': 'TEProject',
  },
  $aufVisibleRefs:{
    pre: "prebtn", // 上一步按钮的ref
    next: "nextbtn",// 下一步按钮的ref
    submit: "submitbtn",// 提交按钮的ref
    exit: "exitbtn",// 退出按钮的ref
    other: [],// 其他组件的ref
  }
}) 
```

### 1. 创建一个`xxx.auf.json`
> [具体json格式说明在后面会有详细介绍](#aufjson-文件的说明)

### 2. 在主交易中使用如下

```vue
<template>
  <auf-panel
    ref="auf-panel"
    :_tradeId="tradeId"
    :getDomain="aufData"
  ></auf-panel>
</template>
<script>
import AUF from "xxx.auf.json";
export default {
  data(){
    return {
      tradeId: "",
      aufData: null
    }
  },
  mounted(){
    this.$refs["auf-panel"]._initAuf(AUF);
  }
}
</script>
```

### 3. 创建`UI`节点

```vue
<template>
  <div>
    <!-- 交易开发部分 TODO -->
    <!-- 交易尾部 -->
    <div class="section_footer" v-if="$showType == 'step'">
      <aui-button class="btn" plain @click="exit">退出</aui-button>
      <aui-button class="btn" plain @click="back">上一步</aui-button>
      <aui-button class="btn" plain type="primary" @click="next">下一步</aui-button>
    </div>
  </div>
</template>
<script>
export default {
  name: "SelectService", // UI 节点必须有 name 名
  metadata: { // 声明全局数据,且对全局数据做权限管理
    globalArgs: {
      SeviceType: {
        desc: "业务类型",
      },
    },
  },
  data() {
    return {
    }
  },
  
};
</script>

```



### 4. 创建`LFC`节点

```typescript
import { Lfc } from "@agree/ab-manager-auf"
interface OPtions {
    metadata: object
}
export default class CheckedAccount extends Lfc {
    [x: string]: any
    tradeId!: string
    $options!: OPtions
    constructor(tradeId: string) {
        super(tradeId)
        this.$options = {
            metadata: {
                globalArgs: {}
            }
        }
    }
    run() {
      			// TODO
            return {
                output: "normal",
                outArgs: {

                }
            }
    }
}
```

### `AUF.JSON` 文件的说明

- 结构如下

```json
{
  "start": {
    "id": 1,
    "geometry": {
      "x": 120,
      "y": 80,
      "width": 60,
      "height": 60,
      "lane": 1
    }
  },
  "nodes": [
    {
      "id": 1,
      "type": "UI",
      "name": "SelectService",
      "path": "@Trade/modules/trade/t000001/SelectService",
      "defaultShow": true,
      "keywords": [],
      "inArgs": {},
      "outArgs": {
        "sayHi": "varMap.s"
      },
      "mapping": {},
      "output": {
        "normal": {
          "description": "",
          "type": "UI",
          "id": 3
        },
        "close": {
          "description": ""
        },
        "normal01": {
          "description": "",
          "type": "UI",
          "id": 8
        },
        "error": {
          "description": ""
        }
      },
      "geometry": {
        "x": 80,
        "y": 190,
        "width": 140,
        "height": 40
      }
    },
    {
      "id": 7,
      "type": "LFC",
      "name": "checkedAccount2",
      "path": "@Trade/modules/trade/t000001/checkedAccount2",
      "inArgs": {
        "AcctNm": "varMap.varMap().m"
      },
      "outArgs": {
        "AcctNmAdd": "varMap.varMap().x"
      },
      "mapping": {},
      "output": {
        "normal": {
          "description": "",
          "type": "UI",
          "id": 12
        },
        "close": {
          "description": ""
        },
        "error": {
          "description": ""
        }
      },
      "geometry": {
        "x": 379.65,
        "y": 459.65,
        "width": 140,
        "height": 40
      }
    }
  ],
  "lanes": [
    {
      "id": 1,
      "name": "选择业务类型",
      "description": "",
      "contains": [
        7,
        1
      ],
      "defaultShow": true,
      "defaultOpen": true,
      "defaultJump": true,
      "defaultReset": true,
      "geometry": {
        "x": 0,
        "y": 0,
        "height": 900,
        "width": 300
      }
    }
  ],
  "end": {
    "id": 1001,
    "geometry": {
      "x": 1260,
      "y": 860,
      "width": 120,
      "height": 40,
      "lane": 5
    }
  }
}
```

- `start`

  | 属性名     | 说明                           |
  | ---------- | ------------------------------ |
  | `id`       | 交易的第一个节点`ID`           |
  | `geometry` | 配合`IDE`使用时,泳道展示的坐标 |

- `end`

  | 属性名     | 说明                           |
  | ---------- | ------------------------------ |
  | `id`       | 交易的结束节点`ID` 为 `1001`   |
  | `geometry` | 配合`IDE`使用时,泳道展示的坐标 |

- `nodes`

  | 属性名        | 说明                           | 默认值              |
  | ------------- | ------------------------------ | ------------------- |
  | `id`          | 节点唯一标志                   | -                   |
  | `type`        | 节点的类型(`UI`|`LFC`)         | -                   |
  | `name`        | 节点名字                       | 文件名,不可修改     |
  | `alias`       | 节点的别名                     | 默认是文件名,可修改 |
  | `path`        | 节点的路径                     | -                   |
  | `defaultShow` | 节点默认是否显示               | `true`              |
  | keywords      | 关键字                         | -                   |
  | inArgs        | 入参                           | -                   |
  | outArgs       | 出参                           | -                   |
  | mapping       | 全局数据的映射                 | -                   |
  | output        | 出口                           | -                   |
  | geometry      | 配合`IDE`使用时,节点展示的坐标 | -                   |

- `lanes`

  | 属性名        | 说明                           | 默认值 |
  | ------------- | ------------------------------ | ------ |
  | id            | 泳道的唯一标志                 | -      |
  | name          | 泳道的title                    | -      |
  | description   | 描述                           | -      |
  | defaultShow   | 是否显示                       | `true` |
  | defaultOpen   | 是否展开                       | `true` |
  | defaultJump   | 是否可回跳                     | `true` |
  | defaultReset  | 是否可重置                     | `true` |
  | defaultPity   | 是否可触发怜悯之心             | `true` |
  | defaultReplay | 是否可回放                     | `true` |
  | contains      | 泳道展示节点的数组             | -      |
  | geometry      | 配合`IDE`使用时,泳道展示的坐标 | -      |

### `UI`节点的注意事项

> 确保节点都有 `name` 属性  
>
> 当前节点只能修改 `metadata`  中声明的全局数据

### `LFC` 节点的说明

> `lfc`的逻辑写在`run`函数内,且都保证都有`return`返回值  
>
> `lfc`的返回值格式如下

| 属性名    | 说明                 |
| --------- | -------------------- |
| `output`  | 节点出口             |
| `outArgs` | 向下个节点传递的出参 |

## 节点中可使用的方法

| 方法名       | 说明                 | 参数                                |
| ------------ | -------------------- | ----------------------------------- |
| _next        | 跳转下一个           | 节点出口的名字                      |
| _back        | 回到上一个           | -                                   |
| $setKeyWords | 设置关键字           | data包含的属性                      |
| $setIsReset  | 设置是否可重置       | val : boolean<br />laneName: 泳道名 |
| $setIsReplay | 设置是否可回放       | val : boolean<br />laneName: 泳道名 |
| $setIsPity   | 设置是否触发怜悯之心 | val : boolean<br />laneName: 泳道名 |
| $setIsJump   | 设置是否可以回跳     | val : boolean<br />laneName: 泳道名 |

## 节点中可以使用的属性

| 属性名    | 说明                       | 默认值 |
| --------- | -------------------------- | ------ |
| $showType | 交易展示的类型(平铺\|泳道) |        |
| $isFirstUI          |     第一个UI节点                       |        |
| $isLastUI       |           有可能是最后一个UI节点                 |        |

