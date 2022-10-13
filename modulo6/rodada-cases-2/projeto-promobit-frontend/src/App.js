import React from 'react';
import { ThemeProvider } from "@mui/material";
import Router from "./Router/Router";
import theme from './Constants/theme';
import { GlobalStyled } from './Global/GlobalStyled';

const  App = () => {
  return (
    <ThemeProvider theme = {theme} >
      <GlobalStyled/>
      <Router/>
    </ThemeProvider>
  );
}

export default App;
