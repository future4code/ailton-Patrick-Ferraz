import React from 'react'
import { Container,DivBtnHomePage } from './styledHome'
import { useNavigate } from 'react-router-dom'
import { goToListTripsPage,goToLoginPage } from '../../Routes/coordinator'

export default function HomePage() {
  const navigate = useNavigate()


  return (
    <Container>
      <h1>Home Page</h1>
      <DivBtnHomePage>
      <button onClick={()=>goToListTripsPage(navigate)}>Ver Viagens</button>
      <button onClick={()=>goToLoginPage(navigate)}>Login</button>
      </DivBtnHomePage>
     
    </Container>
  )
}
