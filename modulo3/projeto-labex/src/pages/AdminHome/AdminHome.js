import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { backOnePage,goToCreateTripPage,goToTripDetails,goToLoginPage  } from '../../Routes/coordinator'
import { useRequestData } from '../../Hooks/useRequestData'
import { base_URL,aluno } from '../../constants/constants'

export default function AdminHome() {
  const navigate = useNavigate()
  const trip = useRequestData(`${base_URL}/${aluno}/trips`);
  
const tripList = trip && trip.map((trip)=>{
  return <div  key={trip.id}>
    <p>{trip.name}</p>
    <button onClick={()=>goToTripDetails(navigate)}>Ver Detalhes</button>
    <button>Delete</button>
  </div>
})

  return (
    <div>
      <h1>AdminHome</h1>
      <button onClick={()=>backOnePage(navigate)}>Voltar</button>
      <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={()=>goToLoginPage(navigate)}>Logout</button>
      <div>
      {tripList}
      </div>
      </div>
  )
}
 