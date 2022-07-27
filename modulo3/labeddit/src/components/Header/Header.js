import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import {StyledToolbar} from './styled'
import {goToFeed,goToLogin} from '../../routes/coordinator'
import {useNavigate} from 'react-router-dom'


const Header = () => {

 const navigate = useNavigate()  
    
  return (

      <AppBar position="static">
        <StyledToolbar>
           <Button onClick={() => goToFeed(navigate)} color="inherit">
            Labbedit
          </Button>
          <Button onClick={() => goToLogin(navigate)} color="inherit">Login</Button>
        </StyledToolbar>
      </AppBar>
 
  )
}

export default Header