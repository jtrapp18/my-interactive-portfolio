import { NavLink } from "react-router-dom";
import styled, {css} from "styled-components";
import { Link } from "react-scroll";

const mobileTheme = {
  background: '#0C0C13',
  cardBackground: '#16161D',
  cardHover: '#212D40',
  hoverText: '#F5F5F5',
  hoverTextH3: '#D66853',
  h1: '#C0C0C0',
  h2: '#D66853',
  h3: '#C0C0C0',
  p: 'white',
  i: '#FFD700',
  label: '#D3D3D3',
  span: '#D3D3D3',
  li: '#D3D3D3'
}

const windowTheme = {
  background: 'var(--background)',
  cardBackground: 'var(--background)',
  cardHover: 'var(--light-gray)',
  hoverText: 'var(--dark-green)',
  hoverTextH3: 'black',
  h1: 'var(--font-color-1)',
  h2: 'var(--font-color-2)',
  h3: 'var(--font-color-1)',
  p: 'var(--font-color-2)',
  i: 'blue',
  label: 'var(--green)',
  span: 'var(--font-color-2)',
  li: 'var(--font-color-2'
}

const StyledMenuItem = css`
  color: black;
  text-decoration: none;
  position: relative;
  padding: 0px 10px 0px 10px;
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
  background: ${(props) => props.theme.background};

  .main-content {
    margin: ${(props) => props.isMobile ? '0 0 20px 0' : '20px'};
  }

  .page-header {
    margin: 10px;
  }

  hr {
    border: ${(props) => props.isMobile ? 'solid .1px #383838' : ''};
  }

  h1 {
    color: ${(props) => (props.theme.h1)};
  }

  h2 {
    color: ${(props) => (props.theme.h2)};
  }

  h3 {
    color: ${(props) => (props.theme.h3)};
  }

  p {
    color: ${(props) => (props.theme.p)};
  }

  i {
    color: ${(props) => (props.theme.i)};
  }

  label {
    color: ${(props) => (props.theme.label)};
  }

  span {
    color: ${(props) => (props.theme.span)};
  }

  li {
    color: ${(props) => (props.theme.li)};
  }
`;

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
        background: ${(props) => props.theme.cardHover};
        
        color: ${(props) => props.theme.hoverText};

        h2 {
          text-shadow: 2px 2px 2px rgba(0, 0, 0, .4);
        }

        h3 {
          color: ${(props) => props.theme.hoverTextH3};
        }

        * {
            color: inherit;
        }
    }
`

const CardStyling = css`
    ${CardHover};

    margin: ${(props) => props.isMobile ? '5px 0px 5px 0px' : '10px'};
    background: ${(props) => props.theme.cardBackground};

    // h2 {
    //   text-shadow: 2px 2px 2px rgba(0, 0, 0, 1);
    // }

    border-radius: 10px;
    padding: 0;
    box-shadow: var(--shadow);
    max-height: 100%;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    h2, h3, p {
      margin: .5% 2.5% 0 2.5%;
    }

    .language-tags {
      background: inherit;
      width: 95%;
      padding: 0 2.5% 0 2.5%;
    }

    span {
        top: 75%;
    }
  `
  const TypeAnimation = css`
    animation: typing 3s steps(30) 1s 1 normal both;
    white-space: nowrap;
    overflow: hidden;
  `

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  transition: opacity 0.5s ease-in-out;

  background-color: ${({ opacity }) => `rgba(0, 0, 0, ${opacity || 0.8})`};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

export { mobileTheme, windowTheme, StyledMenuItem, StyledNavLink, StyledLink, StyledMain, 
  StyledButton, StyledForm, CardHover, CardStyling, TypeAnimation, Overlay }