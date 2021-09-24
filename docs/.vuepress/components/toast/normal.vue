<template>
  <VueButton @click="showToast">点击出现提示框</VueButton>
</template>

<script lang="ts">
import Vue from 'vue';
import toastPlugin from '@/components/toast/toastPlugin';
import VueButton from '@/components/button/VueButton.vue';
import VueToast from '@/components/toast/VueToast.vue';
import '@/types/VueToast.d';

Vue.use(toastPlugin);

export default {
  name: 'normal',
  methods: {
    showToast() {
      this.$toast('我是一个VueToast组件');
    }
  }
}
</script>

<style scoped>

</style>
