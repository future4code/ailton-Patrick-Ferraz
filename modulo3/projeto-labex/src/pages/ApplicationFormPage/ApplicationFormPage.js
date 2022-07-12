import axios from 'axios'
import React, {useState,useMemo} from 'react'
import { useRequestData } from '../../Hooks/useRequestData'
import { base_URL,aluno } from '../../constants/constants'
import Select from 'react-select'
import countryList from 'react-select-country-list'


export default function ApplicationFormPage(props) {
  const [trip,setTrip] = useState({})
  const [tripId,setTripId] = useState("")
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [applicationText,setApplocationText] = useState("")
  const [profession,setProfession] = useState("")
  const [value, setValue] = useState('')

  const trips = useRequestData(`${base_URL}/${aluno}/trips`);

 const applyToTrip = (id) =>{
  const body = {
    name:name,
    age:age,
    applicationText:applicationText,
    profession:profession,
    country:value.label
  }

  axios.post(`${base_URL}/${aluno}/trips/${tripId}/apply`,body)
  .then((res)=>alert('Inscrição realizada com sucesso.'))
  .catch((err)=>alert('Inscrição não realizada. Tente'))
 }

const tripChange = (e)=>{
  setTrip(e.target.value)
  setTripId(e.target.value)
}

const handleName = (e) =>{
setName(e.target.value)
}

const handleAge = (e) =>{
setAge(e.target.value)
}

const handleApplicationText = (e) =>{
setApplocationText(e.target.value)
}

const handleProfession = (e) =>{
setProfession(e.target.value)
}

const CountrySelector = () => {
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return <Select className="country" options={options} value={value} onChange={changeHandler} />
}

  return (
    <div>
      <h1>Inscreva-se para uma viagem</h1>
       <select onChange={tripChange}>
        <option value={""}>Nenhuma</option>
        {trips && trips.map((trip)=>{
          return (
            <option key={trip.name} value={trip.id}>
              {trip.name}
            </option>
          )
        })}
       </select>
       <input type={"text"} placeholder="Nome" onChange={handleName}/>
       <input type={"number"} min="18" placeholder='Idade' onChange={handleAge}/>
       <input type={"text"} placeholder='Texto de candidatura' onChange={handleApplicationText}/>
       <input type={"text"} placeholder='Profissão' onChange={handleProfession}/>
       {CountrySelector()}
      
      <button onClick={props.goToListTripsPage}>Voltar</button>
      <button onClick={applyToTrip}>Inscrever-se</button>
      </div>
  )
}
