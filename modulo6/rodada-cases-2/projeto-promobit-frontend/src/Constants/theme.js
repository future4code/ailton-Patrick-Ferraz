import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e3f2fd'
    },
    secondary: {
      main: orange[500],
    },
  },
});

export default theme;