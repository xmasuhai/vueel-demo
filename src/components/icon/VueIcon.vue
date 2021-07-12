<template>
  <svg class="v-icon">
    <use :xlink:href="`#i-${name}`"></use>
  </svg>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class VueIcon extends Vue {
  // 动态引入 svg name
  @Prop({default: ''}) ['name']: string;
}
</script>

<style lang="scss" scoped>
.v-icon {
  width: 1em;
  height: 1em;
}
</style>
