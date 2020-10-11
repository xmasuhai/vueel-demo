<template>
<div class="VueButton">
  <button class="vue-button">HI</button>
</div>
</template>

<script>
export default {
  props: {},
  data() {
    return {

    }
  },
  methods: {

  }
};
</script>

<style lang="scss">
:root{
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
  }

.vue-button {
  font-size: var(--font-size);
  height: var(--button-height);
  padding: 0 1em;
  font: inherit;
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  &:hover {
   border-color: var(--border-color-hover);
   }
  &:active {
    background-color: var(--button-active-bg);
    }
  &:focus {
    outline: none;
    }
  }
</style>
