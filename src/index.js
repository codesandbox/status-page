import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './utils/global'

const theme = {
  white: '#fff',
  fadedWhite: 'rgba(255, 255, 255, 0.4)',
  yellow: '#F59300',
  green: '#30d158',
  transparentWhite: 'rgba(255, 255, 255, 0.2)',
  darkWhite: 'rgba(255, 255, 255, 0.6)',
  black: '#000'
}

const Main = () => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <App />
    </>
  </ThemeProvider>
)

ReactDOM.render(<Main />, document.getElementById('root'))
