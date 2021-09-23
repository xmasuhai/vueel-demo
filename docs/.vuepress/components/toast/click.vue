<template>
  <VueButton @click="kakka">点击出现提示框</VueButton>
</template>

<script lang="ts">
import Vue from 'vue';
import toastPlugin from '../../../../src/components/toast/toastPlugin';
import VueButton from '@/components/button/VueButton.vue';
import {kaKa} from './kaka';
Vue.use(toastPlugin)

export default {
  name: 'click',
  components: {VueButton},
  methods: {
    kakka() {
      kaKa()
    },
    showToast() {
      // this.$toast('我是一个VueToast组件');
    }
  }
}
</script>
