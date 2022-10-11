import {red} from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    pallete: {
        primary:{
            main: '#556cd6',
        },
        secundery:{
            main:'#19857b',
        },
        error:{
            main:red.A400,
        },
    },
});

export default theme;