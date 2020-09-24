<template>
  <Wrapper>
    <Nuxt />
  </Wrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import { Wrapper } from '../assets/styles'

export default Vue.extend({
  components: {
    Wrapper,
  },
})
</script>
