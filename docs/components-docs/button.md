---

title: Button

---

# 按钮组件

---

[[toc]]

---

## 使用方法

### 颜色样式

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
<VueButton color-type="attention">注意</VueButton>
```

---

### 禁用状态

---

<ClientOnly>

<button-disabled>按钮</button-disabled>

</ClientOnly>

```vue
<VueButton isDisabled="true"> </VueButton>
```

---

## 属性列表 Attributes Props

| 参数       |  说明   | 类型 | 可选值 | 默认值 |
| --------- |:-------------:| -----:|-----:|-----:|
| isLoading      |  加载中状态 | boolean  |  / | false |
| isDisabled     |  禁用状态   | boolean  |  / | false  |
| colorType      |  颜色类型   | string   |  / |  '' |
| size           |  尺寸      | string   |  / |  '' |
| icon           |  图标类名   | string   |  / |  ''  |
| iconPosition   |  图标位置   | string   |  / |  ''  |

## 示例应用 Demo Combo
