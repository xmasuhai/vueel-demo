<template>
  <div class="row"
       :style="rowStyle">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class VueRow extends Vue {
  name = 'VueRow';

  @Prop({
    type: [String, Number],
    default: '0'
  }) gutter!: string;

  get rowStyle() {
    return {
      marginLeft: -this.gutter + 'px',
      marginRight: -this.gutter + 'px'
    };
  }

  mounted() {
    this.$children.forEach((vm) => {
      const source = {'gutter': this.gutter};
      Object.assign(vm, source);
    });
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(last-child) {
    margin: 16px 0;
  }

}
</style>
