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
import VueButton from '@/components/button/VueButton.vue'
import VueButtonGroup from '@/components/button/VueButtonGroup'

export default {
  name: 'group',
  components: {
    VueButton,
    VueButtonGroup
  }
}
</script>
