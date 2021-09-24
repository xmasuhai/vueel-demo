<template>
  <div>
    <VueButton @click="showToast">点击出现提示框 提供自定义HTML节点</VueButton>
    <VueButton @click="showToastHTML">点击出现提示框 可设置自定义HTML节点样式</VueButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import toastPlugin from '@/components/toast/toastPlugin';
import VueButton from '@/components/button/VueButton.vue';
import {VueToast as VueToastType} from '@/types/VueToast';

Vue.use(toastPlugin);

export default {
  name: 'html',
  components: {VueButton},
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
            callback(toast: VueToastType) {
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
            callback(toast: VueToastType) {
              toast.close();
            }
          }
        }
      });
    }
  }
};

</script>
