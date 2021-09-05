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
    type: String,
    default: ''
  }) selected!: string;
  @Prop({
    type: Boolean,
    default: false
  }) onlyShowSingle!: boolean;

  @Provide() eventBus = new Vue();
  @Provide() isAllShowSingle = this.onlyShowSingle;

  mounted() {
    this.eventBus.$emit('update:selected', this.selected);
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
