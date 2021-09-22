<template>
  <span class="center">
    下载：
    <VueIcon iconName="download"></VueIcon>
  </span>
</template>

<script>
import VueIcon from '@/components/icon/VueIcon.vue'

export default {
  name: 'download',
  components: {VueIcon}
}
</script>

<style lang="scss" scoped>
@import './icons.scss';
</style>
