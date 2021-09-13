<template>
  <div class="vue-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component
export default class VueIcon extends Vue {
  name = 'VueButtonGroup';

  checkSon() {
    for (const node of Array.from(this.$el.children)) {
      const name = node.children[0].nodeName.toLowerCase();
      if (name !== 'button') {
        throw new Error(`vue-button-group 的子元素应该全是 VueButton， 但你写的是${name}`);
      }
    }

  }

  mounted() {
    this.checkSon();
  }
}
</script>
