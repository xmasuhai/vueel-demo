<template>
  <div class="input">
    <VueInput placeholder="默认样式"
              labelName="默认输入框：">
    </VueInput>
    <VueInput :readonly="true"
              placeholder="只读状态"
              labelName="默认输入框：">
    </VueInput>
    <VueInput placeholder="禁用状态"
              :disabled="true"
              labelName="默认输入框：">
    </VueInput>
  </div>
</template>

<script>
import VueInput from '../../../../src/components/input/VueInput.vue';

export default {
  name: 'normal',
  components: {VueInput},
};
</script>

<style lang="scss" scoped>
@import './input.scss';
</style>
