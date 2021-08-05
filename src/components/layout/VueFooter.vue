<template>
  <footer class="footer">
    <slot></slot>
  </footer>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueFooter extends Vue {
  name = 'VueFooter';
}
</script>

<style lang="scss" scoped>
.footer {}
</style>
