import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { handleTabClick } from "../helper";
import { useState } from "react";

// Styled components
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
  background: white;
  border: 1px solid var(--gray);

  @media (max-width: 768px) {
    flex-direction: column;
    position: relative;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
//   padding: 0px 10px 10px 10px;
  border-bottom: 1px solid var(--gray);

  &.active {
    text-decoration: overline;
    text-decoration-thickness: 2px;
    background: var(--striped);
  }

  &:hover {
    color: white;
    background: var(--green);
  }

  @media (max-width: 768px) {
    padding: 10px 0;
    text-align: center;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: black;
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Hamburger Button */}
      <HamburgerButton onClick={toggleMenu}>
        &#9776;
      </HamburgerButton>

      {/* Links container with conditional rendering based on menu state */}
      <LinkContainer style={{ display: isMenuOpen ? "flex" : "none" }}>
        <StyledNavLink to="/" onClick={handleTabClick}>
          Home
        </StyledNavLink>
        <StyledNavLink to="/about" onClick={handleTabClick}>
          About Me
        </StyledNavLink>
        <StyledNavLink to="/projects" onClick={handleTabClick}>
          Projects
        </StyledNavLink>
        <StyledNavLink to="/relevant-work" onClick={handleTabClick}>
          Relevant Work
        </StyledNavLink>
      </LinkContainer>
    </div>
  );
};

export default MobileNavBar;
