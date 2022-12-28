import { css } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;400;700&display=swap'),
      format('truetype');
  }

  body {
    margin: 0;
    line-height: 1.5;
    font-family: 'Montserrat', sans-serif;
  }
  code {
    font-family: 'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New',
      monospace;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  label,
  ul,
  p,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
