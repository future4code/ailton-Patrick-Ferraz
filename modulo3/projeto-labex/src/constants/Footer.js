import React from 'react'
import IconFoot from "../Imgs/IconFooter.png";
import Instagram from "../Imgs/Instagram.png";
import Twitter from "../Imgs/Twitter.png"
import Facebook from "../Imgs/Facebook.png"
import linkedin from "../Imgs/linkedin.png"
import Youtube from "../Imgs/Youtube.png"
import styled from "styled-components"

const IconFooter = styled.img`
max-width: 100px;
max-width: 100px;

`

const Foot = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: black;
height: 15vh;
width: 100vw;
color:white;
`

const SocialMedias = styled.div`
display: flex;
align-items: center;
width: 100%;
justify-content: center;
gap:8px;
`

export default function Footer() {
  return (
    <Foot>
    <IconFooter src={IconFoot} />
    <SocialMedias>
      Nós siga nas redes Sociais:
      <img src={Instagram} />
      <img src={Twitter}/>
      <img src={Facebook}/>
      <img src={linkedin}/>
      <img src={Youtube}/>
    </SocialMedias>
    <IconFooter src={IconFoot} />
  </Foot>
  )
}
