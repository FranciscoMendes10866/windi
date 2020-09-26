import styled from 'vue-styled-components'

const Input = styled.input`
  margin-bottom: 40px;
  margin-top: 20px;
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
  border-image-source: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
`

const Button = styled.button`
  background: linear-gradient(to top, #00c6fb 0%, #005bea 100%);
  padding-left: 50px;
  padding-right: 50px;
  font-family: 'Anonymous Pro', monospace;
  padding-top: 23px;
  padding-bottom: 23px;
  color: #fffffe;
  border: none;
  outline: none;
  font-size: 24px;
  font-weight: bold;
`

export { Button, Input }
