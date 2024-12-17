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

function NavLinks() {
  return (
    <LinkContainer>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className="nav-link"
      >
        Projects
      </NavLink>
      <NavLink
        to="/relevant-work"
        className="nav-link"
      >
        Relevant Work
      </NavLink>
    </LinkContainer>
  );
};

export default NavLinks;