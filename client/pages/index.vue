<template>
  <div>
    <Navbar />

    <Hero>
      <Container>
        <Row>
          <Column>
            <Header1>This is the Header</Header1>
            <Paragraph
              >There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.</Paragraph
            >
            <Button>Get Started!</Button>
          </Column>
          <Column>
            <Header1>This is the Header</Header1>
            <Paragraph
              >There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.</Paragraph
            >
            <Button>Get Started!</Button></Column
          >
        </Row>
      </Container>
    </Hero>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  Container,
  Button,
  Header1,
  Paragraph,
  Hero,
  Column,
  Row,
} from '../assets/main.styles'
import Navbar from '../components/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar,
    Container,
    Button,
    Header1,
    Paragraph,
    Hero,
    Column,
    Row,
  },
})
</script>
