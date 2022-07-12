import React from 'react'
import { useNavigate } from 'react-router-dom'
import { backOnePage,gotToAdminHome } from '../../Routes/coordinator'

export default function LoginPage() {
  const navigate = useNavigate()

  return (
    <div>
      <h1>LoginPage</h1>
      <button onClick={()=>backOnePage(navigate)}>Voltar</button>
      <button onClick={()=>gotToAdminHome(navigate)}>Login</button>
    </div>

  )
}
