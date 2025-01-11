import Logo from "./Logo";
import NavLinks from "./NavLinks"
import styled from "styled-components";
import {scrollToTop} from "../helper"

const StyledNavBar = styled.nav`
  width: 100%;
  height: 90px;

  article {
    background-color: white;
    height: 80%;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const LinkContainer = styled.div`
  color: black;
  margin: 25px;
  padding-right: 50px;
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
      <article>
        <Logo />
        <LinkContainer>
          <NavLinks handleClick={scrollToTop}/>
        </LinkContainer>
      </article>
    </StyledNavBar>
  );
};

export default NavBar;