<template>
  <Hero>
    <Container>
      <Header1>This is the Header</Header1>
      <Paragraph
        >There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which don't look even slightly believable.</Paragraph
      >
      <Button>Get Started!</Button>
    </Container>
  </Hero>
</template>

<script lang="ts">
import Vue from 'vue'
import { Container, Button, Header1, Paragraph, Hero } from '../assets/styles'

export default Vue.extend({
  components: {
    Container,
    Button,
    Header1,
    Paragraph,
    Hero,
  },
})
</script>
