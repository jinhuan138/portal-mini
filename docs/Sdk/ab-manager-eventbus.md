# ab-manager-eventbus@事件总线

事件总线插件，用于发布、订阅、取消事件。

## 1.引入
```js
// main.js
import { EventBus } from "@agree/ab-manager-eventbus"
```

## 2. 触发事件（发布）
```js
EventBus.$emit("test",{ param: "test-param" })
```

## 3. 绑定事件（订阅）
```js
EventBus.$on("test",fn)
```

## 3. 删除事件
```js
EventBus.$off("test",fn) 
```

# 参数

| 参数 | 说明 |
| --- | --- |
| $emit | 触发事件（发布）|
| $on | 绑定事件（订阅）|
| $off | 删除事件,fn可选，不传则删除全部该事件，传入fn则删除该事件下指定fn |







