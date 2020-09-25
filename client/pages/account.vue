<template>
  <div>
    <Navbar />
    <Hero>
      <Container>
        <Row>
          <Column>
            <Header4>My Gifs</Header4>
            <Paragraph
              >Here you will find all the gifs that were published by you on
              platform.</Paragraph
            >
          </Column>
        </Row>
        <CardRow>
          <Card v-for="Gif in Gifs" :key="Gif.id">
            <Img :src="Gif.url" alt />
          </Card>
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
  Img,
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
    Img,
  },
  data: () => ({
    Gifs: [],
  }),
  mounted() {
    this.Fetch()
  },
  methods: {
    Fetch() {
      this.$axios
        .get('http://localhost:4000/api/v1/gifs/user', {
          headers: {
            Authorization: `Bearer ${this.$store.state.Token}`,
          },
        })
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .then((res: any) => {
          // eslint-disable-next-line no-console
          this.Gifs = res.data
        })
        // eslint-disable-next-line no-console
        .catch((error: Error) => console.log(error))
    },
  },
})
</script>
