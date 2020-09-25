<template>
  <div>
    <Navbar />
    <FullHeight>
      <Container>
        <Row>
          <Column>
            <Header4>Add Gif.</Header4>
            <Input type="url" placeholder="Paste the Gif URL." />
            <Button>Add</Button>
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
})
</script>
