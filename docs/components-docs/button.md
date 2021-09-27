---

title: Button

---

# 按钮组件

---

[[toc]]

---

## 使用方法

### 设置颜色样式

---

<ClientOnly>

<button-normal>普通按钮</button-normal>
<button-primary>主色</button-primary>
<button-danger>报错</button-danger>
<button-info>信息</button-info>
<button-success>成功</button-success>
<button-warning>警告</button-warning>
<button-attention>注意</button-attention>

</ClientOnly>

::: details 点击查看代码
```vue
<VueButton>普通按钮</VueButton>
<VueButton colorType="primary">主色</VueButton>
<VueButton colorType="danger">报错</VueButton>
<VueButton colorType="info">信息</VueButton>
<VueButton colorType="success">成功</VueButton>
<VueButton colorType="warning">警告</VueButton>
<VueButton colorType="attention">注意</VueButton>
```
:::

---

### 设置图标与图标位置

---

<ClientOnly>

<button-normal-icon>默认左侧图标按钮</button-normal-icon>
<button-normal-icon-right>右侧图标按钮</button-normal-icon-right>

</ClientOnly>

::: details 点击查看代码
```vue
<VueButton icon="left">默认左侧图标</VueButton>
<VueButton icon="right" iconPosition="right">设置图标在右侧</VueButton>
```
:::

---

### 设置尺寸

---

<ClientOnly>

<button-small-icon>小尺寸按钮</button-small-icon>
<button-normal-icon>普通按钮</button-normal-icon>
<button-big-icon>大尺寸按钮</button-big-icon>

</ClientOnly>

::: details 点击查看代码
```vue
<VueButton size="small" icon="download">小尺寸按钮</VueButton>
<VueButton>普通按钮</VueButton>
<VueButton size="big" icon="thumbs-up">大尺寸按钮</VueButton>
```
:::

### 设置禁用状态

---

<ClientOnly>

<button-disabled>按钮</button-disabled>

</ClientOnly>

::: details 点击查看代码
```vue
<VueButton isDisabled="true"> </VueButton>
```
:::

### 设置加载中状态

---

<ClientOnly>

<button-loading>按钮</button-loading>
<button-loading-click>点击后显示加载中</button-loading-click>

</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <VueButton :isLoading="true" icon="loading"></VueButton>
  <VueButton :isLoading="isLoading"
             icon="download"
             @click="isLoading = !isLoading">
    点击后显示加载中
  </VueButton>
</template>

<script>
import VueButton from '@/components/button/VueButton.vue';
export default {
  components: {
    VueButton
  },
  data() {
    return {
      isLoading: false
    }
  }
}
</script>

```
:::

### 按钮组

---

<ClientOnly>

<button-group></button-group>

</ClientOnly>

::: details 点击查看代码
```vue
<VueButtonGroup>
  <VueButton icon="left">上一页</VueButton>
  <VueButton icon="settings">更多</VueButton>
  <VueButton icon="right"
             icon-position="right">下一页
  </VueButton>
</VueButtonGroup>
```
:::

---

## 属性列表 Attributes Props

---

| 参数       |  说明   | 类型 | 可选值 | 默认值 |
| :-------- |:----------:|:------:|:-----:|:-----|
| isLoading      |  加载中状态 | boolean  |  true/false | false |
| isDisabled     |  禁用状态   | boolean  |  true/false | false  |
| colorType      |  设置颜色 | string   |normal/primary/warning/danger/info/success/ attention|normal|
| size           |  设置尺寸    | string   |  small/normal/big |  normal |
| icon           |  设置图标 | string   | settings/loading/right/left/download/arrow-down/thumbs-up |  ""  |
| iconPosition   |  设置图标位置 | string   |  left/right |  left |

---

## 示例应用 Demo Combo

### 配合 Toast 组件使用

### 配合 Popover 组件使用

---
