<template>
  <div class="toast">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
@Component
export default class VueToast extends Vue {
  name = 'VueToast';
}
</script>

<style lang="scss" scoped>
.toast {
  height: 40px;
  border: 1px solid red;
  position: fixed;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
