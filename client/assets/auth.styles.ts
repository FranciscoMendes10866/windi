import styled from 'vue-styled-components'

const Input = styled.input`
  font-family: 'Anonymous Pro', monospace;
  outline: none;
  font-size: 1.25em;
  padding: 20px 40px 20px 40px;
  text-decoration: none;
  background: transparent;
  font-weight: 600;
  color: white;
  text-align: center;
  border-bottom: 4px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);
`

const FullHeight = styled.section`
  background: #16161a;
  padding-top: 50px;
  padding-bottom: 50px;
  height: 72vh;
`

export { Input, FullHeight }
