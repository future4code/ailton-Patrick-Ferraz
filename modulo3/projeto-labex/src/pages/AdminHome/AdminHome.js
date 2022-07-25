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
import{TriplistAdmin,CardAdmin, DivBtn, Title,BtnAdminHome ,BtnDelete,BtnDetails,DivBtnTripDetails } from "./styled"


export default function AdminHome() {

  const navigate = useNavigate()
  const [trip,getTrips,isLoading] =  useRequestData(`${base_URL}/${aluno}/trips`);
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
    <strong>{trip.name}</strong>
    <DivBtnTripDetails>
    <BtnDetails onClick={()=>navigate(`/admin/trips/${trip.id}`)}>Ver Detalhes</BtnDetails>
    <BtnDelete  onClick={()=>deleteTrip(trip.id)}>Delete</BtnDelete>
    </DivBtnTripDetails>
  </TriplistAdmin>
})

  return (
      <Container>
      <Header/>
      <Body>
      <CardAdmin>
      <Title>Página do Administrador</Title>
      <DivBtn>
      <BtnAdminHome  onClick={()=>backOnePage(navigate)}>Voltar</BtnAdminHome>
      <BtnAdminHome  onClick={()=>goToCreateTripPage(navigate)}>Criar Viagem</BtnAdminHome>
      <BtnAdminHome  onClick={()=>goToLoginPage(navigate)}>Logout</BtnAdminHome>
      </DivBtn>
      {isLoading && <p>Carregando lista de viagens...</p>}
      {!isLoading && trip && trip.length > 0 && tripList }
      {!isLoading && trip && trip.length === 0 && (<strong>Não há viagens criadas. </strong>)}
      </CardAdmin>
      </Body>
      <Footer/>
    </Container>
      
  )
}