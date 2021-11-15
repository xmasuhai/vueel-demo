<template>
  <div class="vue-collapse">
    <slot>
      <VueCollapseItem v-for="(item, index) in itemsData"
                       :title="item.title"
                       :isOpen="item.isOpen"
                       :disabled="item.disabled"
                       :key="index">
      </VueCollapseItem>
      占位
    </slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Provide, Vue} from 'vue-property-decorator';
import VueCollapseItem from './VueCollapseItem.vue';

@Component({
  components: {VueCollapseItem}
})
export default class VueCollapse extends Vue {
  name = 'VueCollapse';

  @Prop({
    type: Array,
    default() {return [];}
  }) itemsData!: Record<string, any>[];
  @Prop({
    type: Array,
    default: () => ['']
  }) selectedArray!: Array<string>;
  @Prop({
    type: Boolean,
    default: false
  }) onlyShowSingle!: boolean;

  @Provide() eventBus = new Vue();

  // to son by eventBus
  giveSelectedArrayToSon(selectedArray: Array<string>) {
    this.eventBus.$emit('update:selected', selectedArray);
  }

  updateSelectedArrayToAll(selectedArray: Array<string>) {
    // to parent
    this.$emit('update:selectedArray', selectedArray);
    // to son by eventBus
    this.giveSelectedArrayToSon(selectedArray);
  }

  monitorSelectedArray() {
    let selectedArrayCopy = JSON.parse(JSON.stringify(this.selectedArray));

    this.eventBus.$on('add:selected', (title: string) => {
      this.onlyShowSingle
        ? selectedArrayCopy = [title]
        : selectedArrayCopy.push(title);
      this.updateSelectedArrayToAll(selectedArrayCopy);
    });

    this.eventBus.$on('remove:selected', (title: string) => {
      const index = selectedArrayCopy.indexOf(title);
      selectedArrayCopy.splice(index, 1);
      this.updateSelectedArrayToAll(selectedArrayCopy);
    });

  }

  mounted() {
    this.giveSelectedArrayToSon(this.selectedArray);
    this.monitorSelectedArray();
  }

}
</script>
