<template>
  <div>
    <VueCodePresentation legendName="Grid 栅格系统">
      <VueDetail summaryString="Average Span 均等">
        <VueRow>
          <VueCol>100%</VueCol>
        </VueRow>
        <VueRow>
          <VueCol>50%</VueCol>
          <VueCol>50%</VueCol>
        </VueRow>
        <VueRow>
          <VueCol>33.3%</VueCol>
          <VueCol>33.3%</VueCol>
          <VueCol>33.3%</VueCol>
        </VueRow>
        <VueRow>
          <VueCol>25%</VueCol>
          <VueCol>25%</VueCol>
          <VueCol>25%</VueCol>
          <VueCol>25%</VueCol>
        </VueRow>
      </VueDetail>
      <VueDetail summaryString="Uneven Span">
        <VueRow>
          <VueCol :span="2">1/12</VueCol>
          <VueCol :span="22">11/12</VueCol>
        </VueRow>
        <VueRow>
          <VueCol :span="4">1/6</VueCol>
          <VueCol :span="20">5/6</VueCol>
        </VueRow>
        <VueRow>
          <VueCol :span="6">1/4</VueCol>
          <VueCol :span="18">3/4</VueCol>
        </VueRow>
        <VueRow>
          <VueCol :span="8">1/3</VueCol>
          <VueCol :span="16">2/3</VueCol>
        </VueRow>
      </VueDetail>
      <VueDetail summaryString="With Gutter 间隔">
        <summary>gutter</summary>
        <VueRow :gutter="20">
          <VueCol :span="4">1/12</VueCol>
          <VueCol :span="20">5/6</VueCol>
        </VueRow>
        <VueRow :gutter="20">
          <VueCol>1/2</VueCol>
          <VueCol>1/2</VueCol>
        </VueRow>
        <VueRow :gutter="20">
          <VueCol>1/3</VueCol>
          <VueCol>1/3</VueCol>
          <VueCol>1/3</VueCol>
        </VueRow>
        <VueRow :gutter="20">
          <VueCol>1/4</VueCol>
          <VueCol>1/4</VueCol>
          <VueCol>1/4</VueCol>
          <VueCol>1/4</VueCol>
        </VueRow>
      </VueDetail>
      <VueDetail summaryString="Align 对齐">
        <VueRow :gutter="20">
          <VueCol :span="9">
            <VueRow align="left">
              <VueCol>1</VueCol>
              <VueCol>2</VueCol>
              <VueCol>3</VueCol>
              <VueCol>4</VueCol>
            </VueRow>
          </VueCol>
          <VueCol :span="15">
            <VueRow align="right">
              <VueCol>1</VueCol>
              <VueCol>2</VueCol>
              <VueCol>3</VueCol>
              <VueCol>4</VueCol>
              <VueCol>5</VueCol>
              <VueCol>6</VueCol>
              <VueCol>7</VueCol>
            </VueRow>
          </VueCol>
        </VueRow>
        <VueRow>
          <VueCol :span="4">
            <VueRow align="center">
              <VueCol>LOGO</VueCol>
            </VueRow>
          </VueCol>
          <VueCol :span="14">Main</VueCol>
          <VueCol :span="6">Aside</VueCol>
        </VueRow>
      </VueDetail>
      <VueDetail summaryString="Offset 偏移">
        <VueRow>
          <VueCol :span="2">1/12</VueCol>
          <VueCol :span="20" :offset="2">5/6 offset_2</VueCol>
        </VueRow>
        <VueRow>
          <VueCol :span="4">1/6</VueCol>
          <VueCol :span="18" :offset="2">5/6 offset_2</VueCol>
        </VueRow>
        <VueRow>
          <VueCol :span="4">1/6</VueCol>
          <VueCol :span="8" :offset="2">1/3 offset_2</VueCol>
          <VueCol :span="8" :offset="2">1/3 offset_2</VueCol>
        </VueRow>
        <VueRow>
          <VueCol :span="4">1/6</VueCol>
          <VueCol :span="4" :offset="6">1/6 offset_6</VueCol>
          <VueCol :span="8" :offset="2">1/3 offset_2</VueCol>
        </VueRow>
      </VueDetail>
    </VueCodePresentation>

    <VueCodePresentation legendName="media query 媒体查询">
      <VueDetail summaryString="适配屏幕">
        <VueRow>
          <VueCol :span="2"
                  :mobile="{span: 12}"
                  :pad="{span: 8}"
                  :laptop="{span: 6}"
                  :pc="{span: 4}"
                  :pcw="{span: 10}"
                  :pcx="{span: 1}">
            Aside
          </VueCol>
          <VueCol :span="18" :offset="2"
                  :mobile="{span: 12, offset: 0}"
                  :pad="{span: 16, offset: 0}"
                  :laptop="{span: 18, offset: 0}"
                  :pc="{span: 20, offset: 0}"
                  :pcw="{span: 12, offset: 2}"
                  :pcx="{span: 22, offset: 1}">
            Main
          </VueCol>
        </VueRow>
        <VueRow>
          <VueRow>
            <VueCol :span="6"
                    :mobile="{span: 24}"
                    :pc="{span: 6}"
                    @update:ClientWidth="getDymClientWidth">
              Aside: {{ clientWidth }}
            </VueCol>
            <VueCol :span="18"
                    :mobile="{span: 24}"
                    :pc="{span: 16, offset: 1}">
              Main
            </VueCol>
          </VueRow>
        </VueRow>
        <VueRow>
          <VueRow>
            <VueCol :span="24" :pad="{span: 12}" :laptop="{span: 8}" :pc="{span: 6}">mobile</VueCol>
            <VueCol :span="24" :pad="{span: 12}" :laptop="{span: 8}" :pc="{span: 6}">pad</VueCol>
            <VueCol :span="24" :pad="{span: 12}" :laptop="{span: 8}" :pc="{span: 6}">laptop</VueCol>
            <VueCol :span="24" :pad="{span: 12}" :laptop="{span: 8}" :pc="{span: 6}">pc</VueCol>
            <VueCol :span="24" :pad="{span: 12}" :laptop="{span: 8}" :pc="{span: 6}">no pcw</VueCol>
            <VueCol :span="24" :pad="{span: 12}" :laptop="{span: 8}" :pc="{span: 6}">no pcx</VueCol>
          </VueRow>
        </VueRow>
        <VueRow>
          <VueRow>
            <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">mobile</VueCol>
            <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">no pad</VueCol>
            <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">laptop</VueCol>
            <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">pc</VueCol>
            <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">pcw</VueCol>
            <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">no pcx</VueCol>
            <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">pcw</VueCol>
            <VueCol :span="24" :laptop="{span: 8}" :pc="{span: 6}" :pxw="{span: 4}">no pcx</VueCol>
          </VueRow>
        </VueRow>
        <VueRow>
          <VueCol>Mobile</VueCol>
          <VueCol>Mobile</VueCol>
          <VueCol>Mobile</VueCol>
          <VueCol>Mobile</VueCol>
          <VueCol>Mobile</VueCol>
          <VueCol>Mobile</VueCol>
          <VueCol>Mobile</VueCol>
          <VueCol>Mobile</VueCol>
          <VueCol>Mobile</VueCol>
          <VueCol>Mobile</VueCol>
          <VueCol>Mobile</VueCol>
          <VueCol>Mobile</VueCol>
        </VueRow>
      </VueDetail>
    </VueCodePresentation>

    <VueCodePresentation legendName="使用默认slot 并传递外部数据 colData">
      <VueDetail summaryString="">
        <VueRow :colData="colData"></VueRow>
      </VueDetail>
    </VueCodePresentation>

  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import VueRow from './grid/VueRow.vue';
import VueCol from './grid/VueCol.vue';
import VueDetail from './code-presentation/VueDetail.vue';
import VueCodePresentation from './code-presentation/VueCodePresentation.vue';

@Component({
  components: {
    VueRow,
    // 'VueRow': () => import('./grid/VueRow.vue'),
    VueCol,
    VueDetail,
    VueCodePresentation
  }
})
export default class GridSystems extends Vue {
  name = 'GridSystems';
  clientWidth = document.body.clientWidth.toString();
  mediaText = '';
  colData = [{span: 12}, {span: 12}];

  getDymClientWidth(value: string) {
    this.clientWidth = value;
  }

  @Watch('clientWidth')
  onClientWidthChange(val: string) {
    this.mediaText = val;
  }

}
</script>

<style lang="scss" scoped>
::v-deep {
  .vue-fieldset {
    .vue-details-content {
      > .vue-row {
        margin-bottom: 10px;
      }
    }
  }
}
</style>
