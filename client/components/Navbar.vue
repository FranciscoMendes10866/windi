<template>
  <NavWrapper>
    <Container>
      <Nav>
        <LeftUl>
          <Li>
            <Logo><nuxt-link class="links" to="/">Windi</nuxt-link> </Logo>
          </Li>
        </LeftUl>
        <RightUl>
          <Li>
            <Anchor><nuxt-link class="links" to="/">Home</nuxt-link> </Anchor>
          </Li>
          <Li v-if="hasToken">
            <Anchor
              ><nuxt-link class="links" to="/create">Create</nuxt-link>
            </Anchor>
          </Li>
          <Li v-if="!hasToken">
            <AuthAnchor
              ><nuxt-link class="links" to="/login">Login</nuxt-link>
            </AuthAnchor>
          </Li>
          <Li v-if="!hasToken">
            <AuthAnchor
              ><nuxt-link class="links" to="/register">register</nuxt-link>
            </AuthAnchor>
          </Li>
          <Li v-if="hasToken">
            <AuthAnchor
              ><nuxt-link class="links" to="/account">Account</nuxt-link>
            </AuthAnchor>
          </Li>
          <Li v-if="hasToken">
            <LogOutAnchor @click="LogOut">Logout</LogOutAnchor>
          </Li>
        </RightUl>
      </Nav>
    </Container>
  </NavWrapper>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions } from 'vuex'
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
  computed: {
    ...mapGetters({
      userName: 'userName',
      hasToken: 'hasToken',
    }),
  },
  methods: {
    ...mapActions({
      LogOut: 'LogOut',
    }),
  },
})
</script>
