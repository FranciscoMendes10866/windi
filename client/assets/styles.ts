import styled from 'vue-styled-components'

const Wrapper = styled.body`
  margin-right: auto;
  margin-left: auto;
  max-width: 960px;
  padding-right: 10px;
  padding-left: 10px;
`

const Container = styled.div`
  display: flex;
  max-width: 960px;
`

const Hero = styled.section`
  background: #16161a;
`

const Headline = styled.h1`
  color: #fffffe;
`

const Paragraph = styled.p`
  color: #94a1b2;
`

const Button = styled.button`
  background: #7f5af0;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fffffe;
  border: none;
  shadow: none;
  font-size: 24px;
  font-weight: bold;
  border-radius: 4px;
`

export { Wrapper, Container, Hero, Headline, Paragraph, Button }
