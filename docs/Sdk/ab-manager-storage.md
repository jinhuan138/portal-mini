# ab-manager-storage@全局缓存数据

调用外设。

## 1. 引入

```js
// main.js
import { StorageManager } from "@agree/ab-manager-storage";

let StorageNames = ['name', 'age', 'height', 'tellerNum'];

let storageManager = new StorageManager({
    all: StorageNames
});
```

## 2. 使用：

```js
storageManager.setStore(key, value);
```

例：

```js
// 设置数据（设置前需要先将变量设为可修改）
storageManager.setStore("name", "daiqiang");
// 获取数据
let username = storageManager.getStore("name");
// 移除数据
storageManager.removeStore("name");
// 移除全部数据
storageManager.removeStore();
```

## 3. 设置可修改数据

默认全局的数据不可修改，如需修改则需要将'要修改的变量名'设置为可修改。

```js
storageManager.setAble(ableArray);
// 例
storageManager.setAble(['tellerNum']);
```

也可以在初始化的时候设置可修改变量，如：

```js
import { StorageManager } from "ab-manager-storage";

let StorageNames = ['name', 'age', 'height', 'tellerNum'];

let storageManager = new StorageManager({
    all: StorageNames,
    able: ['tellerNum']
});
```

**参数**

| 参数     | 类型 | 说明 | 默认值 |
| -------- | --- | --- | --- |
| ableArray | array | 可修改的数据列表 | - |

**StorageManager Events**

| 事件        | 说明               | 参数                                            |
| :-----------: | :------------------: | :-------------: |
| setStore    | 存储数据           | key:保存的变量名;value:需要保存的数据           |
| getStore    | 获取已经存储的数据 | key:保存的变量名                                |
| removeStore | 清空存储的数据     | key:保存的变量名;不传参数则清空所有已保存的数据 |