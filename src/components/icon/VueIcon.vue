<template>
  <svg class="v-icon">
    <use :xlink:href="`#i-${iconName}`"></use>
  </svg>
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
.v-icon {
  width: 1em;
  height: 1em;
  margin: 0 1em;
}
</style>
