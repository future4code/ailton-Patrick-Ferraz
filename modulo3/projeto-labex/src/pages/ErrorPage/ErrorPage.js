import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { Body, Container } from '../../Components/components'
import Footer from '../../constants/Footer'
import Header from '../../constants/Header'
import Error from '../../Imgs/error.png'

const ErrorMsg = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap:10px
`

const ImgError = styled.img`
width: 600px;
height:500px;
`

export default function ErrorPage() {


  const navigate = useNavigate()
  return (
    <Container>
    <Header/>
    <Body>
    <ErrorMsg>
    <h2>Algo deu errado!</h2>
    <ImgError src={Error}/>
    </ErrorMsg>
    </Body>
    <Footer/>
    </Container>
  )
}
