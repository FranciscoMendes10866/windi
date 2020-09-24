import styled from 'vue-styled-components'

const Wrapper = styled.html`
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600;700&display=swap');
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  line-height: 1.65;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0;
`

const Container = styled.div`
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 10px;
  padding-left: 10px;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Column = styled.div`
  flex-grow: 1;
  flex-basis: 500px;
`

const Hero = styled.section`
  background: #16161a;
  padding-top: 50px;
  padding-bottom: 50px;
`

const Header1 = styled.h1`
  color: #fffffe;
  margin: 2.75rem 0 1.05rem;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  line-height: 1.15;
  margin-top: 0;
  font-size: 3.052em;
`

const Header2 = styled.h2`
  color: #fffffe;
  margin: 2.75rem 0 1.05rem;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  line-height: 1.15;
  font-size: 2.441em;
`

const Header3 = styled.h3`
  color: #fffffe;
  margin: 2.75rem 0 1.05rem;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  line-height: 1.15;
  font-size: 1.953em;
`

const Header4 = styled.h4`
  color: #94a1b2;
  margin: 2.75rem 0 1.05rem;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  line-height: 1.15;
  font-size: 1.563em;
`

const Header5 = styled.h5`
  color: #fffffe;
  margin: 2.75rem 0 1.05rem;
  font-family: 'Work Sans', sans-serif;
  font-weight: 400;
  line-height: 1.15;
  font-size: 1.25em;
`

const Paragraph = styled.p`
  color: #94a1b2;
  margin-bottom: 1.15rem;
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

export {
  Wrapper,
  Container,
  Row,
  Column,
  Hero,
  Paragraph,
  Button,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
}
