<template>
  <div class="input">
    <VueInput placeholder="Enable"
              v-model="message"
              :labelName="`v-model模拟数据双向绑定 ${message}：`">
    </VueInput>
    <VueButton @click="message += 1">+1</VueButton>
    <span>{{ message }}</span>
  </div>
</template>

<script>
import VueInput from '@/components/input/VueInput.vue'
import VueButton from '@/components/button/VueButton.vue'

export default {
  name: 'v-model',
  components: {VueInput, VueButton},
  data() {
    return {
      message: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import './input.scss';
</style>
