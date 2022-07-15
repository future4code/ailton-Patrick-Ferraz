import React from 'react'
import styled from "styled-components";
import IconHead from "../Imgs/IconHead.png";

export const Head = styled.div`
display:flex;
background-color: purple;
height: 15vh;
width: 100vw;
align-items: center;
justify-content: center;
`

export const IconHeader = styled.img`
max-width: 100px;
max-width: 100px;
`

export default function Header() {
  return (
    <Head>
    <h2>LabeX</h2> <IconHeader src={IconHead} />
  </Head>
  )
}
