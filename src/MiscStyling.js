import styled, {css} from "styled-components";

const StyledMain = styled.main`
  display: flex;
  div {
    width: 100%;
  }

  article {
    padding-top: 20px;
    margin: 20px;

    i {
      color: blue;
    }
  }
`

const ConditionalHighlight = css`
    &:hover {
        background-color: var(--yellow);
    };
    
    &:focus {
        border: 3px solid var(--green);
        background-color: var(--yellow);
    }
    `

const StyledButton = styled.button`
    background-color: var(--green);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 200px;

    &: hover {
      background: None;
      border: 3px solid var(--green);
      color: var(--green);
      font-weight: bold;
    }
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 90%;
  max-width: 700px;
  min-width: 500px;
  align-items: center;

  label {
    width: 100%;
    position: relative;
    display: flex;
  }
  
  input, textarea {
    width: 80%;
    position: absolute;
    right: 0;
    ${ConditionalHighlight};
  }

  textarea {
    height: 200px;
  }
`

const CardHover = css`
    &:hover {
        --background: var(--light-green);
        // --primary: gray;
        // --h3: var(--light-gray);
        // --font-color: black;
    }
`

const CardStyling = css`
    background: var(--background);
    box-shadow: var(--shadow);
    border-radius: 10px;
    height: 450px;
    overflow: hidden;
    margin: 20px;
    padding: 20px;
    position: relative;
    cursor: pointer;

    span {
        top: 75%;
    }

    ${CardHover};

    section {
      bottom: 0px;
      height: 50%;
      position: relative;
      }
  `
  const TypeAnimation = css`
    animation: typing 3s steps(30) 1s 1 normal both;
    white-space: nowrap;
    overflow: hidden;
  `

export { StyledMain, StyledButton, StyledForm, CardHover, CardStyling, TypeAnimation }