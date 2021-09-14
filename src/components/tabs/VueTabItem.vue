<template>
  <section class="vue-tab-item"
           @click="emitSelectedVMtoEventBus"
           :class="classes"
           :data-name="tabName">
    <VueIcon v-if="useIcon"
             :icon-name="iconName"
             class="vue-icon"/>
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
