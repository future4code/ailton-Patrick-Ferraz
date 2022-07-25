import React from 'react'
import styled from "styled-components";
import IconHead from "../Imgs/IconHead.png";
import IconHome from "../Imgs/Home.png"
import { useNavigate } from 'react-router-dom';
import { goToHomePage } from '../Routes/coordinator';

export const Head = styled.div`
display:flex;
background-color: purple;
height: 15vh;
width: 100%;
padding: 10px 0px;
align-items: center;
justify-content: space-between;
flex-shrink: 0;
color: white;
`
export const HomeIcon = styled.button`
background-color: purple;
border:none;
:hover{
  cursor: pointer;
}
`

export const IconHeader = styled.img`
max-width: 100px;
max-width: 100px;
`

export default function Header() {

  const navigate = useNavigate()

  return (
    <Head>
      <IconHeader src={IconHead} />
    <h2>LabeX</h2> 
    <HomeIcon onClick={()=>goToHomePage(navigate)} ><img src={IconHome}/></HomeIcon>
  </Head>
  )
}
