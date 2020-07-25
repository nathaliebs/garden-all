import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import MainRouter from './routes/MainRouter'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#F37774',
    },
    secondary: {
      main: '#1B2A56',
    },
  },
  typography: {
    fontFamily: ['Montserrat'].join(','),
    h1: {
      fontSize: 69,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 53,
      fontWeight: 300,
    },
    h3: {
      fontSize: 40,
      fontWeight: 300,
    },
    h4: {
      fontSize: 31,
    },
    h5: {
      fontSize: 24,
    },
    h6: {
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontSize: 16,
      letterSpacing: 1.04,
      lineHeight: 1.25,
    },
    subtitle2: {
      fontSize: 13,
      letterSpacing: 0.58,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.51,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.51,
      fontWeight: 300,
    },
    button: {
      fontSize: 12,
      letterSpacing: 0.6,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 12,
      fontWeight: 300,
    },
    overline: {
      fontSize: 12,
      fontWeight: 300,
      lineHeight: 2,
    },
  },
});


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App