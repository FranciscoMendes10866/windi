<template>
  <NavWrapper>
    <Container>
      <Nav>
        <LeftUl>
          <Li>
            <Logo href="/">Windi</Logo>
          </Li>
        </LeftUl>
        <RightUl>
          <Li>
            <Anchor href="/">Home</Anchor>
          </Li>
          <Li>
            <Anchor href="/">Create</Anchor>
          </Li>
          <Li>
            <AuthAnchor href="/">Login</AuthAnchor>
          </Li>
          <Li>
            <AuthAnchor href="/">Register</AuthAnchor>
          </Li>
          <Li>
            <LogOutAnchor href="/">Logout</LogOutAnchor>
          </Li>
        </RightUl>
      </Nav>
    </Container>
  </NavWrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import { Container } from '../assets/main.styles'
import {
  Nav,
  LeftUl,
  RightUl,
  Li,
  Anchor,
  Logo,
  NavWrapper,
  AuthAnchor,
  LogOutAnchor,
} from '../assets/navbar.styles'

export default Vue.extend({
  components: {
    Container,
    NavWrapper,
    Nav,
    LeftUl,
    RightUl,
    Li,
    Anchor,
    Logo,
    AuthAnchor,
    LogOutAnchor,
  },
})
</script>
