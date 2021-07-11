<template>
  <svg class="v-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name: {type: String},
  },
}
</script>

<style lang="scss" scoped>
.v-icon {
  width: 1em;
  height: 1em;
}
</style>
