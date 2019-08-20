import global from '@codesandbox/common/lib/global.css';
import { createGlobalStyle, css } from 'styled-components';

import font from '../assets/inter/inter.css';

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  ${font}
  ${global}

  html,body, #root {
    background: #111518 !important;

    a {
      color: ${theme.white};
      text-decoration: none;
    }
  }

  html,
  body {
    font-family: 'Inter', sans-serif !important;
  }
`};
`;

export const theme = {
  white: '#ffffff',
  fadedWhite: 'rgba(255, 255, 255, 0.4)',
  yellow: '#F59300',
  green: '#30d158',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  darkWhite: 'rgba(255, 255, 255, 0.6)',
  black: '#000000',
};
