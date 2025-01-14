import Logo from "./Logo";
import NavLinks from "./NavLinks"
import styled from "styled-components";
import {scrollToTop} from "../helper"

const StyledNavBar = styled.nav`
  width: 100%;
  height: var(--height-header);
  background: white;
  border-bottom: 3px solid var(--green);
`;

const LinkContainer = styled.div`
  color: black;
  margin: 25px;
  padding-right: 20px;
  text-decoration: none;
  text-align: right;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
`

function NavBar() {
  return (
    <StyledNavBar>
        <Logo />
        <LinkContainer>
          <NavLinks handleClick={scrollToTop}/>
        </LinkContainer>
    </StyledNavBar>
  );
};

export default NavBar;