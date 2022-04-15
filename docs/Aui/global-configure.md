## Configure 全局配置
## 全局配置

### 使用

```js
import Vue from 'vue';
import AUI from '@agree/aui-web';

Vue.use(AUI, {
    throttleButton: 150
});
```

### 配置列表

| 属性 | 描述 | 类型 | 默认值 | 可选值 |
|-------|-------|-------|-------|-------|
| throttleButton | 按钮节流时间(ms) | Number | 150 | — |
