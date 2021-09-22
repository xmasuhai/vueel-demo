<template>
  <div class="grid">
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
  </div>
</template>

<script>
import VueRow from '../../../../src/components/grid/VueRow.vue'
import VueCol from '../../../../src/components/grid/VueCol.vue'

export default {
  name: 'media-query',
  data() {
    return {
      clientWidth: document.body.clientWidth.toString(),
      mediaText: '',
      colData: [{span: 12}, {span: 12}]
    }
  },
  components: {
    VueRow,
    VueCol
  },
  watch: {
    clientWidth(val) {
      this.mediaText = val
    }
  },
  methods: {
    getDymClientWidth(value) {
      this.clientWidth = value
    }
  }

}
</script>

<style lang="scss" scoped>
@import './grid.scss';
</style>
