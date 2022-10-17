import {red} from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';
import {orange} from '@mui/material/colors';

const theme = createTheme({
    pallete: {
        primary:{
            main:orange[400],
        },
        secundery:{
            main:'#e1f5fe',
        },
        error:{
            main:red.A400,
        },
    },
});

export default theme;