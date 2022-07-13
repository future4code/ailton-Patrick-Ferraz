import React from 'react'
import { useNavigate } from 'react-router-dom'
import useProtectedPage from '../../Hooks/useProtectedPage'
import { backOnePage } from '../../Routes/coordinator'

export default function CreateTripPage() {
  useProtectedPage()
  const navigate = useNavigate()
  return (
    <div>
      <h1>CreateTripPage</h1>
      <input placeholder='Nome da Viagem'/>
      <input placeholder='Escolha um planeta'/>
      <input placeholder='Data'/>
      <input placeholder='Descrição da viagem'></input>
      <input placeholder='Duração em dias'></input>
      <button onClick={()=>backOnePage(navigate)}>Voltar</button>
      <button>Criar</button>

    </div>
  )
}
