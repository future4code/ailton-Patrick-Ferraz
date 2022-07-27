import React from 'react'
import Router from '../src/routes/Router'
import theme from './constants/theme';
import { ThemeProvider } from '@mui/material';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
