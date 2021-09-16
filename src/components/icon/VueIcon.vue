<template>
  <div class="vue-icon-wrapper svg-baseline">
    <svg class="vue-svg">
      <use :xlink:href="`#i-${iconName}`"></use>
    </svg>
  </div>
</template>

<script lang="ts">
import './../../assets/icons/svg.js';
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class VueIcon extends Vue {
  name = 'VueIcon';
  // 动态引入 svg name
  @Prop({default: ''}) ['iconName']: string;
}
</script>

<style lang="scss" scoped>
.vue-icon-wrapper {
  display: inline-flex;
  align-self: center;
  position: relative;
  height: 1em;
  width: 1em;

  .vue-svg {
    width: 1em;
    height: 1em;
    margin: 0 .5em;
  }

  &.svg-baseline svg {
    bottom: -0.125em;
    position: absolute;
  }

}
</style>
