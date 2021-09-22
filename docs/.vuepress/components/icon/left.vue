<template>
  <span class="center">
    左箭头：
    <VueIcon iconName="left"></VueIcon>
  </span>
</template>

<script>
import VueIcon from '@/components/icon/VueIcon.vue'

export default {
  name: 'left',
  components: {VueIcon}
}
</script>

<style lang="scss" scoped>
@import './icons.scss';
</style>
