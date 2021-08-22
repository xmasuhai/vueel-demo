<template>
  <section class="tab-item" @click="xxx" :class="classes">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import {Component, Inject, Prop, Vue} from 'vue-property-decorator';

@Component
export default class VueTabItem extends Vue {
  name = 'VueTabItem';
  active = false;
  @Prop({type: Boolean, default: false}) disabled!: boolean;
  @Inject('eventBus') readonly eventBus!: Vue;

  @Prop({type: String, required: true}) tabName!: string;

  xxx() {
    this.eventBus.$emit('update:selected', this.tabName);
  }

  get classes() {
    return {
      active: this.active
    }
  }

  created() {
    this.eventBus.$on('update:selected', (name: string) => {
      this.active = (name === this.tabName);
    });
  }

}
</script>

<style lang="scss" scoped>
.tab-item {
  flex-shrink: 0;
  padding: 0 1em;
  &.active {
    background-color: indianred;
  }
}
</style>
