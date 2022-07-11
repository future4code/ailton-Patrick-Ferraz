import axios from 'axios'
import React, {useState,useMemo} from 'react'
import CountrySelector from '../../constants/Country'
import { base_url,aluno } from '../../constants/constants'

export default function ApplicationFormPage(props) {


 const applyToTrip = (id) =>{
  const body = {
    name:"",
    age:"",
    applicationText:"",
    profession:"",
    country:""
  }

  axios.post(`${base_url}/${aluno}/trips/${id}/aply`,body)
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)})
 }



  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
       <select>
        <option>Selecione uma viagem</option>
        <option>Teste aqui 2</option>
        <option>Teste aqui 3</option>
       </select>
       <input type={"text"} placeholder="Nome"/>
       <input type={"number"} min="18" placeholder='Idade'/>
       <input type={"text"} placeholder='Texto de candidatura'/>
       <input type={"text"} placeholder='Profissão'/>
       {CountrySelector()}
     
      <button onClick={props.goToListTripsPage}>Voltar</button>
      </div>
  )
}
