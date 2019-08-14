import { createGlobalStyle } from 'styled-components';

import global from '@codesandbox/common/lib/global.css';
import font from '../assets/inter/inter.css';

export const GlobalStyle = createGlobalStyle`
  ${font}
  ${global}

  html,body, #root {
    background: #111518 !important;

    a {
      color: ${props => props.theme.white};
      text-decoration: none;
    }
  }



  html, body {
   font-family: 'Inter' !important;
  }
`;

export const theme = {
  white: '#fff',
  fadedWhite: 'rgba(255, 255, 255, 0.4)',
  yellow: '#F59300',
  green: '#30d158',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  darkWhite: 'rgba(255, 255, 255, 0.6)',
  black: '#000',
};
