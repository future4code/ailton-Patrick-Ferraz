import React from 'react'
import { useNavigate } from 'react-router-dom'
import { backOnePage } from '../../Routes/coordinator'

export default function CreateTripPage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>CreateTripPage</h1>
      <button onClick={()=>backOnePage(navigate)}>Voltar</button>
      <button>Criar</button>

    </div>
  )
}
