<template>
  <div>
    <VueButton @click="showToast">点击出现提示框</VueButton>
    <VueButton @click="showToastUnique">点击出现提示框</VueButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import toastPlugin from '@/components/toast/toastPlugin';
import VueButton from '@/components/button/VueButton.vue';

Vue.use(toastPlugin);

export default {
  name: 'normal',
  components: {VueButton},
  methods: {
    showToast() {
      this.$toast('我是一个VueToast组件');
    },
    showToastUnique() {
      this.$toast(`你的智商目前为 ${Math.round(Math.random() * 100)}， 需要充值`);
    }
  }
};
</script>
