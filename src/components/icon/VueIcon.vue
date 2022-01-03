<template>
  <span class="vue-icon-wrapper" :class="iconScale">
    <svg class="vue-icon-svg">
      <use :xlink:href="`#i-${iconName}`"></use>
    </svg>
  </span>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import '../../assets/icons/svg.js';

@Component
export default class VueIcon extends Vue {
  name = 'VueIcon';
  // 动态引入 svg name
  @Prop({
    default: '',
    type: String
  }) iconName!: string;
  @Prop({
    type: Number,
    default: 1,
    validator(value: number): boolean {
      return Number.isInteger(value) || value >= 1 && value <= 10;
    }
  }) scale!: number;

  get iconScale() {
    return {
      [`vue-icon-${this.scale}x`]: true
    };
  }

}
</script>
