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
  name: 'unique',
  methods: {
    showToast() {
      this.$toast(`你的智商目前为 ${Math.round(Math.random() * 100)}， 需要充值`);
    }
  }
}
</script>

<style scoped>

</style>
