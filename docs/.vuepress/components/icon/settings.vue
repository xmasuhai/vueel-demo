<template>
  <div class="settings">
    设置：
    <VueIcon iconName="settings"></VueIcon>
  </div>
</template>

<script>
import VueIcon from '../../../../src/components/icon/VueIcon.vue'

export default {
  name: 'settings',
  components: {VueIcon}
}
</script>

<style lang="scss" scoped>
.settings {
  display: inline;
  line-height: 1em;
}
</style>
