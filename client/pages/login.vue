<template>
  <div>
    <Navbar />
    <FullHeight>
      <Container>
        <Row>
          <Column>
            <Header4>Login</Header4>
            <Input
              v-model="localEmail"
              type="email"
              placeholder="Type your email."
              @input="handleLoginEmail"
            />
            <Input
              v-model="localPassword"
              placeholder="Type your password."
              type="password"
              @input="handleLoginPassword"
            />
            <Button @click="SignIn">Login</Button>
          </Column>
        </Row>
      </Container>
    </FullHeight>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapMutations, mapActions } from 'vuex'
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
  data: () => ({
    localEmail: '',
    localPassword: '',
  }),
  methods: {
    ...mapMutations({
      setLoginEmail: 'SET_LOGIN_EMAIL',
      setLoginPassword: 'SET_LOGIN_PASSWORD',
    }),
    ...mapActions({
      SignIn: 'SignIn',
    }),
    handleLoginEmail() {
      this.setLoginEmail(this.localEmail)
    },
    handleLoginPassword() {
      this.setLoginPassword(this.localPassword)
    },
  },
})
</script>
