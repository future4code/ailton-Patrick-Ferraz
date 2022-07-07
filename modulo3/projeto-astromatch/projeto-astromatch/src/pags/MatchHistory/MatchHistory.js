import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { aluno, url_base } from '../../components/constants'
import { Container,Header,CardMatchs, ProfilePhoto,InfosMatches,BntProfilePage,BtnClear } from './MatchHistoryStyled'
import Clear from "../../imgs/Clear.png"
import ProfilesPage from "../../imgs/ProfilesPage.png"

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
      <InfosMatches> <ProfilePhoto  src={person.photo}/>
      <p>{person.name}</p></InfosMatches>
     
    </div>
  })

  return (
    <Container>
    <CardMatchs>
      <Header>
      <BntProfilePage onClick={props.goToHome}><img src={ProfilesPage}/></BntProfilePage>
      <h1>MatchHistory</h1>
      </Header>
     
    {peopleMatched}

    </CardMatchs>

    <BtnClear onClick={props.clear}><img src={Clear}/>
    <span>Limpar swipes e matches</span>
    </BtnClear>
   
    </Container>
  )
}
