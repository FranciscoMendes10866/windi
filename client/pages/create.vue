<template>
  <div>
    <Navbar />
    <FullHeight>
      <Container>
        <Row>
          <Column>
            <Header4>Add Gif.</Header4>
            <Input
              v-model="localURL"
              type="url"
              placeholder="Paste the Gif URL."
            />
            <Button @click="Create">Add</Button>
          </Column>
        </Row>
      </Container>
    </FullHeight>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Container, Header4, Column, Row } from '../assets/main.styles'
import { FullHeight } from '../assets/auth.styles'
import { Input, Button } from '../assets/create.styles'
import Navbar from '../components/Navbar.vue'

export default Vue.extend({
  components: {
    Navbar,
    Container,
    Header4,
    Column,
    Row,
    Input,
    Button,
    FullHeight,
  },
  data: () => ({
    localURL: '',
  }),
  methods: {
    async Create() {
      const componentState = { url: this.localURL }
      const send = await this.$axios.$post(
        'http://localhost:4000/api/v1/gifs',
        componentState,
        {
          headers: {
            Authorization: `Bearer ${this.$store.state.Token}`,
          },
        }
      )
      if (!send) {
        // eslint-disable-next-line no-console
        console.log('Add Gif Error.')
      } else {
        this.$router.push('/')
      }
    },
  },
})
</script>
