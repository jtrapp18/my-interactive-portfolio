import Logo from "./Logo";
import NavLinks from "./NavLinks"
import styled from "styled-components";

const StyledNavBar = styled.nav`
  position: fixed;
  width: 100%;
  height: 90px;

  article {
    background-color: white;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
`;

const StyledDivider = styled.img`
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 200px;
`

function NavBar() {
  return (
    <StyledNavBar>
      <article>
        <Logo />
        <NavLinks />
      </article>
      <StyledDivider src="/images/dividers/leaf_divider.png" />
    </StyledNavBar>
  );
};

export default NavBar;