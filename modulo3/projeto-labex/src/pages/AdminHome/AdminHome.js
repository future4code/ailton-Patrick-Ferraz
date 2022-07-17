import React from 'react'
import { useNavigate } from 'react-router-dom'
import { backOnePage,goToCreateTripPage,goToLoginPage  } from '../../Routes/coordinator'
import { useRequestData } from '../../Hooks/useRequestData'
import { base_URL,aluno } from '../../constants/constants'
import useProtectedPage from '../../Hooks/useProtectedPage'
import axios from 'axios'
import Header from '../../constants/Header'
import Footer from '../../constants/Footer'
import { Body,Container } from '../../Components/components'
import{TriplistAdmin,CardAdmin, DivBtn, Title,BtnCreateTrip,BtnBack,BtnLogout,BtnDelete,BtnDetails } from "./styled"


export default function AdminHome() {

  const navigate = useNavigate()
  const [trip,getTrips] =  useRequestData(`${base_URL}/${aluno}/trips`);
  const token = localStorage.getItem("token")

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
    <div>
    <BtnDetails onClick={()=>navigate(`/admin/trips/${trip.id}`)}>Ver Detalhes</BtnDetails>
    <BtnDelete  onClick={()=>deleteTrip(trip.id)}>Delete</BtnDelete>
    </div>
  </TriplistAdmin>
})

  return (
      <Container>
      <Header/>
      <Body>
      <CardAdmin>
      <Title>AdminHome</Title>
      <DivBtn>
      <BtnBack onClick={()=>backOnePage(navigate)}>Voltar</BtnBack>
      <BtnCreateTrip onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</BtnCreateTrip>
      <BtnLogout onClick={()=>goToLoginPage(navigate)}>Logout</BtnLogout>
      </DivBtn>
      {tripList}
      </CardAdmin>
      </Body>
      <Footer/>
    </Container>
      
  )
}