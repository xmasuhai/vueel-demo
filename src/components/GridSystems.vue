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
            <VueCol span="2">1/12</VueCol>
            <VueCol span="22">11/12</VueCol>
          </VueRow>
          <VueRow>
            <VueCol span="4">1/6</VueCol>
            <VueCol span="20">5/6</VueCol>
          </VueRow>
          <VueRow>
            <VueCol span="6">1/4</VueCol>
            <VueCol span="18">3/4</VueCol>
          </VueRow>
          <VueRow>
            <VueCol span="8">1/3</VueCol>
            <VueCol span="16">2/3</VueCol>
          </VueRow>
        </details>
      </fieldset>
    </form>
    <br>

    <form>
      <fieldset>
        <legend>Grid</legend>
        <details open>
          <summary>Other</summary>

        </details>
      </fieldset>
    </form>
    <br>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,} from 'vue-property-decorator';
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
