# ab-manager-hotkey@热键管理

用于注册及删除热键。

### 1.引入

```js
import {hotkeyManager} from '@agree/ab-manager-hotkey'
Vue.use(hotkeyManager)
```

### 2.注册

#### 2.1 交易开发人员注册热键方法
```js
this.$setHotkey(vnode, shortcut, function);
```

```html
// App.vue
<template>
    <aui-input ref="input_1"></aui-input>
</template>
<script>
export default {
  mounted() {
      this.$setHotkey(this.$refs['input_1'], 
          'ctrl+m', function(){
            //TODO
          })
  }
}
</script>
```
### 3. 删除热键

```js
this.$delHotkey(vnode, shortcut,function);
```

```html
// 当前vue文件
<template>
    <aui-input ref="input_1"></aui-input>
</template>
<script>
export default {
  mounted() {
    this.$setHotkey(this.$refs['input_1'], 
        'ctrl+m', function(){
          //TODO
        })
    // 删除
    this.$delHotkey(this.$refs['input_1'], 'ctrl+m');
}
}
</script>
```

| 参数 | 类型 | 可选值 | 说明 |
| ------- | ------ | - |------------------ |
| vnode | Vnode | - | 绑定热键的vue实例 |
| shortcut | string | - | 热键短语，如：'ctrl+e' |
| function | Function | - | 热键方法 |
