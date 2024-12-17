import Logo from "./Logo";
import NavLinks from "./NavLinks"
import styled from "styled-components";

const StyledNavBar = styled.nav`
  position: fixed;
  padding-top: 10px;
  background-color: var(--green);
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 20px;
`;

function NavBar() {
  return (
    <StyledNavBar>
      <Logo />
      <NavLinks />
    </StyledNavBar>
  );
};

export default NavBar;