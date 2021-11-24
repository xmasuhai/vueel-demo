<template>
  <div class="vue-switch-button-wrapper">
    <button class="vue-switch-button"
            :class="{
                    ['vue-switch-checked']: toggleValue,
                    ['vue-switch-disabled']: disabled,
            }"
            @click="toggle"
            type="button">
      <div class="vue-switch-toggle">
        <span v-show="!toggleValue"
              class="vue-switch-close-line"></span>
        <span class="vue-switch-label"
              :class="openClose">
          {{ showText }}
        </span>
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, SetupContext} from '@vue/composition-api';

interface PropsType {
  activeText?: string;
  inactiveText?: string;
  toggleValue?: boolean;
  disabled?: boolean;
}

export default defineComponent({
  name: 'VueSwitch',
  props: {
    activeText: {
      type: String,
      default: '',
      validator(value: string) {
        return value.length <= 3;
      }
    },
    inactiveText: {
      type: String,
      default: '',
      validator(value: string) {
        return value.length <= 3;
      }
    },
    toggleValue: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props: PropsType, ctx: SetupContext) {
    const toggle = () => {
      !props.disabled
          ? ctx.emit('update:toggleValue', !props.toggleValue)
          : null;
    };

    const checked = computed(() => {
      return props.toggleValue;
    });

    const openClose = computed(() => {
      return {
        open: props.toggleValue,
        close: !props.toggleValue,
      };
    });

    const showText = computed(() => {
      return props.toggleValue ? props.activeText : props.inactiveText;
    });

    return {
      toggle,
      checked,
      openClose,
      showText
    };

  }
});

</script>
