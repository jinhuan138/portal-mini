## Theme 主题切换指南
## 组件库主题化

**aui-web** 的 **theme-chalk** 使用 **SCSS** 编写，在内部包含了主题所用到的所有变量，它们使用 **SCSS** 的格式定义。那么就可以改变样式变量实现主题修改。

**注意：** 使用此方法修改主题不能引用 `index.css` ，要引用组件库提供的 **SCSS** 源入口。

**注意：** 变量覆盖时，新的变量定义要放在 `@import "@agree/aui-web/packages/theme-chalk/index.scss";` 引入的前面才会生效

### 修改 fonts 路径变量（必需）
使用主题化时，要修改 fonts 路径变量为工程里 @agree/aui-web 里 fonts 的真实的路径（当报错时，注意查看真实路径是否正确），例如：

```scss
$--font-path: '../node_modules/@agree/aui-web/packages/theme-chalk/fonts';

@import "@agree/aui-web/packages/theme-chalk/index.scss";
```

### 修改变量

引用 `index.scss` 文件，例如修改主题色为红色。

```scss
$--color-primary: red;

@import "@agree/aui-web/packages/theme-chalk/index.scss";
```

如果想要修改更多的细节和其他效果，可以修改其他变量。

此方法只能在编译前修改，不能做到运行过程中实时变化。

### 动态修改主题色

创建 `index.scss` 并在 `main.js` 文件中引入和初始化颜色。

`index.scss`  具体内容在文档最后。

```js
// main.js

import "./style/index.scss";
// 初始化颜色, 注意这一步必须。
import { initTheme } from '@agree/aui-web'
initTheme()
```

修改主题颜色

```js
<script>
// 引入修改主题色方法 changeTheme
import { changeTheme } from '@agree/aui-web'
export default {
  mounted() {
    // todo 获取本地存储的主题颜色
    // 根据保存的内容改变主色和辅色
    changeTheme('#765432', 'primary')
    changeTheme('#234567', 'success')
  }
};
</script>

<style>
</style>

```



==注意：initTheme() 方法是必须的，否则会引起样式丢失崩坏。==

API

| 方法名称    | 说明                 | 参数类型                      | 可选值                                                       |
| ----------- | -------------------- | ----------------------------- | ------------------------------------------------------------ |
| initTheme   | 初始化主题默认颜色。 | —                             | —                                                            |
| changeTheme | 修改主题色和辅色。   | (color: string, type: string) | color: hex格式颜色;   type: primary \| success \| warning \| danger \| info |



>   动态修改主题只允许修改：主色 `primary` 和四个辅色 `success | warning | danger | info`
>



### 必需变量说明

主题切换功能正常运行必须修改的变量说明

| 变量 | 说明 |
|------|------|
| $--font-path | icon 字体文件路径 |

### 基础变量说明

修改主题相关的颜色变量说明

#### 基础黑白

| 变量             | 说明     |
| ---------------- | -------- |
| `$--color-white` | 基础白色 |
| `$--color-black` | 基础黑色 |

#### 主色

| 变量               | 说明                                                         |
| ------------------ | ------------------------------------------------------------ |
| `$--color-primary` | 主题色主色。如primary类型的背景色，字体颜色，focus/hover时的颜色。 |

#### 辅色

| 变量               | 说明 |
| ------------------ | ---- |
| `$--color-success` | 成功 |
| `$--color-warning` | 警告 |
| `$--color-danger`  | 危险 |
| `$--color-info`    | 信息 |

#### 字体颜色

| 变量                        | 说明           |
| --------------------------- | -------------- |
| `$--color-text-primary`     | 主要文字       |
| `$--color-text-regular`     | 常规文字       |
| `$--color-text-secondary`   | 次要文字       |
| `$--color-text-placeholder` | 占位文字       |
| `$--color-text-emphasize`   | 强调文字（红） |

#### 背景色

| 变量                       | 说明                                                         |
| -------------------------- | ------------------------------------------------------------ |
| `$--background-color-base` | 基础背景颜色。某些下拉框选项focus、hover时的背景色，组件禁用时的背景色等等。 |

#### 边框颜色

| 变量                          | 说明     |
| ----------------------------- | -------- |
| `$--border-color-base`        | 一级边框 |
| `$--border-color-light`       | 二级边框 |
| `$--border-color-lighter`     | 三级边框 |
| `$--border-color-extra-light` | 四级边框 |

#### 禁用色

| 变量                      | 说明                       |
| ------------------------- | -------------------------- |
| `$--disabled-fill-base`   | 部分组件禁用状态时的填充色 |
| `$--disabled-color-base`  | 部分组件禁用状态时的字体色 |
| `$--disabled-border-base` | 部分组件禁用状态时的边框色 |
| `$--disabled-color-deep`  | 日历组件禁用字体色         |

### 组件中变量说明

几个常用组件中声明的部分变量说明。

#### Checkbox 多选框

| 变量                                      | 说明                              |
| ----------------------------------------- | --------------------------------- |
| `$--checkbox-color`                       | label字体颜色                     |
| `$--checkbox-input-fill`                  | 背景色                            |
| `$--checkbox-checked-text-color`          | 选中时lable字体颜色               |
| `$--checkbox-checked-input-border-color`  | 选中和indeterminate状态的边框颜色 |
| `$--checkbox-checked-input-fill`          | 选中和indeterminate状态的背景色   |
| `$--checkbox-input-border-color-hover`    | focus、hover时边框颜色            |
| `$--checkbox-button-checked-fill`         | 按钮选中背景色                    |
| `$--checkbox-button-checked-border-color` | 按钮选中边框色                    |

#### Radio 单选框

| 变量                                   | 说明                               |
| -------------------------------------- | ---------------------------------- |
| `$--radio-checked-text-color`          | 选中时lable颜色                    |
| `$--radio-checked-input-border-color`  | 选中时原点边框颜色                 |
| `$--radio-checked-icon-color`          | 选中时原点背景色                   |
| `$--radio-input-border-color-hover`    | focus、hover时的边框和边框阴影颜色 |
| `$--radio-button-checked-fill`         | 按钮状态，选中时背景色             |
| `$--radio-button-checked-border-color` | 按钮状态，选中时边框，边框阴影     |
| `$--radio-disabled-input-fill`         | 禁用时小圆点颜色                   |
| `$--radio-disabled-checked-input-fill` | 禁用并选中                         |

#### Select 选择器

| 变量                                | 说明                                                         |
| ----------------------------------- | ------------------------------------------------------------ |
| `$--select-input-focus-background`  | focus时边框颜色                                              |
| `$--select-option-selected`         | 多选时下拉框内选中项的字体颜色、级联选择器下拉框选中项的字体颜色 |
| `$--select-option-hover-background` | 下拉选项hover背景色                                          |
| `$--select-option-selected-hover`   | 级联选择器下拉框选中背景色（禁用时）                         |

#### Input

| 变量                     | 说明                                                        |
| ------------------------ | ----------------------------------------------------------- |
| `$--input-focus-border`  | focus时的文本框边框、计数器边框、滑块组件中计数器边框的颜色 |
| `$--input-disabled-fill` | 文本框禁用时的背景色                                        |

#### Button

| 变量                       | 说明                |
| -------------------------- | ------------------- |
| `$--button-primary-border` | primary类型的边框色 |
| `$--button-primary-fill`   | primary类型的背景色 |

#### Switch

| 变量                 | 说明                     |
| -------------------- | ------------------------ |
| `$--switch-on-color` | 打开状态下的边框和背景色 |

#### Table

| 变量                              | 说明         |
| --------------------------------- | ------------ |
| `$--table-current-row-background` | 选中行背景色 |

#### Pagination

| 变量                       | 说明                                                         |
| -------------------------- | ------------------------------------------------------------ |
| `$--pagination-hover-fill` | 页码和上下页focus、hover时的颜色，每页条数的边框hover时的颜色 |

#### Tag

| 变量                    | 说明                  |
| ----------------------- | --------------------- |
| `$--tag-fill`           | 默认状态的背景色      |
| `$--tag-color`          | 默认状态的字体颜色    |
| `$--tag-border`         | 默认状态的边框颜色    |
| `$--tag-primary-fill`   | primary状态的背景色   |
| `$--tag-primary-border` | primary状态的边框颜色 |
| `$--tag-primary-color`  | primary状态的字体颜色 |

#### Tree

| 变量                       | 说明                     |
| -------------------------- | ------------------------ |
| `$--tree-node-hover-color` | 选项的focus、hover背景色 |

#### Dropdown

| 变量                               | 说明                  |
| ---------------------------------- | --------------------- |
| `$--dropdown-menuItem-hover-fill`  | 下拉项hover时背景色   |
| `$--dropdown-menuItem-hover-color` | 下拉项hover时字体颜色 |

#### Slider

| 变量                              | 说明               |
| --------------------------------- | ------------------ |
| `$--slider-main-background-color` | 背景色、小球边框色 |

#### Menu

| 变量                      | 说明                     |
| ------------------------- | ------------------------ |
| `$--menu-item-hover-fill` | 选项focus、hover时背景色 |

#### DatePicker

| 变量                             | 说明                                |
| -------------------------------- | ----------------------------------- |
| `$--datepicker-active-color`     | 下拉框选中的日期文字和小球颜色      |
| `$--datepicker-text-hover-color` | 下拉框的日期文字和小球hover时的颜色 |

#### Transfer

| 变量                                   | 说明                   |
| -------------------------------------- | ---------------------- |
| `$--transfer-panaui-header-background` | Transfer组件表头背景色 |



`index.scss` 具体内容如下：

```scss
$--font-path: '../../node_modules/@agree/aui-web/packages/theme-chalk/fonts';
@import "../../node_modules/@agree/aui-web/packages/theme-chalk/index.scss";
// 以上两个路径，请根据实际情况自行引用。

$--color-primary: var(--color-primary);
$--color-success: var(--color-success);
$--color-warning: var(--color-warning);
$--color-danger: var(--color-danger);
$--color-info: var(--color-info);

$--color-primary-black-1: var(--color-primary-black-1);
$--color-primary-light-2: var(--color-primary-light-2);
$--color-primary-light-4: var(--color-primary-light-4);
$--color-primary-light-5: var(--color-primary-light-5);
$--color-primary-light-6: var(--color-primary-light-6);
$--color-primary-light-7: var(--color-primary-light-7);
$--color-primary-light-8: var(--color-primary-light-8);
$--color-primary-light-9: var(--color-primary-light-9);
$--color-primary-lucency-1: var(--color-primary-lucency-1);
$--color-primary-lucency-2: var(--color-primary-lucency-2);

$--color-success-black-1: var(--color-success-black-1);
$--color-success-light-2: var(--color-success-light-2);
$--color-success-light-4: var(--color-success-light-4);
$--color-success-light-5: var(--color-success-light-5);
$--color-success-light-6: var(--color-success-light-6);
$--color-success-light-7: var(--color-success-light-7);
$--color-success-light-8: var(--color-success-light-8);
$--color-success-light-9: var(--color-success-light-9);
$--color-success-lucency-1: var(--color-success-lucency-1);
$--color-success-lucency-2: var(--color-success-lucency-2);

$--color-warning-black-1: var(--color-warning-black-1);
$--color-warning-light-2: var(--color-warning-light-2);
$--color-warning-light-4: var(--color-warning-light-4);
$--color-warning-light-5: var(--color-warning-light-5);
$--color-warning-light-6: var(--color-warning-light-6);
$--color-warning-light-7: var(--color-warning-light-7);
$--color-warning-light-8: var(--color-warning-light-8);
$--color-warning-light-9: var(--color-warning-light-9);
$--color-warning-lucency-1: var(--color-warning-lucency-1);
$--color-warning-lucency-2: var(--color-warning-lucency-2);

$--color-danger-black-1: var(--color-danger-black-1);
$--color-danger-light-2: var(--color-danger-light-2);
$--color-danger-light-4: var(--color-danger-light-4);
$--color-danger-light-5: var(--color-danger-light-5);
$--color-danger-light-6: var(--color-danger-light-6);
$--color-danger-light-7: var(--color-danger-light-7);
$--color-danger-light-8: var(--color-danger-light-8);
$--color-danger-light-9: var(--color-danger-light-9);
$--color-danger-lucency-1: var(--color-danger-lucency-1);
$--color-danger-lucency-2: var(--color-danger-lucency-2);

$--color-info-black-1: var(--color-info-black-1);
$--color-info-light-2: var(--color-info-light-2);
$--color-info-light-4: var(--color-info-light-4);
$--color-info-light-5: var(--color-info-light-5);
$--color-info-light-6: var(--color-info-light-6);
$--color-info-light-7: var(--color-info-light-7);
$--color-info-light-8: var(--color-info-light-8);
$--color-info-light-9: var(--color-info-light-9);
$--color-info-lucency-1: var(--color-info-lucency-1);
$--color-info-lucency-2: var(--color-info-lucency-2);

// button
$--button-primary-border: $--color-primary;
$--button-primary-fill: $--color-primary;
$--button-success-border: $--color-success;
$--button-success-fill: $--color-success;
$--button-warning-border: $--color-warning;
$--button-warning-fill: $--color-warning;
$--button-danger-border: $--color-danger;
$--button-danger-fill: $--color-danger;
$--button-info-border: $--color-info;
$--button-info-fill: $--color-info;
// checkbox
$--checkbox-checked-text-color: $--color-primary;
$--checkbox-checked-input-border-color: $--color-primary;
$--checkbox-checked-input-fill: $--color-primary;
$--checkbox-input-border-color-hover: $--color-primary;
$--checkbox-button-checked-fill: $--color-primary;
$--checkbox-button-checked-border-color: $--color-primary;
// pagination
$--pagination-hover-fill: $--color-primary;
// radio
$--radio-checked-text-color: $--color-primary;
$--radio-checked-input-border-color: $--color-primary;
$--radio-checked-icon-color: $--color-primary;
$--radio-input-border-color-hover: $--color-primary;
$--radio-button-checked-fill: $--color-primary;
$--radio-button-checked-border-color: $--color-primary;
// switch
$--switch-on-color: $--color-primary;
// table
$--table-current-row-background: $--color-primary-light-9;
$--dropdown-menuItem-hover-fill: $--color-primary-light-9;
// input
$--input-focus-border: $--color-primary;
// select
$--select-input-focus-background: $--color-primary;
$--select-option-selected: $--color-primary;
// badge
$--badge-fill: $--color-danger;
// dropdown
$--dropdown-menuItem-hover-fill: $--color-primary-light-9;
$--dropdown-menuItem-hover-color: $--color-primary-light-2;
// slider
$--slider-main-background-color: $--color-primary;
// time
$--datepicker-active-color: $--color-primary;
$--datepicker-text-hover-color: $--color-primary;
// tag
$--tag-fill: $--color-primary-lucency-1;
$--tag-color: $--color-primary;
$--tag-border: $--color-primary-lucency-2;

$--tag-info-fill: $--color-info-lucency-1;
$--tag-info-border: $--color-info-lucency-2;
$--tag-info-color: $--color-info;

$--tag-primary-fill: $--color-primary-lucency-1;
$--tag-primary-border: $--color-primary-lucency-2;
$--tag-primary-color: $--color-primary;

$--tag-success-fill: $--color-success-lucency-1;
$--tag-success-border: $--color-success-lucency-2;
$--tag-success-color: $--color-success;

$--tag-warning-fill: $--color-warning-lucency-1;
$--tag-warning-border: $--color-warning-lucency-2;
$--tag-warning-color: $--color-warning;

$--tag-danger-fill: $--color-danger-lucency-1;
$--tag-danger-border: $--color-danger-lucency-2;
$--tag-danger-color: $--color-danger;

// button
@include b(button) {
  &:hover,
  &:focus {
    color: $--color-primary;
    border-color: $--color-primary-light-7;
    background-color: $--color-primary-light-9;
  }

  &:active {
    color: $--color-primary-black-1;
    border-color: $--color-primary-black-1;
    outline: none;
  }

  @include when(plain) {
    &:hover,
    &:focus {
      background: $--color-white;
      border-color: $--color-primary;
      color: $--color-primary;
    }
    &:active {
      background: $--color-white;
      border-color: $--color-primary-black-1;
      color: $--color-primary-black-1;
    }
  }
  @include when(active) {
    color: $--color-primary-black-1;
    border-color: $--color-primary-black-1;
  }
  @include m(primary) {
    color: $--color-white;
    background-color: $--color-primary;
    border-color: $--color-primary;
    &:hover,
    &:focus {
      background: $--color-primary-light-2;
      border-color: $--color-primary-light-2;
      color: $--color-white;
    }
    &:active {
      background: $--color-primary-black-1;
      border-color: $--color-primary-black-1;
      color: $--color-white;
    }
    &.is-active {
      background: $--color-primary-black-1;
      border-color: $--color-primary-black-1;
      color: $--color-white;
    }
    &.is-disabled {
      &,
      &:hover,
      &:focus,
      &:active {
        color: $--color-white;
        background-color: $--color-primary-light-5;
        border-color: $--color-primary-light-5;
      }
    }
    &.is-plain {
      color: $--color-primary;
      background: $--color-primary-light-9;
      border-color: $--color-primary-light-6;
      &:hover,
      &:focus {
        background: $--color-primary;
        border-color: $--color-primary;
        color: $--color-white;
      }
      &:active {
        background: $--color-primary-black-1;
        border-color: $--color-primary-black-1;
        color: $--color-white;
        outline: none;
      }
      &.is-disabled {
        &,
        &:hover,
        &:focus,
        &:active {
          color: $--color-primary-light-4;
          background-color: $--color-primary-light-9;
          border-color: $--color-primary-light-8;
        }
      }
    }
  }
  @include m(success) {
    color: $--color-white;
    background-color: $--color-success;
    border-color: $--color-success;
    &:hover,
    &:focus {
      background: $--color-success-light-2;
      border-color: $--color-success-light-2;
      color: $--color-white;
    }
    &:active {
      background: $--color-success-black-1;
      border-color: $--color-success-black-1;
      color: $--color-white;
    }
    &.is-active {
      background: $--color-success-black-1;
      border-color: $--color-success-black-1;
      color: $--color-white;
    }
    &.is-disabled {
      &,
      &:hover,
      &:focus,
      &:active {
        color: $--color-white;
        background-color: $--color-success-light-5;
        border-color: $--color-success-light-5;
      }
    }
    &.is-plain {
      color: $--color-success;
      background: $--color-success-light-9;
      border-color: $--color-success-light-6;
      &:hover,
      &:focus {
        background: $--color-success;
        border-color: $--color-success;
        color: $--color-white;
      }
      &:active {
        background: $--color-success-black-1;
        border-color: $--color-success-black-1;
        color: $--color-white;
        outline: none;
      }
      &.is-disabled {
        &,
        &:hover,
        &:focus,
        &:active {
          color: $--color-success-light-4;
          background-color: $--color-success-light-9;
          border-color: $--color-success-light-8;
        }
      }
    }
  }
  @include m(warning) {
    color: $--color-white;
    background-color: $--color-warning;
    border-color: $--color-warning;
    &:hover,
    &:focus {
      background: $--color-warning-light-2;
      border-color: $--color-warning-light-2;
      color: $--color-white;
    }
    &:active {
      background: $--color-warning-black-1;
      border-color: $--color-warning-black-1;
      color: $--color-white;
    }
    &.is-active {
      background: $--color-warning-black-1;
      border-color: $--color-warning-black-1;
      color: $--color-white;
    }
    &.is-disabled {
      &,
      &:hover,
      &:focus,
      &:active {
        color: $--color-white;
        background-color: $--color-warning-light-5;
        border-color: $--color-warning-light-5;
      }
    }
    &.is-plain {
      color: $--color-warning;
      background: $--color-warning-light-9;
      border-color: $--color-warning-light-6;
      &:hover,
      &:focus {
        background: $--color-warning;
        border-color: $--color-warning;
        color: $--color-white;
      }
      &:active {
        background: $--color-warning-black-1;
        border-color: $--color-warning-black-1;
        color: $--color-white;
        outline: none;
      }
      &.is-disabled {
        &,
        &:hover,
        &:focus,
        &:active {
          color: $--color-warning-light-4;
          background-color: $--color-warning-light-9;
          border-color: $--color-warning-light-8;
        }
      }
    }
  }
  @include m(danger) {
    color: $--color-white;
    background-color: $--color-danger;
    border-color: $--color-danger;
    &:hover,
    &:focus {
      background: $--color-danger-light-2;
      border-color: $--color-danger-light-2;
      color: $--color-white;
    }
    &:active {
      background: $--color-danger-black-1;
      border-color: $--color-danger-black-1;
      color: $--color-white;
    }
    &.is-active {
      background: $--color-danger-black-1;
      border-color: $--color-danger-black-1;
      color: $--color-white;
    }
    &.is-disabled {
      &,
      &:hover,
      &:focus,
      &:active {
        color: $--color-white;
        background-color: $--color-danger-light-5;
        border-color: $--color-danger-light-5;
      }
    }
    &.is-plain {
      color: $--color-danger;
      background: $--color-danger-light-9;
      border-color: $--color-danger-light-6;
      &:hover,
      &:focus {
        background: $--color-danger;
        border-color: $--color-danger;
        color: $--color-white;
      }
      &:active {
        background: $--color-danger-black-1;
        border-color: $--color-danger-black-1;
        color: $--color-white;
        outline: none;
      }
      &.is-disabled {
        &,
        &:hover,
        &:focus,
        &:active {
          color: $--color-danger-light-4;
          background-color: $--color-danger-light-9;
          border-color: $--color-danger-light-8;
        }
      }
    }
  }
  @include m(info) {
    color: $--color-white;
    background-color: $--color-info;
    border-color: $--color-info;
    &:hover,
    &:focus {
      background: $--color-info-light-2;
      border-color: $--color-info-light-2;
      color: $--color-white;
    }
    &:active {
      background: $--color-info-black-1;
      border-color: $--color-info-black-1;
      color: $--color-white;
    }
    &.is-active {
      background: $--color-info-black-1;
      border-color: $--color-info-black-1;
      color: $--color-white;
    }
    &.is-disabled {
      &,
      &:hover,
      &:focus,
      &:active {
        color: $--color-white;
        background-color: $--color-info-light-5;
        border-color: $--color-info-light-5;
      }
    }
    &.is-plain {
      color: $--color-info;
      background: $--color-info-light-9;
      border-color: $--color-info-light-6;
      &:hover,
      &:focus {
        background: $--color-info;
        border-color: $--color-info;
        color: $--color-white;
      }
      &:active {
        background: $--color-info-black-1;
        border-color: $--color-info-black-1;
        color: $--color-white;
        outline: none;
      }
      &.is-disabled {
        &,
        &:hover,
        &:focus,
        &:active {
          color: $--color-info-light-4;
          background-color: $--color-info-light-9;
          border-color: $--color-info-light-8;
        }
      }
    }
  }

  @include m(text) {
    color: $--color-primary;
    &:hover,
    &:focus {
      color: $--color-primary-light-2;
    }
    &:active {
      color: $--color-primary-black-1;
    }
  }
}

// checkbox
@include b(checkbox) {
  @include e(input) {
    @include when(checked) {
      .aui-checkbox__inner {
        background-color: $--checkbox-checked-input-fill;
        border-color: $--checkbox-checked-input-border-color;
      }
      & + .aui-checkbox__label {
        color: $--checkbox-checked-text-color;
      }
    }
    @include when(focus) {
      /*focus时 视觉上区分*/
      .aui-checkbox__inner {
        box-shadow: 0 0 2px 2px $--checkbox-input-border-color-hover;
      }
    }
    @include when(indeterminate) {
      .aui-checkbox__inner {
        background-color: $--checkbox-checked-input-fill;
        border-color: $--checkbox-checked-input-border-color;
      }
    }
  }
  @include e(inner) {
    &:hover {
      border-color: $--checkbox-input-border-color-hover;
    }
  }
}
@include b(checkbox-button) {
  @include e(inner) {
    &:hover {
      color: $--color-primary;
    }
  }
  &.is-checked {
    & .aui-checkbox-button__inner {
      background-color: $--checkbox-button-checked-fill;
      border-color: $--checkbox-button-checked-border-color;
    }
  }
  &.is-focus {
    & .aui-checkbox-button__inner {
      border-color: $--color-primary;
    }
  }
}

// collapse
@include b(collapse-item) {
  @include e(header) {
    &.focusing:focus:not(:hover) {
      color: $--color-primary;
    }
  }
}

// color-picker
@include b(color-dropdown) {
  @include e(btn) {
    &:hover {
      color: $--color-primary;
      border-color: $--color-primary;
    }
  }
  @include e(link-btn) {
    color: $--color-primary;
    &:hover {
      color: tint($--color-primary, $--button-hover-tint-percent);
    }
  }
}

// counter
@include b(counter) {
  @include e((increase, decrease)) {
    &:hover {
      color: $--color-primary;
      &:not(.is-disabled) ~ .aui-input .aui-input__inner:not(.is-disabled) {
        border-color: $--color-primary;
      }
    }
  }
}

// dialog
@include b(dialog) {
  @include e(headerbtn) {
    &:focus,
    &:hover {
      .aui-dialog__close {
        color: $--color-primary;
      }
    }
  }
}
.aui-dialog-icon-enlarge:hover:before {
  color: $--color-primary;
}
.aui-dialog-icon-shrink:hover:before {
  color: $--color-primary;
}

// loading
@include b(loading-spinner) {
  .aui-loading-text {
    color: $--color-primary;
  }
  .path {
    stroke: $--color-primary;
  }
  i {
    color: $--color-primary;
  }
}

// menu
@include b(menu) {
  @include m(horizontal) {
    & > .aui-submenu {
      &.is-active {
        .aui-submenu__title {
          border-bottom: 2px solid $--color-primary;
        }
      }
    }
    & .aui-menu {
      & .aui-menu-item,
      & .aui-submenu__title {
        &.is-active {
          color: $--color-text-primary;
        }
      }
    }
    & .aui-menu-item:not(.is-disabled):hover,
    & .aui-menu-item:not(.is-disabled):focus {
      color: $--color-text-primary;
    }
    & > .aui-menu-item.is-active {
      border-bottom: 2px solid $--color-primary;
      color: $--color-text-primary;
    }
  }
}
@include b(menu-item) {
  @include when(active) {
    color: $--color-primary;
  }
}
@include b(submenu) {
  @include when(active) {
    .aui-submenu__title {
      border-bottom-color: $--color-primary;
    }
  }
}

// messagebox
@include b(message-box) {
  @include e(headerbtn) {
    &:focus,
    &:hover {
      .aui-message-box__close {
        color: $--color-primary;
      }
    }
  }
}

// pagination
@include b(pagination) {
  button {
    &:hover {
      color: $--pagination-hover-fill;
    }
  }
  @include e(sizes) {
    .aui-input .aui-input__inner {
      &:hover {
        border-color: $--pagination-hover-fill;
      }
    }
  }
  @include when(background) {
    .aui-pager li {
      &:hover {
        color: $--pagination-hover-fill;
      }
      &.active {
        background-color: $--color-primary;
        color: $--color-white;
      }
    }
  }
}
@include b(pager) {
  li {
    &:hover {
      color: $--pagination-hover-fill;
    }
    &.active {
      color: $--pagination-hover-fill;
      cursor: default;
    }
  }
}

// radio
@include b(radio-button) {
  @include e(inner) {
    &:hover {
      color: $--color-primary;
    }
  }
  @include e(orig-radio) {
    &:checked {
      & + .aui-radio-button__inner {
        background-color: $--radio-button-checked-fill;
        border-color: $--radio-button-checked-border-color;
        box-shadow: -1px 0 0 0 $--radio-button-checked-border-color;
      }
    }
  }
  &:focus:not(.is-focus):not(:active) {
    /*获得焦点时 样式提醒*/
    box-shadow: 0 0 2px 2px $--radio-button-checked-border-color;
  }
}
@include b(radio) {
  @include when(bordered) {
    &.is-checked {
      border-color: $--color-primary;
    }
  }
  @include e(input) {
    @include when(checked) {
      .aui-radio__inner {
        border-color: $--radio-checked-input-border-color;
        background: $--radio-checked-icon-color;
      }
      & + .aui-radio__label {
        color: $--radio-checked-text-color;
      }
    }
    @include when(focus) {
      .aui-radio__inner {
        border-color: $--radio-input-border-color-hover;
      }
    }
    @include e(inner) {
      &:hover {
        border-color: $--radio-input-border-color-hover;
      }
    }
  }
  &:focus:not(.is-focus):not(:active) {
    /*获得焦点时 样式提醒*/
    .aui-radio__inner {
      box-shadow: 0 0 2px 2px $--radio-input-border-color-hover;
    }
  }
}

// reset
a {
  color: $--color-primary;
  &:hover,
  &:focus {
    color: $--color-primary-light-2;
  }

  &:active {
    color: $--color-primary-black-1;
  }
}

@include b(step-item) {
  @include e(head) {
    @include when(success) {
      color: $--color-success;
      border-color: $--color-success;
    }
    @include when(error) {
      color: $--color-danger;
      border-color: $--color-danger;
    }
    @include when(finish) {
      color: $--color-primary;
      border-color: $--color-primary;
    }
  }
  @include e(title) {
    @include when(success) {
      color: $--color-success;
    }
    @include when(error) {
      color: $--color-danger;
    }
    @include when(finish) {
      color: $--color-primary;
    }
  }
  @include e(description) {
    @include when(success) {
      color: $--color-success;
    }
    @include when(error) {
      color: $--color-danger;
    }
    @include when(finish) {
      color: $--color-primary;
    }
  }
  @include e(inflexion-inner) {
    border-right: 0px solid $--color-success;
    border-bottom: 0px solid $--color-success;
    border-top: 0px solid $--color-success;
  }
}

// switch
@include b(switch) {
  @include e(label) {
    @include when(active) {
      color: $--color-primary;
    }
  }
  @include e(input) {
    &:focus ~ .aui-switch__core {
      outline: 1px solid $--color-primary;
    }
  }
  @include when(checked) {
    .aui-switch__core {
      border-color: $--switch-on-color;
      background-color: $--switch-on-color;
    }
  }
}

// tabs
@include b(tabs) {
  @include e(active-bar) {
    background-color: $--color-primary;
  }
  @include e(new-tab) {
    &:hover {
      color: $--color-primary;
    }
  }
  @include e(item) {
    @include when(active) {
      color: $--color-primary;
    }
    &:hover {
      color: $--color-primary;
    }
  }
  @include m(border-card) {
    > .aui-tabs__header .aui-tabs__item {
      &.is-active {
        color: $--color-primary;
      }
      &:hover {
        color: $--color-primary;
      }
    }
  }
}

// tree
@include b(tree) {
  @include e(drop-indicator) {
    background-color: $--color-primary;
  }
}
@include b(tree-node) {
  @include when(drop-inner) {
    > .aui-tree-node__content .aui-tree-node__label {
      background-color: $--color-primary;
    }
  }
}
.aui-tree--highlight-current .aui-tree-node.is-current > .aui-tree-node__content {
  background-color: $--color-primary-light-9;
}

// upload
@include b(upload) {
  /* 照片墙模式 */
  @include m(picture-card) {
    &:hover {
      border-color: $--color-primary;
      color: $--color-primary;
    }
  }
  &:focus {
    border-color: $--color-primary;
    color: $--color-primary;
    .aui-upload-dragger {
      border-color: $--color-primary;
    }
  }
}
@include b(upload-dragger) {
  .aui-upload__text {
    em {
      color: $--color-primary;
    }
  }
  &:hover {
    border-color: $--color-primary;
  }
  @include when(dragover) {
    border: 2px dashed $--color-primary;
  }
}
@include b(upload-list) {
  @include e(item) {
    & .aui-icon-close-tip {
      color: $--color-primary;
    }
  }
  @include e(item-delete) {
    &:hover {
      color: $--color-primary;
    }
  }
}

// table
@include b(table) {
  th {
    > .cell {
      &.highlight {
        color: $--color-primary;
      }
    }
  }
  .ascending .sort-caret.ascending {
    border-bottom-color: $--color-primary;
  }
  .descending .sort-caret.descending {
    border-top-color: $--color-primary;
  }
  @include m(striped) {
    & .aui-table__body {
      & tr.aui-table__row--striped {
        &.current-row td {
          background-color: $--table-current-row-background;
        }
      }
    }
  }
  @include e(body) {
    tr.hover-row {
      &,
      &.aui-table__row--striped {
        &,
        &.current-row {
          > td {
            background-color: $--table-current-row-background;
          }
        }
      }
    }
    tr.current-row > td {
      background-color: $--table-current-row-background;
    }
  }
}
@include b(table-filter) {
  @include e(list-item) {
    &:hover {
      background-color: $--dropdown-menuItem-hover-fill;
      color: $--color-primary-light-2;
    }
    @include when(active) {
      background-color: $--color-primary;
    }
  }
  @include e(bottom) {
    button {
      &:hover {
        color: $--color-primary;
      }
    }
  }
}

// input
@include b(textarea) {
  @include e(inner) {
    &:focus {
      border-color: $--input-focus-border;
    }
  }
}
@include b(input) {
  @include e(inner) {
    &:focus {
      border-color: $--input-focus-border;
    }
  }
  @include when(active) {
    .aui-input__inner {
      border-color: $--input-focus-border;
    }
  }
}

// select
@include b(select) {
  .aui-input__inner {
    &:focus {
      border-color: $--select-input-focus-background;
    }
  }
  .aui-input {
    &.is-focus .aui-input__inner {
      border-color: $--select-input-focus-background;
    }
  }
}
@include b(select-dropdown) {
  @include e(item) {
    &.selected {
      color: $--select-option-selected;
    }
  }
}

// cascader
@include b(cascader-menu) {
  @include e(item) {
    @include when(active) {
      color: $--select-option-selected;
    }
  }
}

// progress
@include b(progress) {
  @include when(success) {
    .aui-progress-bar__inner {
      background-color: $--color-success;
    }
    .aui-progress__text {
      color: $--color-success;
    }
  }
  @include when(error) {
    .aui-progress-bar__inner {
      background-color: $--color-danger;
    }
    .aui-progress__text {
      color: $--color-danger;
    }
  }
  @include when(warning) {
    .aui-progress-bar__inner {
      background-color: $--color-warning;
    }
    .aui-progress__text {
      color: $--color-warning;
    }
  }
}

// badge
@include b(badge) {
  @include e(content) {
    background-color: $--badge-fill;
  }
}

// dropdown
@include b(dropdown-menu) {
  @include e(item) {
    &:not(.is-disabled):hover,
    &:focus {
      background-color: $--dropdown-menuItem-hover-fill;
      color: $--dropdown-menuItem-hover-color;
    }
  }
}

// slider
@include b(slider) {
  @include e(bar) {
    background-color: $--slider-main-background-color;
  }
  @include e(button) {
    border: solid 2px $--slider-main-background-color;
  }
}

// tag
@include b(tag) {
  background-color: $--tag-fill;
  color: $--tag-color;
  border: 1px solid $--tag-border;

  .aui-icon-close {
    color: $--tag-color;
    &:hover {
      background-color: $--tag-color;
    }
  }
  @include m(info) {
    background-color: $--tag-info-fill;
    border-color: $--tag-info-border;
    color: $--tag-info-color;
    @include when(hit) {
      border-color: $--tag-info-color;
    }
    .aui-tag__close {
      color: $--tag-info-color;
    }
    .aui-tag__close:hover {
      background-color: $--tag-info-color;
    }
  }
  @include m(success) {
    background-color: $--tag-success-fill;
    border-color: $--tag-success-border;
    color: $--tag-success-color;

    @include when(hit) {
      border-color: $--tag-success-color;
    }
    .aui-tag__close {
      color: $--tag-success-color;
    }
    .aui-tag__close:hover {
      background-color: $--tag-success-color;
    }
  }

  @include m(warning) {
    background-color: $--tag-warning-fill;
    border-color: $--tag-warning-border;
    color: $--tag-warning-color;
    @include when(hit) {
      border-color: $--tag-warning-color;
    }
    .aui-tag__close {
      color: $--tag-warning-color;
    }
    .aui-tag__close:hover {
      background-color: $--tag-warning-color;
      color: $--color-white;
    }
  }

  @include m(danger) {
    background-color: $--tag-danger-fill;
    border-color: $--tag-danger-border;
    color: $--tag-danger-color;

    @include when(hit) {
      border-color: $--tag-danger-color;
    }

    .aui-tag__close {
      color: $--tag-danger-color;
    }

    .aui-tag__close:hover {
      background-color: $--tag-danger-color;
    }
  }
}

// time
.time-select-item.selected:not(.disabled) {
  color: $--color-primary;
}
@include b(date-picker) {
  @include e(header-label) {
    &.active {
      color: $--datepicker-active-color;
    }
    &:hover {
      color: $--datepicker-text-hover-color;
    }
  }
}
@include b(date-table) {
  td {
    &.available:hover {
      color: $--datepicker-text-hover-color;
    }
    &.current:not(.disabled) span {
      background-color: $--datepicker-active-color;
    }
    &.start-date span,
    &.end-date span {
      background-color: $--datepicker-active-color;
    }
    &.today {
      span {
        color: $--color-primary;
      }
      &.start-date span,
      &.end-date span {
        color: $--color-white;
      }
    }
  }
}
@include b(month-table) {
  td {
    .cell {
      &:hover {
        color: $--datepicker-text-hover-color;
      }
    }
    &.current:not(.disabled) .cell {
      color: $--datepicker-active-color;
    }
  }
}
@include b(picker-panel) {
  @include e(shortcut) {
    &:hover {
      color: $--datepicker-text-hover-color;
    }

    &.active {
      color: $--datepicker-active-color;
    }
  }
  @include e(icon-btn) {
    &:hover {
      color: $--datepicker-text-hover-color;
    }
  }
}
@include b(time-panel) {
  @include e(btn) {
    &.confirm {
      color: $--datepicker-active-color;
    }
  }
}
@include b(year-table) {
  td {
    .cell {
      &:hover {
        color: $--datepicker-text-hover-color;
      }
    }
    &.current:not(.disabled) .cell {
      color: $--datepicker-active-color;
    }
  }
}
@include b(range-editor) {
  @include when(active) {
    border-color: $--color-primary;
    &:hover {
      border-color: $--color-primary;
    }
  }
}
@include b(time-spinner) {
  @include e(arrow) {
    &:hover {
      color: $--color-primary;
    }
  }
}

```

