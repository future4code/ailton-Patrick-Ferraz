import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import {StyledToolbar} from './styled'
import {goToFeed,goToLogin} from '../../routes/coordinator'
import {useNavigate} from 'react-router-dom'


const Header = ({rightButtonText, setRightButtonText}) => {
 const token = localStorage.getItem('token')
 const navigate = useNavigate()  

 const logout = () =>{
  localStorage.removeItem("token")
 }

 const rightButtonAction = () =>{
  if(token){
    logout()
    setRightButtonText("Login")
    goToLogin(navigate)
  } else {
    goToLogin(navigate)
  }
 }
    
  return (

      <AppBar position="static">
        <StyledToolbar>
           <Button onClick={() => goToFeed(navigate)} color="inherit">
            Labbedit
          </Button>
          <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
        </StyledToolbar>
      </AppBar>
 
  )
}

export default Header