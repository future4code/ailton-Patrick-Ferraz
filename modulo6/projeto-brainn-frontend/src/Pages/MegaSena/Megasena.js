import React from 'react';
import styled from "styled-components"
import {BASE_URL} from "../../Constants/url"
import { useEffect, useState } from "react";
import axios from "axios";
import RandomNumberEllipse from '../../Components/RandomNumberEllipse/RandomNumberEllipse';

const Container = styled.div`
background-color: black;
margin-top:50px;
`;

const Teste = styled.div`
position: absolute;
left: 0%;
right: 61.69%;
top:0%;
bottom: 0%;
background-color: #6BEFA3;
background-image: radial-gradient(20% 75% at 100% 50%, white 75%, transparent 75%);
`;

const Title = styled.p`
position: absolute;
left: 11.11%;
right: 73.57%;
top: 48.43%;
bottom: 48.52%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 37px;
color: #FFFFFF;
`;

const TextConcursoTitle = styled.p`
position: absolute;
left: 6%;
right: 84.83%;
top: 86.76%;
bottom: 11.84%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
letter-spacing: 0.135em;
color: #FFFFFF;
width:245.17px;
height: 32.98px;
`;

const TextConcursoNumber = styled.p`
position: absolute;
left: 6%;
right: 77.69%;
top: 89.49%;
bottom: 8.59%;
width: 260.92px;
height:20.73px;

font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 24px;

color: #FFFFFF;


`;

const SelectConcurso = styled.select`
position: absolute;
left: 6%;
right: 80.51%;
top: 8.52%;
bottom: 87.3%;
width: 215.91px;
height: 45.2px;

background: #FFFFFF;
`;




const Megasena = () => {
  
  const [loterias, setLoterias] = useState([])
  const [relacao,setRelacao] = useState([])
  const [concurso, setConcurso] = useState([])
  
  useEffect(()=>{

    getLoterias()
    getRelacao()
    getConcurso()
  },[])

const getLoterias = () => {
 
  axios.get(`${BASE_URL}/loterias`)
  .then((res)=>{
    console.log("Loterias",res.data)
    setLoterias(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}

const getRelacao = () => {
 
  axios.get(`${BASE_URL}/loterias-concursos`)
  .then((res)=>{
    console.log("Relacao",res.data)
    setRelacao(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
}

const getConcurso= () => {
 
  axios.get(`${BASE_URL}/concursos/440`)
  .then((res)=>{
    console.log("Concusos",res.data)
    setConcurso(res.data)
    
  })
  .catch((err)=>{
    console.log(err)
  })
}
 
const mapTeste = loterias.map((loteria)=>{
  return loteria.nome
})

    return ( 
     
     <Container>
      <Teste>
        <SelectConcurso name="loto" id="loto">
       {loterias.map((loterias)=>(
       <option key={loterias.id} value={loterias.id}>{loterias.nome}</option>
        ))}
        </SelectConcurso>
        <Title>{mapTeste[0]}</Title>
        <TextConcursoTitle>Concurso</TextConcursoTitle>
        <TextConcursoNumber>{concurso.id} – {concurso.data}</TextConcursoNumber>
      </Teste>
      <RandomNumberEllipse concurso={concurso}/>
      </Container>
      
    );
  }
  
  export default Megasena
  