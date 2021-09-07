<template>
  <button :class="classes"
          :colorType="colorType"
          @click="clickLoading"
          type="button">
    <VueIcon v-if="loadingStatus"
             :icon-name="loadingName"
             class="icon"
             :class="{
               loading: isLoading,
               [`vue-button-size-${this.size}`]: true
             }"/>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import VueIcon from '../icon/VueIcon.vue';

@Component({
  components: {
    VueIcon,
  }
})
export default class VueButton extends Vue {
  name = 'VueButton';

  @Prop({type: String, default: ''}) icon!: 'settings' | 'loading' | 'right' |
    'left' | 'download' | 'arrow-down' | 'thumbs-up' | '';
  @Prop({type: String, default: 'normal'}) size!: 'small' | 'normal' | 'big';
  @Prop({type: Boolean, default: false}) isLoading!: boolean;
  @Prop({
    type: String,
    default: 'left',
    validator(userValue) {
      return userValue === 'left' || userValue === 'right';
    }
  }) iconPosition!: string;
  @Prop({
    type: String,
    default: '',
    validator(colorType) {
      return ['', 'primary', 'warning', 'danger', 'info', 'success', 'attention']
        .indexOf(colorType) > -1;
    }
  }) colorType!: string;

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
      [`icon-${this.iconPosition}`]: true,
      [`vue-button-${this.colorType}`]: true,
      [`vue-button-size-${this.size}`]: true
    };
  }

  @Emit('click')
  clickLoading(/*e: MouseEvent*/) {
    return /*e.target.value*/;
  }
}
</script>

<style lang="scss" scoped>
@use "sass:map";
@import '../../style/global.scss';

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@mixin setColorType($background: $button-bg) {
  color: #fff;
  background: $background;
  border: 0 solid transparent;
  &:hover {
    background: lighten($background, 10%);
    border: 0 solid transparent;
    box-shadow: 0 0 0 1px $background,
    0 0 1px 1px $background;
  }
  &:active {
    background: darken($background, 3%);
  }
}

.vue-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: $font-size;
  height: $button-height;
  padding: 0 0.73em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  color: #000;

  &:hover {
    border: 1px solid $border-color-hover;
    box-shadow: 0 0 0 1px $border-color-hover,
    0 0 2px 3px rgba(255, 255, 255, 1);
    background-color: lighten($button-bg, 5%);
  }

  &:active {
    background-color: var($button-active-bg);
    backface-visibility: hidden;
    transform: $--pressed-scale;
  }

  &:focus {
    outline: none;
  }

  // button colors
  $color-types: (
    'primary': $primary,
    'danger': $danger,
    'info': $info,
    'success': $success,
    'warning': $warning,
    'attention': $attention
  );
  @each $name, $type in $color-types {
    &-#{$name} {
      @include setColorType($type);
    }
  }

  // button sizes
  $font-sizes: (
    'small': (font-size: $font-size-small, button-size: 24px),
    'normal': (font-size: $font-size, button-size: 32px),
    'big': (font-size: $font-size-big, button-size: 48px),
  );
  @each $name, $types in $font-sizes {
    &-size-#{$name} {
      font-size: map.get($types, font-size);
      height: map.get($types, button-size);
    }
  }

  // Icon
  /* ali iconfont common css */
  > .icon {
    width: 1em;
    height: 1em;
    margin-right: 0.3em;
    margin-left: 0;
    margin-top: 0.1em;
    fill: currentColor;
    overflow: hidden;
    order: 1;
    //fill: red;
  }

  > .content {
    order: 2;
  }

  &.icon-right {
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

  // animation
  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>
