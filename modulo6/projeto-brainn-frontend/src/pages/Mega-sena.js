import React from 'react';
import styled from "styled-components"

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


function Megasena() {
    return (    
      <Teste>
        <SelectConcurso name="loto" id="loto">
        <option value="Megasena">Mega-Sena</option>
        <option value="Lotofacil">Lotofacil</option>
        <option value="Lotomania">Lotomania</option>
        <option value="DiaDaSorte">DiaDaSorte</option>
        <option value="Quina">Quina</option>
        <option value="Timemania">Timemania</option>
        </SelectConcurso>
        <Title>MEGA-SENA</Title>
        <TextConcursoTitle>Concurso</TextConcursoTitle>
        <TextConcursoNumber>4531 – 07/04/2020</TextConcursoNumber>
      </Teste>
    );
  }
  
  export default Megasena
  