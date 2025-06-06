import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-style: normal; /* prevent mobile fallback italics */
  }

  body {
    font-family: 'Roboto Slab', serif;
    font-style: normal;
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
