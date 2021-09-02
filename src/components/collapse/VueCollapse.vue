<template>
  <div class="collapse">
    <slot>
      <VueCollapseItem v-for="(item, index) in itemsData"
                       :title="item.title"
                       :disabled="item.disabled"
                       :key="index">
      </VueCollapseItem>
      占位
    </slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
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

}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
  border-left: 1px solid $grey;
  border-right: 1px solid $grey;
  border-radius: $border-radius;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
}
</style>
