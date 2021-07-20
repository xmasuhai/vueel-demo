<template>
  <div class="wrapper">
    <label class="form-item" :for="labelName">
      <template>
        <span class="name">{{ labelName }}</span>
        <input type="text"
               :name="labelName"
               :value="value"
               :placeholder="placeholder"
               :disabled="disabled"
               :readonly="readonly"
               :error="error"
               :class="{'fake-focus': isFakeFocus,
                        'fake-hover': isFakeHover && !error,
                        'fake-hover-error': isFakeHover && error,
                        error}">
        <div class="input-info" v-if="error">
          <VueIcon icon-name="settings"></VueIcon>
          <span>{{ error }}</span>
        </div>
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
  @Prop(String) value!: '';
  @Prop(String) placeholder!: string;
  @Prop(Boolean) isFakeFocus!: false;
  @Prop(Boolean) isFakeHover!: false;
  @Prop(Boolean) readonly!: false;
  @Prop(Boolean) disabled!: false;
  @Prop(String) error!: '';
}
</script>

<style lang="scss" scoped>
@import '../../style/global.scss';

.wrapper {
  font-size: $font-size;
  padding: 5px;
  overflow: hidden;

  .form-item {
    display: inline-block;

    > input {
      height: $button-height;
      border: 1px solid $border-color;
      border-radius: $border-radius;
      padding: 0 8px;
      font-size: inherit;

      &:read-write {
        background-color: $input-color;
      }

      &:hover, &.fake-hover {
        border: 1px solid $border-color-hover;
        border-radius: $border-radius;
        box-shadow: 0 0 0 1px var(--border-color-hover);
        background-color: $input-hover-color;
      }

      &:focus, &.fake-focus {
        box-shadow: inset 0 1px 3px $box-shadow-color;
        border-radius: $border-radius;
        background-color: $input-hover-color;
      }

      &:focus-visible {
        outline: none;
      }

      &[disabled],
      &:read-only {
        border-color: $disabled-color;
        color: $disabled-color;
      }

      &[disabled] {
        cursor: not-allowed;
        background-color: $input-hover-color;
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
          background-color: $input-hover-color;
        }

        &:focus, &.fake-focus {
          border: 1px solid $border-color-hover-error;
          box-shadow: inset 0 1px 3px $box-shadow-color,
          0 0 0 1px $border-color-hover-error;
        }
      }
    }

    .input-info {
      vertical-align: middle;
      display: inline-block;
      color: $danger;
      overflow: hidden;

      ::v-deep > .v-icon {
        vertical-align: -12%;
        fill: $danger;
        margin-right: 0.2em;
      }
    }
  }
}
</style>
