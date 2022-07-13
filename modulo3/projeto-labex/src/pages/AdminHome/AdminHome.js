import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { backOnePage,goToCreateTripPage,goToTripDetails,goToLoginPage  } from '../../Routes/coordinator'
import { useRequestData } from '../../Hooks/useRequestData'
import { base_URL,aluno } from '../../constants/constants'
import useProtectedPage from '../../Hooks/useProtectedPage'

export default function AdminHome() {
  useProtectedPage()
  const navigate = useNavigate()
  const trip = useRequestData(`${base_URL}/${aluno}/trips`);
  
const tripList = trip && trip.map((trip)=>{
  return <div  key={trip.id}>
    <p>{trip.name}</p>
    <button onClick={()=>navigate(`/admin/trips/${trip.id}`)}>Ver Detalhes</button>
    <button>Delete</button>
  </div>
})
console.log(trip)
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