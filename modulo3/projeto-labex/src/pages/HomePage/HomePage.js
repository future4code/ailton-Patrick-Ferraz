import React from 'react'
import { Container,DivBtnHomePage } from './styledHome'

export default function HomePage(props) {
  return (
    <Container>
      <h1>Home Page</h1>
      <DivBtnHomePage>
      <button onClick={props.goToListTripsPage}>Ver Viagens</button>
      <button>Área de Admin</button>
      </DivBtnHomePage>
     
    </Container>
  )
}
