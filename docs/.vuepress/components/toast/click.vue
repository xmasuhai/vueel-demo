<template>
  <VueButton @click="showToast">点击出现提示框</VueButton>
</template>

<script lang="ts">
import Vue from 'vue';
import toastPlugin from '@/components/toast/toastPlugin';
import VueButton from '@/components/button/VueButton.vue';
import VueToast from '@/components/toast/VueToast.vue';

Vue.use(toastPlugin);
const vv = new Vue();

export default {
  name: 'click',
  components: {VueButton, VueToast},
  methods: {
    showToast() {
      console.log('-> toastPlugin', toastPlugin);
      console.log('-> vv.$toast', vv.$toast);
      vv.$toast('我有消息');
    }
  }
};
</script>
