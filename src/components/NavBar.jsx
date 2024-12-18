import Logo from "./Logo";
import NavLinks from "./NavLinks"
import styled from "styled-components";

const StyledNavBar = styled.nav`
  position: fixed;
  background-color: white;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 10px 0px 0px 0px;
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