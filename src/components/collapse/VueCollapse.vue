<template>
  <div class="vue-collapse">
    <slot>
      <VueCollapseItem v-for="(item, index) in itemsData"
                       :title="item.title"
                       :isOpen="item.isOpen"
                       :disabled="item.disabled"
                       :key="index">
      </VueCollapseItem>
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
  }) itemsData!: Record<string, unknown>[];
  @Prop({
    type: Array,
    default: () => ['']
  }) selectedArray!: Array<string>;
  @Prop({
    type: Boolean,
    default: false
  }) onlyShowSingle!: boolean;

  @Provide() eventBus = new Vue();

  emitSelectedArrayToSon(selectedArray: Array<string>) {
    this.eventBus.$emit('update:selected', selectedArray);
  }

  emitSelectedArrayToAll(selectedArray: Array<string>) {
    // emit to parent component // selectedArray replace $event
    this.$emit('update:selectedArray', selectedArray);
    // emit to son by eventBus
    this.emitSelectedArrayToSon(selectedArray);
  }

  onSelectedArrayChange() {
    let selectedArrayCopy = JSON.parse(JSON.stringify(this.selectedArray));

    this.eventBus.$on('add:selected', (title: string) => {
      this.onlyShowSingle
        ? selectedArrayCopy = [title]
        : selectedArrayCopy.push(title);
      this.emitSelectedArrayToAll(selectedArrayCopy);
    });

    this.eventBus.$on('remove:selected', (title: string) => {
      const index = selectedArrayCopy.indexOf(title);
      selectedArrayCopy.splice(index, 1);
      this.emitSelectedArrayToAll(selectedArrayCopy);
    });

  }

  mounted() {
    this.emitSelectedArrayToSon(this.selectedArray);
    this.onSelectedArrayChange();
  }

}
</script>
