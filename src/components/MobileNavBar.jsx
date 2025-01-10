import { NavLink } from "react-router-dom";
import styled, {css} from "styled-components";
import { scrollToTop } from "../helper";
import { useState } from "react";
import Socials from "./Socials";

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
  top: 92px;
  left:0;
  z-index: 1000;
  width: 100%;
  font-weight: bold;
  text-decoration: none;
  text-align: right;
  background: white;
  border-bottom: 3px solid var(--green);
  display: flex;
  flex-direction: column;
  overflow: hidden; /* Ensures smooth animation */
  transform-origin: top; /* Animation starts at the top */
  transform: scaleY(0); /* Initially collapsed */
  transition: transform 0.3s ease-in-out; /* Smooth fold-out animation */

  &.open {
    transform: scaleY(1); /* Fully expanded */
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

const StyledMenuItem = css`
  color: black;
  text-decoration: none;
  border-top: 1px solid var(--light-green);
  height: 15vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-size: clamp(10px, 4vw, 20px);
`;

const StyledNavLink = styled(NavLink)`
  ${StyledMenuItem}

  &.active {
    text-decoration: overline;
    text-decoration-thickness: 2px;
    background: var(--striped);
  }

  &:hover {
    color: white;
    background: var(--green);
  }
`;

const StyledSocials = styled.div`
  ${StyledMenuItem}
  height: 10vh;
  background: var(--gray);
`

const HamburgerButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: black;
  font-size: clamp(40px, 4vw, 50px);
  cursor: pointer;
  padding-right: 15px;
  transition: transform 1s ease;

  @media (max-width: 768px) {
    display: block;
  }

  /* Rotate the button 180 degrees when the menu is open */
  &.open {
    transform: rotate(45deg);
  }

  .icon {
    display: inline-block;
    transition: transform 0.3s ease; /* Smooth transition for icon scale */

    /* Scale the icon to create a smooth change from ☰ to ✖ */
    &.open {
      transform: scale(1.1) rotate(45deg); /* Scale and rotate for the "X" */
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
          home
        </StyledNavLink>
        <StyledNavLink to="/about" onClick={handleClick}>
          about me
        </StyledNavLink>
        <StyledNavLink to="/projects" onClick={handleClick}>
          projects
        </StyledNavLink>
        <StyledNavLink to="/relevant-work" onClick={handleClick}>
          relevant work
        </StyledNavLink>
        <StyledSocials>
          <Socials />
        </StyledSocials>
      </LinkContainer>
      <HamburgerButton 
        className={isMenuOpen ? "open" : ""} 
        onClick={toggleMenu} 
        aria-label="Toggle Menu">
        <span className={`icon ${isMenuOpen ? "open" : ""}`}>
          {isMenuOpen ? "✕" : "☰"}
        </span>
      </HamburgerButton>
    </StyledDiv>
  );
};

export default MobileNavBar;