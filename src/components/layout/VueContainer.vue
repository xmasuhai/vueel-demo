<template>
  <section class="container" :class="containerClass">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueContainer extends Vue {
  name = 'VueContainer';
  containerClass = {
    hasAsider: false
  };
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'VueAside') {
        this.containerClass.hasAsider = true;
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.hasAsider {
  flex-direction: row;
}
</style>
