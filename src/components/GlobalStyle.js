import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 80px; }
  body {
    margin: 0;
    font-family: 'DM Sans', Arial, sans-serif;
    background: #171715;
    color: #f1eee7;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }
  ::selection { background: #d1a66b; color: #171715; }
  a { color: inherit; text-decoration: none; }
  button, a { -webkit-tap-highlight-color: transparent; }
  img { max-width: 100%; }
  :focus-visible { outline: 2px solid #d1a66b; outline-offset: 4px; }
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
  }
`;
export default GlobalStyle;
