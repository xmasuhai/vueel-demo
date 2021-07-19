<template>
  <div class="wrapper">
    <label class="form-item">
      <template>
        <span class="name">{{ labelName }}</span>
        <input type="text"
               :placeholder="placeholder"
               :disabled="disabled"
               :readonly="readonly"
               :error="error"
               :class="{'fake-focus': isFakeFocus,
                        'fake-hover': isFakeHover && !error,
                        'fake-hover-error': isFakeHover && error,
                        error}">
        <template v-if="error">
          <VueIcon icon-name="settings"></VueIcon>
          <span>{{ error }}</span>
        </template>
      </template>
    </label>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import VueIcon from '../icon/VueIcon.vue';

@Component({
  components: {VueIcon}
})
export default class VueInput extends Vue {
  name = 'VueInput';
  @Prop(String) labelName!: string;
  @Prop(String) placeholder!: string;
  @Prop(Boolean) isFakeFocus!: false;
  @Prop(Boolean) isFakeHover!: false;
  @Prop(Boolean) readonly!: false;
  @Prop(Boolean) disabled!: false;
  @Prop(String) error!: '';
}
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$border-radius: 4px;
$button-bg: white;
$button-active-bg: #eee;
$color: #333;
$disabled-color: #bbb;
$border-color: #999;
$border-color-hover: #666;
$border-color-hover-error: #f1453d;
$primary: #0d6efd;
$danger: #ff4136;
$success: #198754;
$info: #0dcaf0;
$warning: #ffc107;
$attention: #fd7e14;
$box-shadow-color: rgb(0, 0, 0, 0.5);

.wrapper {
  font-size: $font-size;
  padding: 5px;

  .form-item {
    > input {
      height: $button-height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;

      &:hover, &.fake-hover {
        border: 1px solid $border-color-hover;
        border-radius: $border-radius;
        box-shadow: 0 0 0 1px var(--border-color-hover);
      }

      &:focus, &.fake-focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        border-radius: $border-radius;
      }

      &:focus-visible {
        outline: none;
      }

      &[disabled],
      &[readonly] {
        border-color: $disabled-color;
        color: $disabled-color;
        cursor: not-allowed;
      }

      &.error {
        border-color: $danger;
        border-width: 1px;

        &::-webkit-input-placeholder {
          color: $danger;
        }

        &:hover,
        &.fake-hover-error {
          border: 1px solid $border-color-hover-error;
          box-shadow: 0 0 0 1px $border-color-hover-error;
        }

        &:focus, &.fake-focus {
          border: 1px solid $border-color-hover-error;
          box-shadow: inset 0 1px 3px $box-shadow-color,
          0 0 0 1px $border-color-hover-error;
        }
      }
    }
  }
}
</style>
