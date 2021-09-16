<template>
  <span class="vue-icon-wrapper">
    <svg class="vue-svg">
      <use :xlink:href="`#i-${iconName}`"></use>
    </svg>
  </span>
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
