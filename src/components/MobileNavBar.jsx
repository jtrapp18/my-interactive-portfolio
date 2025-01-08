import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { scrollToTop } from "../helper";
import { useState } from "react";

// Styled components

const StyledDiv = styled.div`
    height: 90px;
    position: relative;
    background: white;
    display: flex;
    border-bottom: 3px solid var(--green);
    justify-content: right;
    align-items: center;
`
const LinkContainer = styled.div`
  position: absolute;
  top: 65px;
  z-index: 1000;
  width: 90%;
  margin: 25px;
  font-weight: bold;
  text-decoration: none;
  text-align: right;
  background: white;
  border: 3px solid var(--green);
  border-top: None;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Ensures smooth animation */
  transform-origin: top; /* Animation starts at the top */
  transform: scaleY(0); /* Initially collapsed */
  transition: transform 0.3s ease-in-out; /* Smooth fold-out animation */

  &.open {
    transform: scaleY(1); /* Fully expanded */
    // transform: translateY(50%);
  }

  &.closed {
    transform: scaleY(0); /* Fully collapsed */
  }

  #exit {
    background: var(--gray);
    span {
      cursor: pointer;
      padding: 5px;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  border-top: 3px solid var(--green);
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(20px, 4vw, 30px);

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
  font-size: clamp(40px, 4vw, 50px);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

// MobileNavBar Component
const MobileNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClick = () => {
    scrollToTop(); // Custom click handler
    setIsMenuOpen(false); // Close menu after navigation
  };

  return (
    <StyledDiv>
      <LinkContainer className={isMenuOpen ? "open" : "closed"}>
        <StyledNavLink to="/" onClick={handleClick}>
          Home
        </StyledNavLink>
        <StyledNavLink to="/about" onClick={handleClick}>
          About Me
        </StyledNavLink>
        <StyledNavLink to="/projects" onClick={handleClick}>
          Projects
        </StyledNavLink>
        <StyledNavLink to="/relevant-work" onClick={handleClick}>
          Relevant Work
        </StyledNavLink>
      </LinkContainer>
      <HamburgerButton onClick={toggleMenu} aria-label="Toggle Menu">
        {isMenuOpen ? "✖" : "☰"}
      </HamburgerButton>
    </StyledDiv>
  );
};

export default MobileNavBar;