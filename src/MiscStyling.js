import styled, {css} from "styled-components";

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

export { CardHover, CardStyling }