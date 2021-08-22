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
    this.eventBus.$emit('update:selected', this.tabName, this);
  }

  get classes() {
    return {
      active: this.active
    };
  }

  created() {
    this.eventBus.$on('update:selected', (name: string) => {
      this.active = (name === this.tabName);
    });
  }

}
</script>

<style lang="scss" scoped>
$waterBlue: #3ba0e9;
.tab-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;

  &.active {
    color: $waterBlue;
  }
}
</style>
