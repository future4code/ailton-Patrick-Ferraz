import React, { Component } from 'react'
import styled from 'styled-components'

const Container4 = styled.div`
display:flex;
flex-direction: column;
color:#FFE8CC;
`
const Titulo4 = styled.h1`
display:flex;
justify-content: center;
`
const Texto4 = styled.h3`
display:flex;
justify-content: center;
color:#FFE8CC;
`


export default class Etapa4 extends Component {
  render() {
    return (
      <Container4>
     <Titulo4>O formulário acabou</Titulo4>
    <Texto4>Muito obrigado por participar! Entraremos em contato!</Texto4>
      </Container4>
 
    )
  }
}
