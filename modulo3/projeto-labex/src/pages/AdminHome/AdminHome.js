import React, { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { backOnePage,goToCreateTripPage,goToTripDetails,goToLoginPage  } from '../../Routes/coordinator'
import { useRequestData } from '../../Hooks/useRequestData'
import { base_URL,aluno } from '../../constants/constants'
import useProtectedPage from '../../Hooks/useProtectedPage'
import axios from 'axios'
import Header from '../../constants/Header'
import Footer from '../../constants/Footer'
import { Body, Container } from '../../Components/components'


export default function AdminHome() {

  const navigate = useNavigate()
  const [trip,getTrips] =  useRequestData(`${base_URL}/${aluno}/trips`);
  const token = localStorage.getItem("token")
  const params = useParams();
  const tripId = params.id;
  

  useProtectedPage()


  const deleteTrip = (tripId) =>{
    axios.delete(`${base_URL}/${aluno}/trips/${tripId}`,{
      headers:{
        auth:token
      }
    }).then((res)=>{
      console.log(res.data)
      getTrips(`${base_URL}/${aluno}/trips`)
    })
    .catch((err)=>{
      console.log(err)
    })
  }


  
const tripList = trip && trip.map((trip)=>{
  return <div  key={trip.id}>
    <p>{trip.name}</p>
    <button onClick={()=>navigate(`/admin/trips/${trip.id}`)}>Ver Detalhes</button>
    <button onClick={()=>deleteTrip(trip.id)}>Delete</button>
  </div>
})

  return (
    <Container>
      <Header/>
      <Body>
      <h1>AdminHome</h1>
      <button onClick={()=>backOnePage(navigate)}>Voltar</button>
      <button onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</button>
      <button onClick={()=>goToLoginPage(navigate)}>Logout</button>
      <div>
      {tripList}
      </div>
      </Body>
      <Footer/>
      </Container>
  )
}