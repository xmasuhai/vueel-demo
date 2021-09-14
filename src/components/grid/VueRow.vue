<template>
  <div class="vue-row"
       :style="rowStyle"
       :class="rowClass">
    <slot>
      <VueCol v-for="(item, index) in colData"
              :span="item.span"
              :offset="item.offset"
              :mobile="item.mobile"
              :pad="item.pad"
              :laptop="item.laptop"
              :pc="item.pc"
              :pcw="item.pcw"
              :pcx="item.pcx"
              :key="index">
      </VueCol>
    </slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, /*Provide,*/ Vue} from 'vue-property-decorator';
import VueCol from './VueCol.vue';

@Component({
  components: {VueCol}
})
export default class VueRow extends Vue {
  name = 'VueRow';
  @Prop({type: Array, default() {return [];}}) colData!: Record<string, any>;
  @Prop({
    type: [Number, String],
  }) gutter!: number | string;
  @Prop({
    type: String,
    default: 'center',
    validator(value: string): boolean {
      return (['', 'left', 'right', 'center', 'space-between', 'space-around']
        .includes(value));
    }
  }) align!: string;

  get rowStyle() {
    const {gutter} = this;
    // console.log('gutter in VueRow', gutter);
    if (this.gutter) {
      return {
        marginLeft: `${-gutter / 2}px`,
        marginRight: `${-gutter / 2}px`
      };
    }
    return {};
  }

  get rowClass() {
    const {align} = this;
    return [
      align && `align-${align}`
    ];
  }

  // Provide 传递 gutter 属性
  // @Provide('gutterToSon') gutterToSon = this.gutter;
  // 传递 gutter 属性
  gutterToCol() {
    const {$children, gutter} = this;
    // console.log('$children in VueRow', $children);
    if ($children && gutter) {
      $children.forEach((vm: Vue) => {
        const state = Vue.observable({gutter});
        Object.assign(vm, state);
        /*
        // const source = {'gutter': gutter};
        const source = {gutter};
        Object.assign(vm, source);
        */
        // (vm as any).gutter = gutter
        // Vue.set(vm,'gutter', gutter);
        // this.$set(vm, 'gutter', gutter);
      });
    }
  }

  mounted() {
    this.gutterToCol();
  }

}
</script>
