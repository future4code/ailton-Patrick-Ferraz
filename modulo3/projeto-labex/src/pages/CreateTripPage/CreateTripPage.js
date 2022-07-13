import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../../Hooks/useProtectedPage'
import { backOnePage } from '../../Routes/coordinator'
import { aluno, base_URL } from '../../constants/constants'
import axios from 'axios'

export default function CreateTripPage() {
  useProtectedPage()
  const navigate = useNavigate()
  const [name,setName] = useState("")
  const [planet,setPlanet] = useState("")
  const [date,setDate] = useState("")
  const [description,setDescription] = useState("")
  const [duration,setDuration] = useState("")
  const token = localStorage.getItem("token")

  const handleName = (e) => {
    setName(e.target.value)
  }
  
  const handlePlanet = (e) =>{
    setPlanet(e.target.value)
  }

  const handleDate = (e) =>{
    setDate(e.target.value)
  }

  const handleDescription = (e) =>{
    setDescription(e.target.value)
  }

  const handleDuration = (e) =>{
    setDuration(e.target.value)
  }

const createTrip = () =>{
  const body ={
    name:name,
    planet:planet,
    date:date,
    description:description,
    durationInDays:duration
  }
  axios.post(`${base_URL}/${aluno}/trips`,body,{
    headers:{
      auth:token
    }
  })
  .then(()=>{
    alert('Viagem criada e cadastrada com sucesso!')
    setName("")
    setPlanet("")
    setDate("")
    setDescription("")
    setDuration("")
  })
  .catch(()=>{
    alert("Erro ao tentar criar viagem. Tente novamente!")
  })
}

  return (
    <div>
      <h1>CreateTripPage</h1>
      <input type={"text"} onChange={handleName} value={name} placeholder='Nome da Viagem'/>
      <input type={"text"} onChange={handlePlanet} value={planet} placeholder='Planeta'/>
      <input type={"date"} onChange={handleDate} value={date} min={new Date()} placeholder='Data'/>
      <input type={"text"} onChange={handleDescription} value={description} placeholder='Descrição da viagem'></input>
      <input type={"number"} onChange={handleDuration} value={duration} min={0} placeholder='Duração em dias'></input>
      <button onClick={()=>backOnePage(navigate)}>Voltar</button>
      <button onClick={createTrip}>Criar</button>

    </div>
  )
}
