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
        background-color: var(--light-green);
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
  border-radius: 20px;
  border: 1px solid var(--gray);

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
    max-height: 100%;
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