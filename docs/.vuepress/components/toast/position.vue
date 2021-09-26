<template>
  <div>
    <VueButton @click="showToast('top')">点击出现顶部提示框</VueButton>
    <VueButton @click="showToast('middle')">点击出现中部提示框</VueButton>
    <VueButton @click="showToast('bottom')">点击出现底部提示框</VueButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import toastPlugin from '@/components/toast/toastPlugin';
import VueButton from '@/components/button/VueButton.vue';
import {ToastPosType, VueToast as VueToastType} from '@/types/VueToast';

Vue.use(toastPlugin);

export default {
  name: 'middle',
  components: {VueButton},
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
    showToast(position: keyof ToastPosType) {
      this.$toast(`智商需要充值 出现在${this.positionMap[position]}`, {
        propsData: {
          position,
          autoCloseDelay: 1200,
          enableUnsafeHTML: true,
          closeButton: {
            text: '已充值',
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

<style lang="scss" scoped>
@import './toast.scss';
</style>
