<template>
  <div>
    <Navbar />
    <FullHeight>
      <Container>
        <Row>
          <Column>
            <Header4>Register</Header4>
            <Input type="email" placeholder="Type your email." />
            <Input type="password" placeholder="Type your password." />
            <Button>Register</Button>
          </Column>
        </Row>
      </Container>
    </FullHeight>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Container, Header4, Column, Row, Button } from '../assets/main.styles'
import { Input, FullHeight } from '../assets/auth.styles'
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
