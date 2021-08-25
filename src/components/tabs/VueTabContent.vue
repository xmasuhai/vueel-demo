<template>
  <nav class="tab-content" v-bind="$attrs">
    <slot>
      <VueTabPane v-for="(item, index) in panesData"
                  :tab-name="item.paneName"
                  :key="index">
      </VueTabPane>
    </slot>
  </nav>
</template>

<script lang="ts">
import {Component, Inject, Prop, Vue} from 'vue-property-decorator';
import VueTabPane from './VueTabPane.vue';

@Component({
  components: {VueTabPane}
})
export default class VueTabContent extends Vue {
  name = 'VueTabContent';

  @Prop({type: Array, default() {return [];}}) panesData!: [];

  @Inject('eventBus') readonly eventBus!: Vue;

  checkSon() {
    if (this.$children.length === 0) {
      throw new Error('VueTab无子组件，子组件必须是 VueTabPane');
    }
  }

  mounted() {
    if (this.panesData.length === 0) {
      this.$emit('update:panesData', this.$attrs.propsToContent);
      // this.panesData = this.$attrs.propsToContent;
    }

    // this.checkSon();
  }

}
</script>

<style lang="scss" scoped>
.tab-content {
}
</style>
