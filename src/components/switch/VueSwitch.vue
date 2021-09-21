<template>
  <div>
    <button :class="{checked}"
            @click="toggle">
      <span></span>
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

<style lang="scss" scoped>
@use "sass:math";

$h: 22px;
$h2: $h - 4px;

button {
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: math.div($h, 2);
  position: relative;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: math.div($h2, 2);
    transition: left .25s;
  }

  &.checked {
    background-color: dodgerblue;

    & > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

}
</style>
