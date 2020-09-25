<template>
  <div>
    <Navbar />
    <FullHeight>
      <Container>
        <Row>
          <Column>
            <Header4>Register</Header4>
            <Input
              v-model="localEmail"
              type="email"
              placeholder="Type your email."
              @input="handleRegisterEmail"
            />
            <Input
              v-model="localPassword"
              placeholder="Type your password."
              type="password"
              @input="handleRegisterPassword"
            />
            <Input
              v-model="localUsername"
              type="text"
              placeholder="Type your username."
              @input="handleRegisterUsername"
            />
            <Button @click="SignUp">Register</Button>
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
    localUsername: '',
  }),
  methods: {
    ...mapMutations({
      setRegisterEmail: 'SET_REGISTER_EMAIL',
      setRegisterPassword: 'SET_REGISTER_PASSWORD',
      setRegisterUsername: 'SET_REGISTER_USERNAME',
    }),
    ...mapActions({
      SignUp: 'SignUp',
    }),
    handleRegisterEmail() {
      this.setRegisterEmail(this.localEmail)
    },
    handleRegisterPassword() {
      this.setRegisterPassword(this.localPassword)
    },
    handleRegisterUsername() {
      this.setRegisterUsername(this.localUsername)
    },
  },
})
</script>
