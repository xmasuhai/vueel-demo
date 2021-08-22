<template>
  <section class="tab-pane" :class="classes" v-if="active">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {Component, Inject, Prop, Vue} from 'vue-property-decorator';

@Component
export default class VueTabPane extends Vue {
  name = 'VueTabPane';
  active = false;
  @Prop({type: String, required: true}) paneName!: string;
  @Inject('eventBus') readonly eventBus!: Vue;

  get classes() {
    return {
      active: this.active
    };
  }

  created() {
    this.eventBus.$on('update:selected', (name: string) => {
      this.active = (name === this.paneName);
    });
  }

}
</script>

<style lang="scss" scoped>
.tab-pane {
  &.active {
  }
}
</style>
