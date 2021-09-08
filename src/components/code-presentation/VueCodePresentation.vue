<template>
  <div>
    <form>
      <fieldset>
        <legend>{{ legendName }}</legend>
        <slot>
          <VueDetail v-for="item in detailsDataList"
                     :summaryString="item.summaryString"
                     :isOpen="item.isOpen"
                     :key="item.id">
          </VueDetail>
        </slot>
      </fieldset>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import VueDetail from './VueDetail.vue';

@Component({
  components: {
    VueDetail
  }
})

export default class VueCodePresentation extends Vue {
  name = 'VueCodePresentation';
  @Prop() legendName!: string;
  @Prop({
    type: Array,
    default: []
  }) detailsDataList!: detailsDataList;

}
</script>

<style lang="scss" scoped>

</style>
