import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {scrollToTop} from "../helper"

const LinkContainer = styled.div`
  color: black;
  margin: 25px;
  font-weight: bold;
  text-decoration: none;
  text-align: right;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
`

const StyledNavLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    // text-align: center;
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
        onClick={scrollToTop}
      >
        About Me
      </StyledNavLink>
      <StyledNavLink
        to="/projects"
        className="nav-link"
        onClick={scrollToTop}
      >
        Projects
      </StyledNavLink>
      <StyledNavLink
        to="/relevant-work"
        className="nav-link"
        onClick={scrollToTop}
      >
        Relevant Work
      </StyledNavLink>
    </LinkContainer>
  );
};

export default NavLinks;