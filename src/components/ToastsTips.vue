<template>
  <div>
    <details open>
      <summary>ToastsTips 无关闭按钮</summary>
      <div>
        <VueButton @click="showToast">点击出现提示框</VueButton>
      </div>
    </details>
    <br>
    <details open>
      <summary>ToastsTips 点击关闭，无回调</summary>
      <div>
        <VueButton @click="showToast2">点击出现提示框</VueButton>
      </div>
    </details>
    <br>
    <details open>
      <summary>ToastsTips 点击关闭，并执行回调</summary>
      <div>
        <VueButton @click="popUpToasts">点击出现提示框</VueButton>
      </div>
    </details>
    <br>
    <details open>
      <summary>ToastsTips 传递自定义节点</summary>
      <div>
        <VueButton @click="popUpToasts">点击出现提示框</VueButton>
      </div>
    </details>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueToast from './toast/VueToast.vue';
import VueButton from './button/VueButton.vue';
import toastPlugin from './toast/toastPlugin';

Vue.use(toastPlugin);
@Component({
  components: {
    VueToast,
    VueButton
  }
})
export default class ToastsTips extends Vue {
  name = 'ToastsTips';

  showToast() {
    this.$toast('我是一个VueToast组件');
  }

  showToast2() {
    this.$toast('我是一个VueToast组件', {
      propsData: {
        closeButton: {
          text: '关闭'
        }
      }
    });
  }

  popUpToasts() {
    this.$toast('我是一个VueToast组件', {
      propsData: {
        closeButton: {
          text: '手动关闭',
          callback(toast: VueToast) {
            toast.close();
          }
        }
      }
    });
  }
}
</script>

<style lang="scss" scoped>

</style>
