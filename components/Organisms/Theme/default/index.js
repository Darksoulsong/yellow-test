import { createGlobalStyle } from 'styled-components';
import { experimentBrushScriptFontFace } from '@components';
import { colors } from './colors';
const themeProps = {
  colors,
};

const Global = createGlobalStyle`
  ${experimentBrushScriptFontFace}

  * {
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;    
    border: 0;   
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;                
    outline: 0 none;    
  }

  html,
  body {
    font-family: 'Roboto', sans-serif;
    color: ${colors.textColor};    
  }

  html {
    font-size: 62.5%;
  }

  body { font-size: 1.4rem; }  

  /* Hide Opera detach video popup button
  May remove other useful browser popups, inserted after "body" element. */
  html > div[style] {
    display: none !important;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-button {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  ::-webkit-scrollbar-track {
    background: #333;
    border: 0px none #ffffff;
    border-radius: 50px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  h1 {
    font-size: 42px;
  }

  h1, h2, h3 {
    margin: 0;
  }

  span {
    color: black;
  }

  input,
  button,
  textarea {
    outline: 0 none;
  }


  i {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* GLOBAL WIDE CLASSES */
  .hide-body-overflow {
    overflow: hidden;
    padding-right: 8px;
  } 

  a {
    color: ${({ theme }) => theme.colors.textColor};

    &:hover {
      color: ${({ theme }) => theme.colors.highlightColor};
    }    
  } 
`;

export default {
  themeProps,
  Global,
};
