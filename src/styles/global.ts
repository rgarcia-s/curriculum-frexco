import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #121214;
    background: #f1f1f1;
  }

  body, input, button, textarea {
    font: 500 18px Roboto, sans-serif;
  }
`;
