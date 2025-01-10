import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {scrollToTop} from "../helper"

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

const StyledNavLink = styled(NavLink)`
    color: black;
    text-decoration: none;
    // text-align: center;
    position: relative;
    padding: 0px 10px 10px 10px;

    div {
      position: absolute;
      top: 30%;
      left: 0%;
      z-index: 1;
      height: 60%;
      width: 85%;
    }

    span {
      position: relative;
      z-index: 2;
    }

    &.active {
        text-decoration: overline;
        text-decoration-thickness: 2px;

        div {
          background: var(--striped);;
        }
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
        <span>about me</span>
        <div></div>
      </StyledNavLink>
      <StyledNavLink
        to="/projects"
        className="nav-link"
        onClick={scrollToTop}
      >
        <span>projects</span>
        <div></div>
      </StyledNavLink>
      <StyledNavLink
        to="/relevant-work"
        className="nav-link"
        onClick={scrollToTop}
      >
        <span>relevant work</span>
        <div></div>
      </StyledNavLink>
    </LinkContainer>
  );
};

export default NavLinks;