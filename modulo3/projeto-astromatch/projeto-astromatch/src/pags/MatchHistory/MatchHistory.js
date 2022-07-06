import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { aluno, url_base } from '../../components/constants'
import { ProfilePhoto } from './MatchHistoryStyled'

export default function MatchHistory(props) {

  const [matches,setMatchs] = useState([])

  useEffect(()=>{
    getMatches()  
  },[matches])

  const getMatches = () =>{
    axios
    .get(`${url_base}/${aluno}/matches`)
    .then((res)=>{
      setMatchs(res.data.matches)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const peopleMatched = matches.map((person)=>{
    return <div key={person.id}>
      <ProfilePhoto  src={person.photo}/>
      <p>{person.name}</p>


    </div>
  })

  return (
    <div><h1>MatchHistory</h1>
    {peopleMatched}

<button onClick={props.goToHome}>Home</button>
<button onClick={props.clear}>Clear</button>
    </div>
  )
}
