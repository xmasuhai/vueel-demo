<template>
  <div class="wrapper">
    <label class="form-item">
      <template>
        <span class="name">{{ fieldName }}</span>
        <input type="text"
               :value="value"
               :class="{'fake-focus': isFakeFocus,
                        'fake-hover': isFakeHover}">
      </template>
    </label>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class VueInput extends Vue {
  name = 'VueInput';
  fieldName = '';
  @Prop(String) value!: string;
  @Prop(Boolean) isFakeFocus!: false;
  @Prop(Boolean) isFakeHover!: false;
}
</script>

<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$border-radius: 4px;
$button-active-bg: #eee;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
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
      }

      &:focus, &.fake-focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        border-radius: $border-radius;
      }

      &:focus-visible {
        outline: none;
      }
    }
  }
}
</style>
