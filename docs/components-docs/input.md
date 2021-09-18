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

```vue
<VueInput placeholder="默认样式"></VueInput>
<VueInput :readonly="true"
          placeholder="只读状态"></VueInput>
<VueInput placeholder="禁用状态" :disabled="true"></VueInput>
```

---

### 输入框错误提示

---

<ClientOnly>

<input-error></input-error>

</ClientOnly>

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

---

### 输入框绑定`v-model`

---

<ClientOnly>

<input-v-model></input-v-model>

</ClientOnly>

```vue
<VueInput placeholder="Enable"
          v-model="message">
</VueInput>
<VueButton @click="message += 1">+1</VueButton>
<span>{{ message }}</span>
```

---

## 属性列表

| 参数       |  说明   | 类型 | 可选值 | 默认值 |
| --------- |:----------:|:------:|:-----:|-----:|
| isLoading      |  加载中状态 | boolean  |  true/false | false |

## 示例应用 Demo Combo
