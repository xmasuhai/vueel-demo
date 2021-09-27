---

title: Popover

---

# 浮动条组件

---

[[toc]]

---

## 使用方法

### 鼠标点击触发popover

---

<ClientOnly>

<popover-click></popover-click>

</ClientOnly>

::: details 点击查看代码
```vue
<VuePopover trigger="click">
  <template #content>
    <div>popover内容</div>
  </template>
  <VueButton>鼠标点击触发popover</VueButton>
</VuePopover>
```
:::

---

### 鼠标悬停触发popover

---

<ClientOnly>

<popover-hover></popover-hover>

</ClientOnly>

::: details 点击查看代码
```vue
<VuePopover trigger="hover">
  <template #content>
    <div>popover内容</div>
  </template>
  <VueButton>鼠标悬停触发popover</VueButton>
</VuePopover>
```
:::

---

### popover弹出方向

---

<ClientOnly>

<popover-up></popover-up>
<popover-down></popover-down>
<popover-left></popover-left>
<popover-right></popover-right>

</ClientOnly>

::: details 点击查看代码
```vue
<VuePopover>
  <template #content>
    <div>popover上</div>
  </template>
  <VueButton>上浮</VueButton>
</VuePopover>

<VuePopover position="bottom">
<template #content>
  <div>popover下</div>
</template>
<VueButton>下浮</VueButton>
</VuePopover>.

<VuePopover position="left">
<template #content>
  <div>popover左</div>
</template>
<VueButton>左浮</VueButton>
</VuePopover>

<VuePopover position="right">
<template #content>
  <div>popover右</div>
</template>
<VueButton>右浮</VueButton>
</VuePopover>
```
:::

---

### Popover 多行文字内容 不被父元素overflow遮挡

---

<ClientOnly>

<popover-multi></popover-multi>

</ClientOnly>

::: details 点击查看代码
```vue
<VuePopover style="margin-top: 0;">
  <template #content>
    <div>popover多行文字内容popover多行文字内容popover多行文字内容popover多行文字内容popover多行文字内容</div>
  </template>
  <VueButton>显示多行文字提示</VueButton>
</VuePopover>
```
:::

---

### Popover 带关闭按钮

---

<ClientOnly>

<popover-close></popover-close>

</ClientOnly>

::: details 点击查看代码
```vue
<VuePopover trigger="hover">
  <template #content="{closeEvent}">
    <div>popover使用 slotScope 传参给slot</div>
    <VueButton @click="closeEvent">关闭</VueButton>
  </template>
  <VueButton>提供slot事件回调closeEvent</VueButton>
</VuePopover>
```
:::

---

## 属性列表

| 参数       |  说明   | 类型 | 可选值 | 默认值 |
| :-------- |:----------:|:------:|:-----:|:-----|
| autoCloseDelay |  自动关闭延迟 | false/number  |  false/- | 580 |
| position       |  位置 | string  |  top/bottom/left/right | top |
| trigger        |  事件触发类型 | string  |  hover/click | hover |
| zIndex        |  弹出框的z-index | number  |  - | 999 |

---

## 示例应用 Demo Combo



---
