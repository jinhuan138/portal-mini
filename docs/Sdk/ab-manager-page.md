# ab-manager-page@页面管理

对交易页面进行管理。

## 引入

```js
// main.js

import { PageManager } from '@agree/ab-manager-page'

let pages = [
    {
        name: 'Step1',
        page: 'FCClient/modules/T10001/Step1.vue'
    },
    {
        name: 'Step2',
        page: 'FCClient/modules/T10001/Step2.vue'
    }
];

let pageManager = new PageManager({ pages });
```

## 获取页面

```js
let page = await pageManager.getPage('Step1');
```

> PageManager Events

|事件名|说明|参数|
|-----|:-----:|:-----:|
|getPage|获取页面的路径|每个页面的name值|