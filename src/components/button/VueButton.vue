<template>
  <button :class="classes"
          :color="color"
          @click="clickLoading"
          type="button">
    <VueIcon v-if="loadingStatus"
             :icon-name="loadingName"
             class="icon"
             :class="{loading: isLoading}"/>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script lang="ts">
import {Component, Prop, Emit, Vue} from 'vue-property-decorator';
import VueIcon from '../icon/VueIcon.vue';

@Component({
  components: {
    VueIcon,
  }
})
export default class VueButton extends Vue {
  name = 'VueButton';

  @Prop() icon!: 'settings' | 'loading' | 'right' |
    'left' | 'download' | 'arrow-down' | 'thumbs-up';
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
    validator(color) {
      return ['', 'primary', 'warning', 'danger', 'info', 'success', 'attention']
        .indexOf(color) > -1;
    }
  }) color!: string;

  get loadingStatus() {
    return this.isLoading ? this.isLoading : (!!this.icon && !this.isLoading);
  }

  get loadingName() {
    return this.isLoading ? 'loading' : this.icon;
  }

  get classes() {
    return {
      'vue-button': 'vue-button',
      [`icon-${this.iconPosition}`]: true,
      [`vue-button-${this.color}`]: true
    };
  }

  @Emit('click')
  clickLoading() {
    return;
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/global.scss';

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@mixin default-color($background: #000) {
  color: #fff;
  background: $background;
  &:hover {
    background: lighten($background, 10%);
  }
}

.vue-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.73em;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: ghostwhite;
  color: #000;

  &:hover {
    border: 1px solid var(--border-color-hover);
    box-shadow: 0 0 0 1px var(--border-color-hover),
    0 0 2px 3px rgba(255, 255, 255, 1);
    background: lighten($button-bg, 5%);
  }

  &:active {
    background-color: var(--button-active-bg);
    backface-visibility: hidden;
    transform: $--pressed-scale;
  }

  &:focus {
    outline: none;
  }

  // Colors
  &-primary {
    $background: $primary;
    @include default-color($background);
  }

  &-success {
    $background: $success;
    @include default-color($background);
  }

  &-danger {
    $background: $danger;
    @include default-color($background);
  }

  &-warning {
    $background: $warning;
    @include default-color($background);
  }

  &-attention {
    $background: $attention;
    @include default-color($background);
  }

  &-info {
    $background: $info;
    @include default-color($background);
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
