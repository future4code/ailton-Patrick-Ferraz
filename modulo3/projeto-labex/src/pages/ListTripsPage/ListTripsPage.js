import React from 'react'
import { aluno, base_url } from '../../constants/constants'
import { useRequestData } from '../../Hooks/useRequestData'
import {CardTrips} from './styled'

export default function ListTripsPage(props) {

  const trips = useRequestData(`${base_url}/${aluno}/trips`);

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
    <div>
      <h1>Lista de viagens</h1>
      <button onClick={props.goToHomePage}>Voltar</button>
      <button onClick={props.goToApplicationFormPage}>Increver-se</button>
      {tripsList}
     
    </div>
  )
}
