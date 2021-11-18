---

title: Collapse

---

# 手风琴组件

---

[[toc]]

---

## 使用方法

### 基本样式

---

<ClientOnly>

<collapse-normal></collapse-normal>

</ClientOnly>

::: details 点击查看代码
```vue
<vue-collapse :selectedArray="['第三项']">
  <vue-collapse-item title="第一项">第一项</vue-collapse-item>
  <vue-collapse-item title="第二项">第二项</vue-collapse-item>
  <vue-collapse-item title="第三项">第三项</vue-collapse-item>
  <vue-collapse-item title="第四项">内容四</vue-collapse-item>
  <vue-collapse-item title="第五项">内容五</vue-collapse-item>
</vue-collapse>
```
:::


---

### 可禁用

---

<ClientOnly>

<collapse-disabled></collapse-disabled>

</ClientOnly>

::: details 点击查看代码
```vue
<vue-collapse :selectedArray="['第二项','第三项']">
  <vue-collapse-item title="第一项">第一项</vue-collapse-item>
  <vue-collapse-item title="第二项" :isDisabled="true">第二项</vue-collapse-item>
  <vue-collapse-item title="第三项" :isDisabled="true">第三项</vue-collapse-item>
  <vue-collapse-item title="第四项">内容四</vue-collapse-item>
</vue-collapse>
```
:::


---

### 设置只展开单独一个面板

---

<ClientOnly>

<collapse-unique></collapse-unique>

</ClientOnly>

::: details 点击查看代码
```vue
<vue-collapse :onlyShowSingle="true"
              :selectedArray="['第二项']">
  <vue-collapse-item title="第一项">内容一</vue-collapse-item>
  <vue-collapse-item title="第二项">内容二</vue-collapse-item>
  <vue-collapse-item title="第三项">内容三</vue-collapse-item>
  <vue-collapse-item title="第四项">内容四</vue-collapse-item>
</vue-collapse>
```
:::

---

## 属性列表

> 父组件 `<vue-collapse></vue-collapse>`

| 参数       |  说明   | 类型 | 可选值 | 默认值 |
| :-------- |:----------:|:------:|:-----:|:-----|
| onlyShowSingle |  仅展示一项 | boolean  |  true/false | false |
| selectedArray  |  展开的项目 | `Array<string>`  |     -      | `[]` |
| itemsData      |  自定义项目数据 | `Record<string, any>[]`  | - | `[]` |

> 子组件 `<vue-collapse-item></vue-collapse-item>`

| 参数       |  说明   | 类型 | 可选值 | 默认值 |
| :-------- |:----------:|:------:|:-----:|:-----|
| isDisabled |  是否禁用 | boolean  |  true/false | false |
| title      |  项目标题 | string  |  任意字符串 | '' |

---

## 示例应用 Demo Combo



---
