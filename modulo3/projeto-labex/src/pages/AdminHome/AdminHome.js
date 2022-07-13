import React, { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { backOnePage,goToCreateTripPage,goToTripDetails,goToLoginPage  } from '../../Routes/coordinator'
import { useRequestData } from '../../Hooks/useRequestData'
import { base_URL,aluno } from '../../constants/constants'
import useProtectedPage from '../../Hooks/useProtectedPage'
import axios from 'axios'

export default function AdminHome() {

  const navigate = useNavigate()
  const trip =  useRequestData(`${base_URL}/${aluno}/trips`);
  const token = localStorage.getItem("token")
  const params = useParams();
  const idTrip = params.id;

  useProtectedPage()

  const deleteTrip = () =>{
    axios.delete(`${base_URL}/${aluno}/trips/${idTrip}`,{
      headers:{
        auth:token
      }
    }).then((res)=>{
      console.log(res.data)
      
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  
const tripList = trip && trip.map((trip)=>{
  return <div  key={trip.id}>
    <p>{trip.name}</p>
    <button onClick={()=>navigate(`/admin/trips/${trip.id}`)}>Ver Detalhes</button>
    <button onClick={()=>deleteTrip()}>Delete</button>
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