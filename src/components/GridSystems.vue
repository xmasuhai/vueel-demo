<template>
  <div>
    <form>
      <fieldset>
        <legend>Grid</legend>
        <details open>
          <summary>Average Span</summary>
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
        </details>
      </fieldset>
    </form>
    <br>

    <form>
      <fieldset>
        <legend>Grid</legend>
        <details open>
          <summary>Different Span</summary>
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
        </details>
      </fieldset>
    </form>
    <br>

    <form>
      <fieldset>
        <legend>Grid</legend>
        <details open>
          <summary>Offset</summary>
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
        </details>
      </fieldset>
    </form>
    <br>

    <form>
      <fieldset>
        <legend>Grid</legend>
        <details open>
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
        </details>
      </fieldset>
    </form>
    <br>

    <form>
      <fieldset>
        <legend>Grid</legend>
        <details open>
          <summary>align</summary>
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
        </details>
      </fieldset>
    </form>
    <br>

    <form>
      <fieldset>
        <legend>Grid</legend>
        <details open>
          <summary>@media</summary>
          <VueRow>
            <VueCol :span="2"
                    :mobile="{span: 12}">
              Aside
            </VueCol>
            <VueCol :span="18" :offset="2"
                    :mobile="{span: 12, offset: 0}">
              Main
            </VueCol>
          </VueRow>
        </details>
      </fieldset>
    </form>
    <br>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import VueCol from './grid-system/VueCol.vue';
import VueRow from './grid-system/VueRow.vue';

@Component({
  components: {
    VueCol,
    VueRow
  }
})
export default class GridSystems extends Vue {
  name = 'GridSystems';
}
</script>

<style lang="scss" scoped>
details {

  ::-webkit-scrollbar {
    display: none;
  }

  // BFC isolated margin
  overflow: hidden;

  > div:not(last-child) {
    padding: 16px 0;
  }
}
</style>
