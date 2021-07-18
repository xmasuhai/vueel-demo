<template>
  <button class="vue-button"
          :class="{ [`icon-${iconPosition}`]: true }"
          @click="clickLoading">
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

  get loadingStatus() {
    return this.isLoading ? this.isLoading : (!!this.icon && !this.isLoading);
  }

  get loadingName() {
    return this.isLoading ? 'loading' : this.icon;
  }

  @Emit('click')
  clickLoading() {
    return;
  }

}
</script>

<style lang="scss" scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

$button-bg: whitesmoke;
.vue-button {
  margin-right: 10px;
  margin-top: 10px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 0.73em;
  border-radius: var(--border-radius);
  border: 2px solid var(--border-color);
  background: $button-bg;

  &:hover {
    border: 2px solid var(--border-color-hover);
    box-shadow: 0 0 0 1px var(--border-color-hover);
    outline-width: 1px;
    outline-color: var(--border-color-hover);
    background: lighten($button-bg, 5%);
  }

  &:active {
    background-color: var(--button-active-bg);
  }

  &:focus {
    outline: none;
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

  .loading {
    animation: spin 1s infinite linear;
  }
}
</style>
