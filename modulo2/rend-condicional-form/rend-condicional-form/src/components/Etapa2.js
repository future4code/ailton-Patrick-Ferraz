import React, { Component } from 'react'
import styled from 'styled-components'

const Container2 = styled.div`
display:flex;
flex-direction: column;
width: 60%;
`
const Titulo2 = styled.h1`
display:flex;
justify-content: center;
color:#FFE8CC;
`
const Form2 = styled.form`
color:#FFE8CC;
`

export default class Etapa2 extends Component {
  render() {
    return (
      <Container2>
        <Titulo2>Informações sobre Ensino Superior</Titulo2>
        <Form2> Qual o curso?</Form2>
        <input type={'text'} placeholder={'Digite o curso'}/>
        <Form2>Qual a unidade de ensino?</Form2>
        <input type={'text'} placeholder={'Digite a unidade'}/>

      </Container2>
    )
  }
}
