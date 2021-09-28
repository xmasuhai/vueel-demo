---

title: Grid

---

# 栅格组件

---

[[toc]]

---

## 使用方法

### Average 均等

---

<ClientOnly>

<grid-average></grid-average>

</ClientOnly>

::: details 点击查看代码
```vue
<VueRow>
  <VueCol>100%</VueCol>
</VueRow>
<VueRow>
  <VueCol>50%</VueCol>
  <VueCol>50%</VueCol>
</VueRow>
<VueRow>
  <VueCol>33.3%</VueCol>
  <VueCol>33.3%</VueCol>
  <VueCol>33.3%</VueCol>
</VueRow>
<VueRow>
  <VueCol>25%</VueCol>
  <VueCol>25%</VueCol>
  <VueCol>25%</VueCol>
  <VueCol>25%</VueCol>
</VueRow>
```
:::

---

### Uneven 不均等

---

<ClientOnly>

<grid-uneven></grid-uneven>

</ClientOnly>

::: details 点击查看代码
```vue
<VueRow>
  <VueCol :span="2">1/12</VueCol>
  <VueCol :span="22">11/12</VueCol>
</VueRow>
<VueRow>
  <VueCol :span="4">1/6</VueCol>
  <VueCol :span="20">5/6</VueCol>
</VueRow>
<VueRow>
  <VueCol :span="6">1/4</VueCol>
  <VueCol :span="18">3/4</VueCol>
</VueRow>
<VueRow>
  <VueCol :span="8">1/3</VueCol>
  <VueCol :span="16">2/3</VueCol>
</VueRow>
```
:::

---

### Gutter 间隔

---

<ClientOnly>

<grid-gutter></grid-gutter>

</ClientOnly>

::: details 点击查看代码
```vue
<VueRow :gutter="20">
  <VueCol :span="4">1/12</VueCol>
  <VueCol :span="20">5/6</VueCol>
</VueRow>
<VueRow :gutter="20">
  <VueCol>1/2</VueCol>
  <VueCol>1/2</VueCol>
</VueRow>
<VueRow :gutter="20">
  <VueCol>1/3</VueCol>
  <VueCol>1/3</VueCol>
  <VueCol>1/3</VueCol>
</VueRow>
<VueRow :gutter="20">
  <VueCol>1/4</VueCol>
  <VueCol>1/4</VueCol>
  <VueCol>1/4</VueCol>
  <VueCol>1/4</VueCol>
</VueRow>
```
:::

---

### Align 可对齐

---

<ClientOnly>

<grid-align></grid-align>

</ClientOnly>

::: details 点击查看代码
```vue
<VueRow :gutter="20">
  <VueCol :span="9">
    <VueRow align="left">
      <VueCol>1</VueCol>
      <VueCol>2</VueCol>
      <VueCol>3</VueCol>
      <VueCol>4</VueCol>
    </VueRow>
  </VueCol>
  <VueCol :span="15">
    <VueRow align="right">
      <VueCol>1</VueCol>
      <VueCol>2</VueCol>
      <VueCol>3</VueCol>
      <VueCol>4</VueCol>
      <VueCol>5</VueCol>
      <VueCol>6</VueCol>
      <VueCol>7</VueCol>
    </VueRow>
  </VueCol>
</VueRow>
<VueRow>
  <VueCol :span="4">
    <VueRow align="center">
      <VueCol>LOGO</VueCol>
    </VueRow>
  </VueCol>
  <VueCol :span="14">Main</VueCol>
  <VueCol :span="6">Aside</VueCol>
</VueRow>
```
:::


---

### Offset 偏移

---

<ClientOnly>

<grid-offset></grid-offset>

</ClientOnly>

::: details 点击查看代码
```vue
<VueRow>
  <VueCol :span="2">1/12</VueCol>
  <VueCol :span="20" :offset="2">5/6 offset_2</VueCol>
</VueRow>
<VueRow>
  <VueCol :span="4">1/6</VueCol>
  <VueCol :span="18" :offset="2">5/6 offset_2</VueCol>
</VueRow>
<VueRow>
  <VueCol :span="4">1/6</VueCol>
  <VueCol :span="8" :offset="2">1/3 offset_2</VueCol>
  <VueCol :span="8" :offset="2">1/3 offset_2</VueCol>
</VueRow>
<VueRow>
  <VueCol :span="4">1/6</VueCol>
  <VueCol :span="4" :offset="6">1/6 offset_6</VueCol>
  <VueCol :span="8" :offset="2">1/3 offset_2</VueCol>
</VueRow>
```
:::


---

### Media Query 媒体查询

---

<ClientOnly>

<grid-media-query></grid-media-query>

</ClientOnly>

::: details 点击查看代码
```vue
<VueRow>
  <VueCol :span="2"
          :mobile="{span: 12}"
          :pad="{span: 8}"
          :laptop="{span: 6}"
          :pc="{span: 4}"
          :pcw="{span: 10}"
          :pcx="{span: 1}">
    Aside
  </VueCol>
  <VueCol :span="18" :offset="2"
          :mobile="{span: 12, offset: 0}"
          :pad="{span: 16, offset: 0}"
          :laptop="{span: 18, offset: 0}"
          :pc="{span: 20, offset: 0}"
          :pcw="{span: 12, offset: 2}"
          :pcx="{span: 22, offset: 1}">
    Main
  </VueCol>
</VueRow>
<VueRow>
  <VueRow>
    <VueCol :span="6"
            :mobile="{span: 24}"
            :pc="{span: 6}"
            @update:ClientWidth="getDymClientWidth">
      Aside: {{ clientWidth }}
    </VueCol>
    <VueCol :span="18"
            :mobile="{span: 24}"
            :pc="{span: 16, offset: 1}">
      Main
    </VueCol>
  </VueRow>
</VueRow>
<VueRow>
  <VueRow>
    <VueCol :span="24" :pad="{span: 12}" :laptop="{span: 8}" :pc="{span: 6}">mobile</VueCol>
    <VueCol :span="24" :pad="{span: 12}" :laptop="{span: 8}" :pc="{span: 6}">pad</VueCol>
    <VueCol :span="24" :pad="{span: 12}" :laptop="{span: 8}" :pc="{span: 6}">laptop</VueCol>
    <VueCol :span="24" :pad="{span: 12}" :laptop="{span: 8}" :pc="{span: 6}">pc</VueCol>
    <VueCol :span="24" :pad="{span: 12}" :laptop="{span: 8}" :pc="{span: 6}">no pcw</VueCol>
    <VueCol :span="24" :pad="{span: 12}" :laptop="{span: 8}" :pc="{span: 6}">no pcx</VueCol>
  </VueRow>
</VueRow>
<VueRow>
  <VueRow>
    <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">mobile</VueCol>
    <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">no pad</VueCol>
    <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">laptop</VueCol>
    <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">pc</VueCol>
    <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">pcw</VueCol>
    <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">no pcx</VueCol>
    <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">pcw</VueCol>
    <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">no pcx</VueCol>
  </VueRow>
</VueRow>
```
:::


---

## 属性列表

> 父组件 `<vue-row></vue-row>`

| 参数       |  说明   | 类型 | 可选值 | 默认值 |
| --------- |:----------:|:------:|:-----:|------|
| align   |  对齐位置    | string  |  left/right/center/space-between/space-around | - |
| gutter  |  项目的间隔   | number/string  | - | `0` |
| colData |  自定义项目数据 | `Record<string, any>[]`  |  `any[]` | `[]` |

> 子组件 `<vue-col></vue-col>`

| 参数       |  说明   | 类型 | 可选值 | 默认值 |
| :-------- |:----------:|:------:|:-----:|:-----|
| span    |  跨度     | number  | - | 0 |
| offset  |  偏移距离  | number  |  - | 0 |
| mobile  |  适配手机的跨度与偏移距离 | ```Record<"span" | "offset", number>```  |  - | - |
| pad     |  适配平板的跨度与偏移距离 | ```Record<"span" | "offset", number>```  |  - | - |
| laptop  |  适配笔记本的跨度与偏移距离 | ```Record<"span" | "offset", number>```  |  - | - |
| pc      |  适配PC端跨度与偏移距离 | ```Record<"span" | "offset", number>```  |  - | - |
| pcw     |  适配宽屏PC跨度与偏移距离 | ```Record<"span" | "offset", number>```  |  - | - |
| pcx     |  适配带鱼屏PC跨度与偏移距离 | ```Record<"span" | "offset", number>```  |  - | - |

---

## 示例应用 Demo Combo



---
