import styled from 'vue-styled-components'

const NavWrapper = styled.section`
  background: #16161a;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`
const LeftUl = styled.ul`
  list-style-type: none;
  padding: 0;
`

const RightUl = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  padding: 0;
`

const Li = styled.li``

const Logo = styled.a`
  text-decoration: none;
  text-align: center;
  color: #fffffe;
  display: block;
  padding: 10px;
  font-weight: 800;
  font-size: 1.563em;
  margin: 0;
`

const Anchor = styled.a`
  text-decoration: none;
  text-align: center;
  color: #fffffe;
  display: block;
  padding: 10px;
  font-weight: 600;
  border-bottom: 4px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #d4fc79, #38f9d7);
  margin-right: 10px;
`

const AuthAnchor = styled.a`
  text-decoration: none;
  text-align: center;
  color: #fffffe;
  display: block;
  padding: 10px;
  font-weight: 600;
  background-image: linear-gradient(
    -225deg,
    #3d4e81 0%,
    #5753c9 48%,
    #6e7ff3 100%
  );
  margin-right: 10px;
`

const LogOutAnchor = styled.button`
  border: none;
  font-family: 'Anonymous Pro', monospace;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  color: #fffffe;
  display: block;
  padding: 16px;
  font-weight: 600;
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
`

export {
  Nav,
  LeftUl,
  RightUl,
  Li,
  Anchor,
  Logo,
  NavWrapper,
  AuthAnchor,
  LogOutAnchor,
}
