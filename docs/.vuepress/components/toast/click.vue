<template>
  <div>
    <VueButton @click="showToast">点击出现提示框</VueButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import toastPlugin from '@/components/toast/toastPlugin';
import VueButton from '@/components/button/VueButton.vue';

Vue.use(toastPlugin);

export default {
  name: 'click',
  components: {VueButton},
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
};
</script>
