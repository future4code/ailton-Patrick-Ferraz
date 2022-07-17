import React, { useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { backOnePage,goToCreateTripPage,goToTripDetails,goToLoginPage  } from '../../Routes/coordinator'
import { useRequestData } from '../../Hooks/useRequestData'
import { base_URL,aluno } from '../../constants/constants'
import useProtectedPage from '../../Hooks/useProtectedPage'
import axios from 'axios'
import Header from '../../constants/Header'
import Footer from '../../constants/Footer'
import{BodyAdmin,TriplistAdmin,CardAdmin, DivBtn, Title,BtnCreateTrip,BtnBack,BtnLogout,BtnDelete,BtnDetails } from "./styled"


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
  return <TriplistAdmin  key={trip.id}>
    <p>{trip.name}</p>
    <BtnDetails onClick={()=>navigate(`/admin/trips/${trip.id}`)}>Ver Detalhes</BtnDetails>
    <BtnDelete  onClick={()=>deleteTrip(trip.id)}>Delete</BtnDelete>
  </TriplistAdmin>
})

  return (
      <div>
      <Header/>
      <BodyAdmin>
      <CardAdmin>
      <Title>AdminHome</Title>
      <DivBtn>
      <BtnBack onClick={()=>backOnePage(navigate)}>Voltar</BtnBack>
      <BtnCreateTrip onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</BtnCreateTrip>
      <BtnLogout onClick={()=>goToLoginPage(navigate)}>Logout</BtnLogout>
      </DivBtn>
      {tripList}
      </CardAdmin>
      </BodyAdmin>
      <Footer/>
    </div>
      
  )
}