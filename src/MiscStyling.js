import { NavLink } from "react-router-dom";
import styled, {css} from "styled-components";
import { Link } from "react-scroll";

const mobileTheme = {
  background: 'black',
  cardBackground: '#333333',
  h1: '#DDA334',
  h2: 'white',
  h3: '#27AE60',
  p: '#7D8187',
  i: '#2980B9'
}

const windowTheme = {
  background: 'var(--background)',
  cardBackground: 'var(--background)',
  h1: 'var(--font-color-1)',
  h2: 'var(--font-color-2)',
  h3: 'var(--font-color-1)',
  p: 'var(--font-color-2)',
  i: 'blue'
}

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
  background: ${(props) => props.isMobile ? mobileTheme.background : windowTheme.background};
  h1 {
    color: ${(props) => (props.isMobile ? mobileTheme.h1 : windowTheme.h1)};
  }
  h2 {
    color: ${(props) => (props.isMobile ? mobileTheme.h2 : windowTheme.h2)};
  }
  h3 {
    color: ${(props) => (props.isMobile ? mobileTheme.h3 : windowTheme.h3)};
  }
  p {
    color: ${(props) => (props.isMobile ? mobileTheme.p : windowTheme.p)};
  }

  i {
    color: ${(props) => (props.isMobile ? mobileTheme.i : windowTheme.i)};
  }

  .main-content {
    width: 100%;
    margin: ${(props) => props.isMobile ? '0px' : '20px'};
  }

  .page-header {
    padding: 10px;

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
    }
`

const CardStyling = css`
    ${CardHover};
    border-radius: ${(props) => props.isMobile ? '0px' : '10px'};
    width: ${(props) => props.isMobile ? '100%' : 'auto'};
    margin: ${(props) => props.isMobile ? '5px 0px 5px 0px' : '5px'};
    background: ${(props) => props.isMobile ? mobileTheme.cardBackground : windowTheme.cardBackground};

    padding: 0;
    box-shadow: var(--shadow);
    height: 500px;
    max-height: 100%;
    overflow: hidden;
    position: relative;
    cursor: pointer;

    h2, h3, p {
      margin: 2.5% 2.5% 0px 2.5%;
    }

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
    animation: typing 2.5s steps(30) 1s 1 normal both;
    white-space: nowrap;
    overflow: hidden;
  `

export { StyledMenuItem, StyledNavLink, StyledLink, StyledMain, StyledButton, StyledForm, CardHover, CardStyling, TypeAnimation }