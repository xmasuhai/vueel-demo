<template>
  <div class="collapse">
    <slot>
      <VueCollapseItem v-for="(item, index) in itemsData"
                       :title="item.title"
                       :disabled="item.disabled"
                       keepSingle="item.isSingle"
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
  }) itemsData!: [];
  @Prop({
    type: Array,
    default: () => ['']
  }) selectedArray!: Array<string>;
  @Prop({
    type: Boolean,
    default: false
  }) onlyShowSingle!: boolean;

  @Provide() eventBus = new Vue();
  @Provide() isAllShowSingle = this.onlyShowSingle;

  mounted() {
    this.eventBus.$emit('update:selected', this.selectedArray);

    this.eventBus.$on('add:selected', (title: string) => {
      let selectedArrayCopy = JSON.parse(JSON.stringify(this.selectedArray));
      if (this.isAllShowSingle) {
        selectedArrayCopy = [title];
      } else {
        selectedArrayCopy.push(title);
      }
      this.$emit('update:selected', selectedArrayCopy);
      this.eventBus.$emit('update:selected', selectedArrayCopy);
    });

    this.eventBus.$on('remove:selected', (title: string) => {
      const selectedArrayCopy = JSON.parse(JSON.stringify(this.selectedArray));
      const index = selectedArrayCopy.indexOf(title);
      selectedArrayCopy.splice(index, 1);
      this.$emit('update:selected', selectedArrayCopy);
      this.eventBus.$emit('update:selected', selectedArrayCopy);
    });
  }
}
</script>

<style lang="scss" scoped>
$grey: #999;
$border-radius: 4px;
.collapse {
  border: 1px solid $grey;
  border-radius: $border-radius;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>
