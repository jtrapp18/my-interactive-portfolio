import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.div`
  color: black;
  font-size: 20px;
  margin: 25px;
  font-weight: bold;
  text-decoration: none;
  text-align: right;
  position: absolute;
  right: 0;

&.active {
  text-decoration: overline;
}
`

const StyledNavLink = styled(NavLink)`
    color: black;
    font-size: 15px;
    margin: 25px;
    font-weight: bold;
    text-decoration: none;
    text-align: right;

    img {
        height: 30px;
        vertical-align: middle;
    }

    &.active {
        text-decoration: overline;
    }
`

function NavLinks() {
  return (
    <LinkContainer>
      <StyledNavLink
        to="/about"
        className="nav-link"
      >
        About
      </StyledNavLink>
      <StyledNavLink
        to="/projects"
        className="nav-link"
      >
        Projects
      </StyledNavLink>
      <StyledNavLink
        to="/relevant-work"
        className="nav-link"
      >
        Relevant Work
      </StyledNavLink>
    </LinkContainer>
  );
};

export default NavLinks;