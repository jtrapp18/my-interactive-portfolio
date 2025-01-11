import { NavLink } from "react-router-dom";
import styled, {css} from "styled-components";
import { Link } from "react-scroll";

const StyledMenuItem = css`
  color: black;
  text-decoration: none;
  position: relative;
  padding: 0px 10px 10px 10px;
  cursor: pointer;
`;

const StyledNavigation = css`
  ${StyledMenuItem}

  .tab-name {
    position: relative;
    display: flex;

    .backdrop {
      position: absolute;
      top: 30%;
      left: -10%;
      z-index: 1;
      height: 100%;
      width: 100%;
    }

    span {
      position: relative;
      z-index: 2;
    }
  }

  &.active {
    text-decoration: overline;
    text-decoration-thickness: 2px;

    .backdrop {
      background: var(--striped);;
    }
  }

  &:hover {
    color: var(--green);
  }
`;

const StyledNavLink = styled(NavLink)`
  ${StyledNavigation}
`

const StyledLink = styled(Link)`
  ${StyledNavigation}
`

const StyledMain = styled.main`
  display: flex;

  div {
    width: 100%;
  }

  article {
    padding-top: 20px;
    margin: 20px;

    h1 {
      margin: 0;
    }
  }
`

const ConditionalHighlight = css`
    &:hover {
        background-color: var(--light-peach);
    };
    
    &:focus {
        border: 3px solid var(--green);
        background-color: var(--light-green);
    }
    `

const StyledButton = styled.button`
    background-color: var(--green);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    font-size: 20px;
    font-family: 'Volkhov', sans-serif;

    &: hover {
      background: None;
      border: 3px solid var(--green);
      color: var(--green);
      font-weight: bold;
    }
`

const StyledForm = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 90%;
  align-items: center;
  background: white;
  padding: 30px;
  border-radius: 10px;
  border: 1px solid var(--gray);
  box-shadow: var(--shadow);

  h1 {
    margin: 0;
  }

  label {
    width: 100%;
    padding: 5px;
  }
  
  input, textarea {
    box-sizing: border-box;
    width: calc(100% - 5px);
    background: var(--light-gray);
    border: 2px solid var(--gray);
    margin-left: 5px;
    font-family: 'Volkhov', sans-serif;
    padding: 5px;
    border-radius: 5px;
    ${ConditionalHighlight};
  }

  textarea {
    height: 150px;
    max-height: 80%;
  }
`

const CardHover = css`
    &:hover {
        --background: var(--light-gray);
        
        color: var(--dark-green);

        h2 {
          text-shadow: 2px 2px 2px rgba(0, 0, 0, .4);
        }

        * {
            color: inherit;
        }
        // --primary: gray;
        // --h3: var(--light-gray);
        // --font-color: black;
    }
`

const CardStyling = css`
    ${CardHover};
    background: var(--background);
    box-shadow: var(--shadow);
    border-radius: 10px;
    height: 450px;
    max-height: 100%;
    overflow: hidden;
    margin: 20px;
    padding: 20px;
    position: relative;
    cursor: pointer;

    .language-tags {
      width: 90%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    span {
        top: 75%;
    }
  `
  const TypeAnimation = css`
    animation: typing 2s steps(30) 1s 1 normal both;
    white-space: nowrap;
    overflow: hidden;
  `

export { StyledMenuItem, StyledNavLink, StyledLink, StyledMain, StyledButton, StyledForm, CardHover, CardStyling, TypeAnimation }