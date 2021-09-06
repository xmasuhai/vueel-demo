---

title: 快速上手

---

[![CI](https://github.com/xmasuhai/vueel-demo/actions/workflows/unit-test-actions.yml/badge.svg)](https://github.com/xmasuhai/vueel-demo/actions/workflows/unit-test-actions.yml)
![GitHub package.json version](https://img.shields.io/github/package-json/v/xmasuhai/vueel-demo)

## 技术栈

- `Vue.js`全家桶
- `TypeScript`
- `SCSS`
- `parcel`
- `GitHub Actions` [查看此项目的`CI/CD`持续集成](https://github.com/xmasuhai/vueel-demo/actions)

## 开始使用

### 1.安装

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

## 启动服务 Compiles and hot-reloads for development

```
yarn serve
```

#### 生产构建

> Compiles and minifies for production

```
yarn build
```

#### 运行测试 Run your unit tests

```
yarn test:unit
```

#### 格式化代码 Lints and fixes files

```
yarn lint
```

#### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

## 文档

- 本 UI 组件库参考了 饥人谷的 [轱辘 UI](https://github.com/FrankFang/frank-test-1)
- [轱辘 UI源码](https://github.com/FrankFang/gulu)
- [Gulu UI for Vue 3](https://github.com/FrankFang/gulu-for-vue3)

## 提问

## 变更记录

- 添加 按钮组件
- 添加 输入框组件
- 添加 栅栏组件

## 使用 GitHub Actions 测试通过

![github actions badge](https://github.com/xmasuhai/vueel-demo/actions/workflows/unit-test-actions.yml/badge.svg)

## 联系方式

- `xmasuhai@163.com`

## 贡献代码
