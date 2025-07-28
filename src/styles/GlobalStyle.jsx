import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Lexend Deca', sans-serif;
    background-color: #F2F2F2;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
