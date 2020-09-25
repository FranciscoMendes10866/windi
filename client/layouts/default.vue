<template>
  <Wrapper>
    <Nuxt />
  </Wrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import { Wrapper } from '../assets/main.styles'

export default Vue.extend({
  components: {
    Wrapper,
  },
})
</script>

<style>
.links {
  text-decoration: none;
  color: white;
  background: transparent;
}
* {
  background: #16161a;
}
</style>
