<template>
  <div class="vue-switch-button-wrapper">
    <button class="vue-switch-button"
            :class="{['vue-switch-checked']: checked}"
            @click="toggle"
            type="button">
      <span class="vue-switch-toggle">
        <div v-show="!toggleValue"
             class="vue-switch-close-line">
        </div>
        <template v-if="activeText">
          <div class="vue-switch-label vue-switch-open" v-show="toggleValue">
            {{ activeText }}
          </div>
          <div class="vue-switch-label vue-switch-close" v-show="!toggleValue">
            {{ inactiveText }}
          </div>
        </template>
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, SetupContext} from '@vue/composition-api';

interface PropsType {
  activeText?: string;
  inactiveText?: string;
  toggleValue?: boolean;
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
    }
  },
  setup(props: PropsType, ctx: SetupContext) {
    const checked = computed(() => {
      return props.toggleValue;
    });

    const toggle = () => {
      ctx.emit('update:toggleValue', !props.toggleValue);
    };

    return {
      checked,
      toggle
    };
  }
});
</script>
