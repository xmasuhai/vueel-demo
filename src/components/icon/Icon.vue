<template>
  <svg class="v-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script>
export default {
  props: {
    name,
  },
}
</script>

<style lang="scss">
.v-icon {
  width: 1em;
  height: 1em;
  margin-right: .3em;
  margin-left: 0;
  margin-top: .1em;
  fill: currentColor;
  overflow: hidden;
  order: 1;
  }
</style>
