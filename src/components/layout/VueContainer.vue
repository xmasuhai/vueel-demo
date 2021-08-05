<template>
  <section class="container">
    VueContainer
  </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueContainer extends Vue {
  name = 'VueContainer.vue';
}
</script>

<style lang="scss" scoped>
.container {}
</style>
