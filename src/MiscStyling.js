import styled, {css} from "styled-components";

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
        --background: var(--striped);
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

    span {
        top: 75%;
    }

    details div {
      display: flex;
      flex-direction: column;
    }

    details p {
      margin: 0;
      padding: 5px;
    }

    ${CardHover};

    details summary:hover {
        font-weight: bold;
    }

    &:has(details[open]) {
        padding-bottom: 120px;
    }

    &:has(details[open]) span {
        top: 55%;
    }

    section {
      bottom: 0px;
      height: 50%;
      position: relative;
      }
  `
  const TypeAnimation = css`
    animation: typing 2s steps(30) 1s 1 normal both;
    white-space: nowrap;
    overflow: hidden;
  `

export { StyledButton, StyledForm, CardHover, CardStyling, TypeAnimation }