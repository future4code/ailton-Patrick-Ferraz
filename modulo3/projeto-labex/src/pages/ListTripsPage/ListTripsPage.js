import React, { useEffect } from 'react'
import { aluno, base_URL } from '../../constants/constants'
import { useRequestData } from '../../Hooks/useRequestData'
import {CardTrips} from './styled'
import { useNavigate } from 'react-router-dom'
import { backOnePage } from '../../Routes/coordinator'
import { goToApplicationFormPage } from '../../Routes/coordinator'
import Header from '../../constants/Header'
import Footer from '../../constants/Footer'
import { Body, ContainerDetails } from '../../Components/components'

export default function ListTripsPage(props) {

  useEffect(()=>{
    getTrips()
  },[])

  const navigate = useNavigate()

  const [trips,getTrips] = useRequestData(`${base_URL}/${aluno}/trips`);

  const tripsList = trips && trips.map((trip)=>{
    return <CardTrips key={trip.id}>
      <p>Nome: {trip.name}</p>
      <p>Descrição: {trip.description}</p>
      <p>Plante: {trip.planet}</p>
      <p>Duração: {trip.durationInDays}</p>
      <p>Dara: {trip.date}</p>
    </CardTrips>
  });

  return (
    <ContainerDetails>
      <Header/>
      <Body>
      <h1>Lista de viagens</h1>
      <button onClick={()=>backOnePage(navigate)}>Voltar</button>
      <button onClick={()=>goToApplicationFormPage(navigate)}>Increver-se</button>
      {tripsList}
      </Body>
      <Footer/>
     
    </ContainerDetails>
  )
}
