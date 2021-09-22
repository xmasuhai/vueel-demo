<template>
  <VueButtonGroup>
    <VueButton>1
    </VueButton>
    <VueButton>2
    </VueButton>
    <VueButton>3
    </VueButton>
  </VueButtonGroup>
</template>

<script>
import VueButton from '../../../../src/components/button/VueButton.vue'
import VueButtonGroup from '../../../../src/components/button/VueButtonGroup'

export default {
  name: 'group',
  components: {
    VueButton,
    VueButtonGroup
  }
}
</script>
