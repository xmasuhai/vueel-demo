<template>
  <div class="vue-button-wrapper">
    <button :class="classes"
            :colorType="colorType"
            :disabled="isDisabled"
            :theme="theme"
            @click="clickLoading"
            type="button">
      <VueIcon v-if="loadingStatus"
               :icon-name="loadingName"
               class="vue-svg"
               :scale="1"
               :class="{loading: isLoading && !isDisabled,
                       [`vue-button-size-${this.size}`]: true}"/>
      <div class="content">
        <slot></slot>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';
import VueIcon from '../icon/VueIcon.vue';

@Component({
  components: {
    VueIcon,
  }
})
export default class VueButton extends Vue {
  name = 'VueButton';
  isDisabledFake = false;

  @Prop({type: Boolean, default: false}) isDisabled!: boolean;
  @Prop({type: Boolean, default: false}) isLoading!: boolean;
  @Prop({
    type: String,
    default: 'normal',
    validator(colorType) {
      return ['normal', 'primary', 'warning', 'danger', 'info', 'success', 'attention']
          .indexOf(colorType) > -1;
    }
  }) colorType!: string;
  @Prop({type: String, default: 'button'}) theme!: 'button' | 'link' | 'text';
  @Prop({type: String, default: 'normal'}) size!: 'small' | 'normal' | 'big';
  @Prop({type: String, default: ''}) icon!: 'settings' | 'loading' | 'right' |
      'left' | 'download' | 'arrow-down' | 'thumbs-up' | '';
  @Prop({
    type: String,
    default: 'left',
    validator(userValue) {
      return userValue === 'left' || userValue === 'right';
    }
  }) iconPosition!: string;

  get loadingStatus() {
    // return this.isLoading ? this.isLoading : (!!this.icon && !this.isLoading);
    return this.isLoading || (!!this.icon && !this.isLoading);
  }

  get loadingName() {
    return this.isLoading ? 'loading' : this.icon;
  }

  get classes() {
    return {
      'vue-button': 'vue-button',
      'is-disabled': this.isDisabled,
      'is-disabled-fake': this.isDisabledFake,
      'activeHover': !this.isDisabled,
      [`icon-${this.iconPosition}`]: true,
      [`vue-button-${this.colorType}`]: true,
      [`vue-button-theme-${this.theme}`]: true,
      [`vue-button-size-${this.size}`]: true,
    };
  }

  @Watch('isLoading')
  onIsLoadingChange(val: boolean) {
    this.isDisabledFake = val;
  }

  @Emit('click')
  clickLoading(/*e: MouseEvent*/) {
    return /*e.target.value*/;
  }
}
</script>
