<template>
  <div>
    <Navbar />
    <Hero>
      <Container>
        <Row>
          <Column>
            <Header4>Latest</Header4>
            <Paragraph
              >Here you will find the gifs that were most recently added to the
              platform.</Paragraph
            >
          </Column>
        </Row>
        <CardRow>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardRow>
      </Container>
    </Hero>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  Container,
  Header4,
  Paragraph,
  Hero,
  Column,
  Row,
  CardRow,
  Card,
} from '../assets/main.styles'
import Navbar from '../components/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar,
    Container,
    Header4,
    Paragraph,
    Hero,
    Column,
    Row,
    CardRow,
    Card,
  },
})
</script>
