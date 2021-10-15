<template>
  <div class="vue-switch-button-wrapper">
    <button class="vue-switch-button"
            :class="{checked}"
            @click="toggle">
      <span class="vue-switch-toggle">
        <div v-show="!checked" class="close-line"></div>
        <template v-if="activeText">
          <div class="nut-switch-label open" v-show="checked">
            {{ activeText }}
          </div>
          <div class="nut-switch-label close" v-show="!checked">
            {{ inactiveText }}
          </div>
        </template>
      </span>

    </button>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from '@vue/composition-api';

export default defineComponent({
  name: 'VueSwitch',
  props: {
    activeText: {
      type: String,
      default: ''
    },
    inactiveText: {
      type: String,
      default: ''
    }
  },
  setup(/*props, ctx*/) {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return {
      checked,
      toggle
    };
  }
});
</script>
