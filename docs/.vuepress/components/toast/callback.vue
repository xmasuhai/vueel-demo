<template>
  <div>
    <VueButton @click="popUpToasts" ref="button">点击出现提示框</VueButton>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import toastPlugin from '@/components/toast/toastPlugin';
import VueButton from '@/components/button/VueButton.vue';
import {VueToast as VueToastType} from '../../../../src/types/VueToast';

Vue.use(toastPlugin);

export default {
  name: 'callback',
  components: {VueButton},
  methods: {
    popUpToasts() {
      this.$toast('我是一个VueToast组件，关闭我就执行一个回调', {
        propsData: {
          autoCloseDelay: false,
          closeButton: {
            text: '手动关闭',
            callback(toast: VueToastType) {
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
};
</script>
