---

title: layout

---

# 布局组件

---

[[toc]]

---

## 使用方法

### 三栏布局

---

<ClientOnly>

<layout-triple-row></layout-triple-row>

</ClientOnly>

```vue
<vue-main style="height: 20vh;">
  <vue-aside class="demo" :width="200">Aside</vue-aside>
  <vue-container class="demo">
    <vue-header class="demo">Header</vue-header>
    <vue-container class="demo">Content</vue-container>
    <vue-footer class="demo">Footer</vue-footer>
  </vue-container>
</vue-main>
```

---

### 三栏布局 中栏 左侧菜单栏

---

<ClientOnly>

<layout-triple-row-aside></layout-triple-row-aside>

</ClientOnly>

```vue
<vue-main style="height: 20vh;">
  <vue-header class="demo">Header</vue-header>
  <vue-container class="demo">
    <vue-aside class="demo" :width="50">Aside</vue-aside>
    <vue-container>Content</vue-container>
  </vue-container>
  <vue-footer class="demo">Footer</vue-footer>
</vue-main>
```

---

### 三栏布局 中栏 有侧菜单栏

---

<ClientOnly>

<layout-triple-row-aside-right></layout-triple-row-aside-right>

</ClientOnly>

```vue
<vue-main style="height: 20vh;">
  <vue-header class="demo">Header</vue-header>
  <vue-container class="demo">
    <vue-aside class="demo" :width="50">Aside</vue-aside>
    <vue-container>Content</vue-container>
  </vue-container>
  <vue-footer class="demo">Footer</vue-footer>
</vue-main>
```


---

### 左右两栏布局 左侧菜单栏

---

<ClientOnly>

<layout-triple-aside></layout-triple-aside>

</ClientOnly>

```vue
<vue-main style="height: 20vh;">
  <vue-aside class="demo" :width="200">Aside</vue-aside>
  <vue-container class="demo">
    <vue-header class="demo">Header</vue-header>
    <vue-container class="demo">Content</vue-container>
    <vue-footer class="demo">Footer</vue-footer>
  </vue-container>
</vue-main>
```


---

## 属性列表

> `VueMain.vue`

| 参数       |  说明 | 类型 | 可选值 | 默认值 |
| --------- |:----------:|:------:|:-----:|-----:|
| 无     |  - | -  |  - | - |

> `VueContainer.vue`

| 参数       |  说明 | 类型 | 可选值 | 默认值 |
| --------- |:----------:|:------:|:-----:|-----:|
| width     |  宽度 | number  |  - | 100 |

> `VueHeader.vue`

| 参数       |  说明 | 类型 | 可选值 | 默认值 |
| --------- |:----------:|:------:|:-----:|-----:|
| height     |  高度 | number  |  - | 40 |

> `VueFooter.vue`

| 参数       |  说明 | 类型 | 可选值 | 默认值 |
| --------- |:----------:|:------:|:-----:|-----:|
| height     |  高度 | number  |  - | 40 |

> `VueAside.vue`

| 参数       |  说明 | 类型 | 可选值 | 默认值 |
| --------- |:----------:|:------:|:-----:|-----:|
| width     |  宽度 | number  |  - | 100 |

---

## 示例应用 Demo Combo
