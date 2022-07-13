import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToHomePage } from '../../Routes/coordinator'
import axios from "axios"
import { aluno, base_URL } from '../../constants/constants'

export default function LoginPage() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()


  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }

  const handlePassword = (e) =>{
    setPassword(e.target.value)
  }

const onSubmitLogin = () =>{
  const body = {
    email: email,
    password: password
  }
  axios.post(`${base_URL}/${aluno}/login`, body)
  .then((res)=>{
    console.log("Deu certo:",res.data.token)
    localStorage.setItem("token", res.data.token)
    navigate('/admin/trips/list')
  })
  .catch((err)=>{
console.log("Deu Errado:",err.response)
  })
}

  return (
    <div>
      <h1>LoginPage</h1>
      <div>
        <input type={"email"} onChange={handleEmail} value={email} placeholder='E-mail'/>
        <input type={"password"} onChange={handlePassword} value={password} placeholder='Senha'/>
      </div>
      <button onClick={()=>goToHomePage(navigate)}>Voltar</button>
      <button onClick={onSubmitLogin}>Login</button>
    </div>

  )
}
