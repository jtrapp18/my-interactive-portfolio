import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LinkContainer = styled.div`
  color: black;
  margin: 25px;
  font-weight: bold;
  text-decoration: none;
  text-align: right;
  position: absolute;
  right: 0;
  display: flex;
`

const StyledNavLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    text-align: center;
    padding: 0px 10px 10px 10px;

    &.active {
        text-decoration: overline;
        text-decoration-thickness: 2px;
        background: var(--striped);
    }

    &:hover {
      color: var(--green);
    }
`

function NavLinks() {
  return (
    <LinkContainer>
      <StyledNavLink
        to="/about"
        className="nav-link"
      >
        About Me
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