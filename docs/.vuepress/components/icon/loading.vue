<template>
  <span class="center">
    加载：
    <VueIcon iconName="loading"></VueIcon>
  </span>
</template>

<script>
import VueIcon from '../../../../src/components/icon/VueIcon.vue'

export default {
  name: 'loading',
  components: {VueIcon}
}
</script>

<style lang="scss" scoped>
@import './icons.scss';
</style>
