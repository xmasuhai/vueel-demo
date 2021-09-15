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

```vue
<VueButton>普通按钮</VueButton>
<VueButton color-type="primary">主色</VueButton>
<VueButton color-type="danger">报错</VueButton>
<VueButton color-type="info">信息</VueButton>
<VueButton color-type="success">成功</VueButton>
<VueButton color-type="warning">警告</VueButton>
<VueButton color-type="attention">注意</VueButton>
```

---

### 设置图标与图标位置

---

<ClientOnly>

<button-normal-icon>默认左侧图标按钮</button-normal-icon>
<button-normal-icon-right>右侧图标按钮</button-normal-icon-right>

</ClientOnly>

```vue
<VueButton icon="left">默认左侧图标按钮</VueButton>
<VueButton icon="right" iconPosition="right">右侧图标按钮</VueButton>
```

---

### 设置尺寸

---

<ClientOnly>

<button-small-icon>小尺寸按钮</button-small-icon>
<button-normal-icon>普通按钮</button-normal-icon>
<button-big-icon>大尺寸按钮</button-big-icon>

</ClientOnly>

```vue
<VueButton size="small" icon="download">小尺寸按钮</VueButton>
<VueButton>普通按钮</VueButton>
<VueButton size="big" icon="thumbs-up">大尺寸按钮</VueButton>
```

### 设置禁用状态

---

<ClientOnly>

<button-disabled>按钮</button-disabled>

</ClientOnly>

```vue
<VueButton isDisabled="true"> </VueButton>
```

### 设置加载中状态

---

<ClientOnly>

<button-loading>按钮</button-loading>
<button-loading-click>点击后显示加载中</button-loading-click>

</ClientOnly>

```vue
<VueButton :isLoading="true" icon="loading"></VueButton>
<VueButton :isLoading="isLoading"
           icon="download"
           @click="isLoading = !isLoading">
  点击后显示加载中
</VueButton>
```

---

## 属性列表 Attributes Props

| 参数       |  说明   | 类型 | 可选值 | 默认值 |
| --------- |:----------:|:------:|:-----:|-----:|
| isLoading      |  加载中状态 | boolean  |  true/false | false |
| isDisabled     |  禁用状态   | boolean  |  true/false | false  |
| colorType      |  颜色类型   | string   |normal/primary/warning/danger/info/success/ attention|normal|
| size           |  尺寸      | string   |  small/normal/big |  normal |
| icon           |  图标类名   | string   |  settings/loading/right/left/download/arrow-down/thumbs-up/'' |  空字符串： ''  |
| iconPosition   |  图标位置   | string   |  left/right |  left |

## 示例应用 Demo Combo
