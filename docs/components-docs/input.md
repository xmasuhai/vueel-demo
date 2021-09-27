---

title: Input

---

# 输入框组件

---

[[toc]]

---

## 使用方法

### 默认输入框

---

<ClientOnly>

<input-normal></input-normal>

</ClientOnly>

::: details 点击查看代码
```vue
<VueInput placeholder="默认样式"
          labelName="默认输入框：">
</VueInput>
<VueInput :readonly="true"
          placeholder="只读状态"
          labelName="默认输入框：">
</VueInput>
<VueInput placeholder="禁用状态"
          :disabled="true"
          labelName="默认输入框：">
</VueInput>
```
:::

---

### 输入框错误提示

---

<ClientOnly>

<input-error></input-error>

</ClientOnly>

::: details 点击查看代码
```vue
<VueInput placeholder="Error Enable"
          error="姓名不能少于2个字">
</VueInput>
<VueInput placeholder="Error Readonly"
          :readonly="true"
          value="Error Readonly"
          error="姓名不能少于2个字">
</VueInput>
<VueInput placeholder="Error Disabled"
          :disabled="true"
          error="姓名不能少于2个字">
</VueInput>
```
:::

---

### 输入框绑定`v-model`

---

<ClientOnly>

<input-v-model></input-v-model>

</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <div class="input">
    <VueInput placeholder="Enable"
              v-model="message"
              :labelName="`v-model模拟数据双向绑定 ${message}：`">
    </VueInput>
    <VueButton @click="message += 1">+1</VueButton>
    <span>{{ message }}</span>
  </div>
</template>

<script>
import VueInput from '@/components/input/VueInput.vue'
import VueButton from '@/components/button/VueButton.vue'

export default {
  components: {VueInput, VueButton},
  data() {
    return {
      message: ''
    }
  }
}
</script>

```
:::

---

## 属性列表

| 参数       |  说明   | 类型 | 可选值 | 默认值 |
| --------- |:----------:|:------:|:-----:|:-----|
| labelName |  输入框标题 | string |  - | "" |
| placeholder | 可替换内容 | string | - | "" |
| value | 输入框内容 | string | - | "" |
| readonly | 是否只读 | boolean | true/false | false |
| disabled | 是否禁用 | boolean | true/false | false |
| error | 错误状态提示文字 | string | - | "" |
| v-model | 绑定输入信息 | string | - | - |

---

## 示例应用 Demo Combo



---
