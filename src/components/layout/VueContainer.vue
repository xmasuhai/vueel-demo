<template>
  <section class="vue-container"
           :class="flexCToR"
           :style="colToRowStyle">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
@Component
export default class VueContainer extends Vue {
  name = 'VueContainer';
  flexCToR = {
    hasAsider: false
  };

  get colToRowStyle() {
    if (this.flexCToR.hasAsider) {
      return {
        'flex-direction': 'row'
      };
    }
    return {};
  }

  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'VueAside') {
        this.flexCToR.hasAsider = true;
      }
    });
  }

}
</script>
