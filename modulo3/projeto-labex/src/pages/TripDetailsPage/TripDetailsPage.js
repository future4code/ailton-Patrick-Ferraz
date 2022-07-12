import React from 'react'
import { useNavigate } from 'react-router-dom'
import { backOnePage } from '../../Routes/coordinator'

export default function TripDetailsPage() {
  const navigate = useNavigate()
  return (
    <div>
      <h1> TripDetailsPage</h1>
      <button onClick={()=>backOnePage(navigate)}>Voltar</button>
     </div>
  )
}
