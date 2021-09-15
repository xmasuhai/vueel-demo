# vueel-demo

[![CI](https://github.com/xmasuhai/vueel-demo/actions/workflows/unit-test-actions.yml/badge.svg)](https://github.com/xmasuhai/vueel-demo/actions/workflows/unit-test-actions.yml)
![GitHub package.json version](https://img.shields.io/github/package-json/v/xmasuhai/vueel-demo)

## 介绍

> Vueel UI 是一个基于Vue 2.6.11 和 TypeScript 的 UI 组件库

- 这是我在学习 Vue.js 过程中做的一个 UI 框架

作者：徐某人

## 技术栈

- `Vue.js 2.x`全家桶
  - 常规组件使用`vue-property-decorator`装饰器`@`写法
  - 后续组件使用`Vue Composition API`改写
- `TypeScript`
  - `@` 装饰器写法 配合 `vue-class-component`
- `SCSS`
- `parcel`
- `VuePress 1.x` 编写组件文档
- `GitHub Actions` [查看此项目`CI/CD`持续集成](https://github.com/xmasuhai/vueel-demo/actions)
  - 自动化单元测试
  - 自动化部署`GitHub Pages`

## 开始使用

### 1.安装组件

```sh
yarn add vueel-demo
```

### 2.使用

#### 安装依赖 Project setup

```
yarn install
```

#### 引入 `vueel-demo`

```js
import {VueButton, VueButtonGroup, VueIcon} from 'vueel-demo'

export default {
  components: {
    VueButton, VueButtonGroup, VueIcon
  }
}
```

#### 可省略引入 `svg symbols`

```html
<script src="//at.alicdn.com/t/font_2138557_fmq5zqg2y0j.js"></script>
```

## UI参考

- Eleme UI
- Ant Design Vue
- Vant UI
- iView UI
- Bulma UI
- 饥人谷的 [Gulu UI](https://github.com/FrankFang/frank-test-1)
- [轱辘 UI源码](https://github.com/FrankFang/gulu)
- [Gulu UI for Vue 3](https://github.com/FrankFang/gulu-for-vue3)

## 提问

## 变更记录

- 添加 图标组件
- 添加 按钮组件
- 添加 输入框组件
- 添加 栅栏组件
- 添加 布局组件
- 添加 标签栏组件
- 添加 弹出框组件
- 添加 浮动消息组件
- 添加 手风琴组件

## 使用 GitHub Actions 测试通过

![github actions badge](https://github.com/xmasuhai/vueel-demo/actions/workflows/unit-test-actions.yml/badge.svg)

## 联系方式

- `xmasuhai@163.com`

## 贡献代码
