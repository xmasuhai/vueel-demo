<template>
  <div>
    <details open>
      <summary>ToastsTips</summary>
      <div>
        <VueButton @click="showToast">点击出现提示框</VueButton>
      </div>
    </details>
    <br>
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
}
</script>

<style lang="scss" scoped>

</style>
