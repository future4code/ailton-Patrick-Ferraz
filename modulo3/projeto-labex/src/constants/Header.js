import React from 'react'
import styled from "styled-components";
import IconHead from "../Imgs/IconHead.png";

export const Head = styled.div`
display:flex;
background-color: purple;
height: 15vh;
width: 100%;
align-items: center;
justify-content: center;
flex-shrink: 0
`

export const IconHeader = styled.img`
max-width: 100px;
max-width: 100px;
`

export default function Header() {
  return (
    <Head>
      <IconHeader src={IconHead} />
    <h2>LabeX</h2> 
    <button>Home</button>
  </Head>
  )
}
