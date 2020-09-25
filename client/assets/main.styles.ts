import styled from 'vue-styled-components'

const Wrapper = styled.html`
  @import url('https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&display=swap');
  font-family: 'Anonymous Pro', monospace;
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
`

const CardRow = styled.div`
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
  font-family: 'Anonymous Pro', monospace;
  font-weight: 400;
  line-height: 1.15;
  margin-top: 0;
  font-size: 3.052em;
`

const Header2 = styled.h2`
  color: #fffffe;
  margin: 2.75rem 0 1.05rem;
  font-family: 'Anonymous Pro', monospace;
  font-weight: 400;
  line-height: 1.15;
  font-size: 2.441em;
`

const Header3 = styled.h3`
  color: #fffffe;
  margin: 2.75rem 0 1.05rem;
  font-family: 'Anonymous Pro', monospace;
  font-weight: 400;
  line-height: 1.15;
  font-size: 1.953em;
`

const Header4 = styled.h4`
  color: #fffffe;
  margin: 2.75rem 0 1.05rem;
  font-family: 'Anonymous Pro', monospace;
  font-weight: 400;
  line-height: 1.15;
  font-size: 1.563em;
`

const Header5 = styled.h5`
  color: #fffffe;
  margin: 2.75rem 0 1.05rem;
  font-family: 'Anonymous Pro', monospace;
  font-weight: 400;
  line-height: 1.15;
  font-size: 1.25em;
`

const Paragraph = styled.p`
  color: #94a1b2;
  margin-bottom: 1.15rem;
`

const Button = styled.button`
  background: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #fffffe;
  border: none;
  outline: none;
  font-size: 24px;
  font-weight: bold;
`

const Card = styled.div`
  min-width: 250px;
  height: 400px;
  width: 320px;
  margin-top: 50px;
  margin-left: 10px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 100%;
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
  CardRow,
  Card,
  Img,
}
