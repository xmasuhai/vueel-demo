<template>
  <div class="input">
    <VueInput placeholder="Error Enable"
              error="姓名不能少于2个字"
              labelName="输入框输入错误：">
    </VueInput>
    <VueInput placeholder="Error Readonly"
              :readonly="true"
              value="Error Readonly"
              error="姓名不能少于2个字"
              labelName="输入框输入错误：">
    </VueInput>
    <VueInput placeholder="Error Disabled"
              :disabled="true"
              error="姓名不能少于2个字"
              labelName="输入框输入错误：">
    </VueInput>
  </div>
</template>

<script>
import VueInput from '@/components/input/VueInput.vue'

export default {
  name: 'error',
  components: {VueInput},
}
</script>

<style lang="scss" scoped>
@import './input.scss';
</style>
