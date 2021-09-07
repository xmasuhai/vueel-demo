---

title: 安装与使用
sidebarDepth: 1

---

## 1.安装

```sh
yarn add vueel-demo
```

## 2.使用

### 安装依赖 Project setup

```
yarn install
```

### 引入 `vueel-demo`

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

## 3.启动服务

> Compiles and hot-reloads for development

```
yarn serve
```

### 生产构建

> Compiles and minifies for production

```
yarn build
```

### 运行测试 Run your unit tests

```
yarn test:unit
```

### 格式化代码 Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/)._
