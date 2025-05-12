import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Roboto+Slab:wght@400;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Roboto Slab', serif;
    background-color: #1e1f26;
    color: #eaeaea;
    line-height: 1.6;
    background-image: url('/images/grain-texture.png'), linear-gradient(to bottom, #1e1f26, #2c2f36);
    background-size: cover;
    background-blend-mode: overlay;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
