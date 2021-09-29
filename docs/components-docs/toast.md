---

title: Toast

---

# 弹出框组件

---

[[toc]]

---

## 使用方法

### 弹出提示组件 默认只出现一个

---

<ClientOnly>

<toast-normal></toast-normal>

</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <VueButton @click="showToast">点击出现提示框</VueButton>
  <VueButton @click="showToastUnique">点击出现提示框</VueButton>
</template>

<script>
import Vue from 'vue';
import toastPlugin from './toast/toastPlugin';
Vue.use(toastPlugin);

export default {
  methods: {
    showToast() {
      this.$toast('我是一个VueToast组件');
    },
    showToastUnique() {
      this.$toast(`你的智商目前为 ${Math.round(Math.random() * 100)}， 需要充值`);
    }
  }
}
</script>

```
:::

---

### 提供关闭按钮 手动关闭

---

<ClientOnly>

<toast-click></toast-click>

</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <VueButton @click="showToast">点击出现提示框</VueButton>
</template>

<script>
import Vue from 'vue';
import toastPlugin from './toast/toastPlugin';
Vue.use(toastPlugin);

export default {
  methods: {
    showToast() {
      this.$toast('我是一个VueToast组件', {
        propsData: {
          autoCloseDelay: false,
          closeButton: {
            text: '手动关闭'
          }
        }
      });
      
    }
  }
}
</script>

```
:::

---

### 点击关闭，并执行回调

---

<ClientOnly>

<toast-callback></toast-callback>

</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <VueButton @click="popUpToasts" ref="button">点击出现提示框</VueButton>
</template>

<script>
import Vue from 'vue';
import toastPlugin from './toast/toastPlugin';
Vue.use(toastPlugin);

export default {
  methods: {
    popUpToasts() {
      this.$toast('我是一个VueToast组件，关闭我就执行一个回调', {
        propsData: {
          autoCloseDelay: false,
          closeButton: {
            text: '手动关闭',
            callback(toast) {
              toast.close();
              toast.$toast('关闭后，执行了一个回调', {
                propsData: {
                  position: 'middle',
                  autoCloseDelay: 2000
                }
              });
            }
          }
        }
      });
    }
  }
}
</script>

```
:::

---

### 弹出提示组件 提供自定义HTML节点，可设置样式

---

<ClientOnly>

<toast-dom-node></toast-dom-node>

</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <VueButton @click="showToast">点击出现提示框</VueButton>
  <VueButton @click="showToastHTML">点击出现提示框</VueButton>
</template>

<script>
import Vue from 'vue';
import toastPlugin from './toast/toastPlugin';
Vue.use(toastPlugin);

export default {
  methods: {
    showToast() {
      this.$toast(`
        <p>
          我是由一个<i>标签</i>包裹<strong>文字</strong>的VueToast组件
        </p>`, {
        propsData: {
          autoCloseDelay: false,
          enableUnsafeHTML: true,
          closeButton: {
            text: '手动关闭',
            callback(toast) {
              toast.close();
            }
          }
        }
      });
      
    },
    showToastHTML() {
      this.$toast(`
        <p>
          <a style="color: seagreen;" href="https://cn.vuejs.org">Vue官网链接</a>
        </p>`, {
        propsData: {
          autoCloseDelay: false,
          enableUnsafeHTML: true,
          closeButton: {
            text: '手动关闭',
            callback(toast) {
              toast.close();
            }
          }
        }
      });
      
    }
  }
}
</script>

```
:::

---

### 包含过长字符

---

<ClientOnly>

<toast-long-string></toast-long-string>

</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <VueButton @click="showToast">点击出现提示框</VueButton>
</template>

<script>
import Vue from 'vue';
import toastPlugin from './toast/toastPlugin';
Vue.use(toastPlugin);

export default {
  methods: {
    this.$toast('我是一个VueToast组件我是一个VueToast组件我是一个VueToast组件我是一个VueToast组件', {
      propsData: {
        autoCloseDelay: false,
        closeButton: {
          text: '手动关闭'
        }
      }
    });

  }
}
</script>

```
:::

---

### 出现的位置

---

<ClientOnly>

<toast-position></toast-position>

</ClientOnly>

::: details 点击查看代码
```vue
<template>
  <VueButton @click="popUpToasts('top')">点击出现提示框</VueButton>
  <VueButton @click="popUpToasts('middle')">点击出现提示框</VueButton>
  <VueButton @click="popUpToasts('bottom')">点击出现提示框</VueButton>
</template>

<script>
import Vue from 'vue';
import toastPlugin from './toast/toastPlugin';
Vue.use(toastPlugin);

export default {
  data() {
    return {
      positionMap: {
        'top': '顶部',
        'middle': '中部',
        'bottom': '底部',
      }
    };
  },
  methods: {
    showToast(position) {
  this.$toast(`智商需要充值 出现在${this.positionMap[position]}`, {
    propsData: {
      position,
      autoCloseDelay: 1200,
      enableUnsafeHTML: true,
      closeButton: {
        text: '已充值',
        callback(toast) {
          toast.close();
        }
      }
    }
  });
}
}
}
</script>

```
:::

---

## 事件列表

| 参数      |    说明    |  类型  |   可选值   | 默认值 |
| ----------- | :----------: | :-------: | :----------: | :------- |
| click | 触发方式 | - | - |  - |
| closeButton | 关闭当前的 Message的选项 | - | - |  - |

## 方法

| 参数      |    说明    |  类型  |   可选值   | 默认值 |
| ----------- | :----------: | :-------: | :----------: | :------- |
| close | 关闭当前的 Toast 消息 | - | - |  - |

---

## 示例应用 Demo Combo

---
