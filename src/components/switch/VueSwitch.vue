<template>
  <div class="vue-switch-button-wrapper">
    <button class="vue-switch-button"
            :class="{checked}"
            @click="toggle">
      <span class="vue-switch-toggle"></span>
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from '@vue/composition-api';

export default defineComponent({
  name: 'VueSwitch',
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
