import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { App } from './App';
import { GlobalStyle, theme } from './utils/global';

const Main: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />

      <App />
    </>
  </ThemeProvider>
);

ReactDOM.render(<Main />, document.getElementById('root'));
