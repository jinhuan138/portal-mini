# ab-manager-focus2@焦点管理

交易页面焦点控制器，实现交易全键盘操作。

## 1. 使用

在当前需要焦点控制的**根元素**使用`@agree/ab-manager-focus2`，默认会控制**包括嵌套的子组件**里面的[**可由焦点控制**](#_9-1-可由焦点控制组件)的元素。

```js
// 使用焦点控制的根组件
import { FocusManager } from "@agree/ab-manager-focus2";

export default {
    mixins:[FocusManager],
    methods: {
        init() {
            // 需要在合适的时机激活焦点控制，例如在 mounted 里。
            this._activeFocus();
        }
    }
}
```

### 1.1 初始化参数

可传入`_activeFocus()`方法中，如：

```js
this._activeFocus({
    preventScroll: false,
    debug: false
});
```

| 参数名 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| preventScroll | 阻止元素获取焦点时自动滚动到可视区域 | boolean | false |
| debug | 启用debug模式(输出调试日志) | boolean | false |

## 2. 子组件调用API

子组件若需要使用`@agree/ab-manager-focus2`相关api能力，需要注入后即可使用。

```vue
<template>
    <aui-button @click="setFocus">调用api</aui-button>
    <aui-input ref="accountInput"></aui-input>
</template>
<script>
import { inject } from "@agree/ab-manager-focus2"

export default {
    mixins:[inject],
    methods: {
        setFocus() {
            this.focusManager.setFocus('accountInput');
        }
    }
}
</script>
```

## 3. 手动设置获取焦点

除了按键和鼠标点击可以让元素获取焦点外，也可以手动调用代码让元素获取焦点。

```js
this.focusManager.setFocus(refName|index);
```

例：
```vue
<template>
    <aui-button @click="setFocus">操作焦点元素设置焦点</aui-button>
    <aui-input ref="accountInput"></aui-input>
    <aui-input ref="accountInput2"></aui-input>
    <aui-input ref="accountInput3"></aui-input>
    <aui-input ref="accountInput4"></aui-input>
</template>
<script>
export default {
    methods:{
        setFocus(){
            // 点击<aui-button>设置到 accountInput4 获取焦点
            this.focusManager.setFocus("accountInput4");
        }
    }
}
</script>
```


## 4. 设置/移除焦点贪婪

**焦点限制**：在默认情况下，焦点控制会对页面可以获取焦点的元素进行统一控制，如果前面元素有必输的限制或校验规则未通过，焦点不能置到后面的元素上。

**焦点贪婪**：焦点贪婪指的是，忽略前面的校验，强制获取焦点。当某个元素设置为焦点贪婪时，无论前面元素校验是否通过，该元素都可以获取到焦点并触发事件。**该设置特权较大，请谨慎使用**。

```js
// 设置贪婪
this.focusManager.setGreedy(refName|refNames);

//移除贪婪
this.focusManager.removeGreedy(refName|refNames);
```
在需要设置/移除焦点贪婪的组件上声明ref属性

```vue
<template>
    <aui-input ref="input_1" v-model="inputValue"></aui-input>
</template>
<script>
    // ...
    export default {
        mounted() {
            this.focusManager.setGreedy('input_1');
        }
    }
</script>
```

## 5. 使用焦点逻辑时，是否向上触发blur事件

通过焦点控制管理的元素是按照**从左到右，从上往下**的顺序依次获取焦点并触发对应的`focus`/`blur` 事件。当从右到左或从下向上切换焦点时不会触发元素的`blur`事件，如需向上切换焦点时也触发`blur`事件，要手动设置`back-trigger`属性为`true`。

例：
```vue
<template>
    <aui-input :back-trigger="true" ></aui-input>
</template>
```

## 6. MessageBox 弹窗类焦点

- 弹窗类组件通过api打开必须使用`async/await`
- 需要传递当前触发弹窗元素所在的`FocusManager`实例，保证关闭后可使对应区域获取焦点

```vue
<template>
    <aui-button @click="showMsg">打开弹窗</aui-button>
</template>
<script>
export default {
    // ...
    methods:{
        async showMsg(){
            await this.$aui.alert.show('标题', '内容', {
                type: 'info',
                message: '消息提示',
                inject: this.focusManager
            }); 
        }
    }
}
</script>
```

## 7. dialog 弹窗类焦点

`dialog`组件不需要引入`@agree/ab-manager-focus2`，只需要在标签上定义`is-focus`属性为`true`即可。

```vue
<template>
    <aui-dialog :is-focus="true">
        <aui-button>dialog中的按钮</aui-button>
    </aui-dialog>
</template>
```

## 8. 方法

通过 `this.focusManager` 调用的方法，例如 `this.focusManager.setFocus(ref)`

| 方法名 | 参数 | 参数类型 | 参数说明 | 方法说明 |
| ------ | ------ | ------ | ------ | ------ |
| setFocus | refName / index | string / number | 声明在组件上的ref属性或组件的位置下标 | 操作焦点元素使某个组件获得焦点 |
| setGreedy | refName / refNames | string / Array\<string\> | 一个ref字符串或者多个ref字符串组成的数组 | 为组件设置焦点贪婪 |
| removeGreedy | refName / refNames | string / Array\<string\> | 一个ref字符串或者多个ref字符串组成的数组 | 移除组件的焦点贪婪 |

- 组件的`ref`属性指的是组件库提供的`aui-*`组件上的`ref`属性。
- 组件的位置下标指的是页面上[**可由焦点控制**](#_9-1-可由焦点控制组件)元素显示的位置顺序，从左到右，从上到下，第一个元素下标为`0`，以此类推。

**注：通过`index`来设置焦点，不一定总是符合你的预期，除了一些特殊情况，不要太依赖通过`index`设置焦点。**


## 9. 补充说明

### 9.1 可由焦点控制组件

指组件库提供的部分`aui-*`组件，包括：`aui-input`, `aui-select`, `aui-date`, `aui-cascader`, `aui-table`和`aui-button`。

### 9.2 非焦点控制组件

指除了[**可由焦点控制**](#_9-1-可由焦点控制组件)组件之外的所有组件。