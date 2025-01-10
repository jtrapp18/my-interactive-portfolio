import Logo from "./Logo";
import NavLinks from "./NavLinks"
import styled from "styled-components";

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

function NavBar() {
  return (
    <StyledNavBar>
      <article>
        <Logo />
        <NavLinks />
      </article>
    </StyledNavBar>
  );
};

export default NavBar;