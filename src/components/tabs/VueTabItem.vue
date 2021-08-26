<template>
  <section
    class="tab-item"
    @click="emitSelectedVMtoEventBus"
    :class="classes"
    :data-name="tabName">
    <VueIcon v-if="useIcon"
             :icon-name="iconName"
             class="icon"/>
    <div class="text">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts">
import {Component, Inject, Prop, Vue} from 'vue-property-decorator';
import VueIcon from '../icon/VueIcon.vue';

@Component({
  components: {
    VueIcon
  }
})
export default class VueTabItem extends Vue {
  name = 'VueTabItem';
  active = false;

  /* props: [tabName, useIcon, iconName, iconPosition, disabled] */
  @Prop({type: String, required: false, default: ''}) tabName!: string;
  @Prop({type: Boolean, default: false}) useIcon!: boolean;
  @Prop({
    type: String,
    default: 'settings'
  }) iconName!: 'settings' | 'loading' | 'right' |
    'left' | 'download' | 'arrow-down' | 'thumbs-up';
  @Prop({
    type: String,
    default: 'left',
    validator(userValue) {
      return userValue === 'left' || userValue === 'right';
    }
  }) iconPosition!: string;
  @Prop({type: Boolean, default: false}) disabled!: boolean;

  @Inject('eventBus') readonly eventBus!: Vue;

  emitSelectedVMtoEventBus() {
    if (this.disabled) {return;}
    this?.eventBus?.$emit('update:selected', this.tabName, this);
    this.$emit('click', this);
  }

  get classes() {
    return {
      active: this.active,
      disabled: this.disabled,
      [`icon-${this.iconPosition}`]: true,
    };
  }

  onChangeActiveTag() {
    this?.eventBus?.$on('update:selected', (name: string) => {
      this.active = (name === this.tabName);
    });
  }

  created() {
    this.onChangeActiveTag();
  }

}
</script>

<style lang="scss" scoped>
$waterBlue: #3ba0e9;
$disabled-text-color: lightgrey;
.tab-item {
  flex-shrink: 0;
  padding: 0 1em;
  cursor: pointer;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    color: $waterBlue;
  }

  &.disabled {
    color: $disabled-text-color;
    cursor: not-allowed;
  }

  // Icon
  /* ali iconfont common css */
  > .icon {
    width: 1em;
    height: 1em;
    margin: 0 .3em .1em auto;
    fill: currentColor;
    overflow: hidden;
    order: 1;

    &.-right {
      > .icon {
        order: 2;
        margin-left: 0.3em;
        margin-right: 0;
        margin-top: 0.1em;
      }

      > .content {
        order: 1;
      }
    }
  }

  > .text {
    order: 2;
  }

}
</style>
