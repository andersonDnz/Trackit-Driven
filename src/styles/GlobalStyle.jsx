import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-size: 16px;
  }

  body {
    font-family: 'Lexend Deca', sans-serif;
    background-color: #F2F2F2;
    align-items: center;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    max-width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #root {
    width: 100%;
    max-width: 500px; 
    padding: 16px;
    flex: 1;
}

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  input, button, textarea {
    font-family: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

export default GlobalStyle;
