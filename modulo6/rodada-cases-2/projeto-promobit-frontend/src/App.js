import React from 'react';
import { ThemeProvider } from "@mui/material";
import Router from "./Router/Router";
import theme from './Constants/theme';

const  App = () => {
  return (
    <ThemeProvider theme = {theme} >
      <Router/>
    </ThemeProvider>
  );
}

export default App;
