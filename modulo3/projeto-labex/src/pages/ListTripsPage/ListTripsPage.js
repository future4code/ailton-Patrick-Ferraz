import React, { useEffect } from 'react'
import { aluno, base_URL } from '../../constants/constants'
import { useRequestData } from '../../Hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import { backOnePage } from '../../Routes/coordinator'
import { goToApplicationFormPage } from '../../Routes/coordinator'
import Header from '../../constants/Header'
import Footer from '../../constants/Footer'
import { Body, Container } from '../../Components/components'
import { CardTripList,DivBtnTripPage,BtnListTrip,CardTrips,Title } from './styled'

export default function ListTripsPage() {

  useEffect(()=>{
    getTrips()
  },[])

  const navigate = useNavigate()

  const [trips,getTrips] = useRequestData(`${base_URL}/${aluno}/trips`);

  const tripsList = trips && trips.map((trip)=>{
    return <CardTrips key={trip.id}>
      <div>
      <p>Nome: {trip.name}</p>
      <p>Descrição: {trip.description}</p>
      <p>Plante: {trip.planet}</p>
      <p>Duração: {trip.durationInDays}</p>
      <p>Dara: {trip.date}</p>
      </div>
    </CardTrips>
  });

  return (
    <Container>
      <Header/>
      <Body>
        <CardTripList>
      <Title>Lista de viagens</Title>
      <DivBtnTripPage>
      <BtnListTrip onClick={()=>backOnePage(navigate)}>Voltar</BtnListTrip>
      <BtnListTrip onClick={()=>goToApplicationFormPage(navigate)}>Increver-se</BtnListTrip>
      </DivBtnTripPage>
      {tripsList}
      </CardTripList>
      </Body>
      <Footer/>
    </Container>
  )
}
