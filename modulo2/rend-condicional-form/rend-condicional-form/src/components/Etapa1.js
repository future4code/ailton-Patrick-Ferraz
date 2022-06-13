import React, { Component } from 'react'
import styled from 'styled-components'

const Container1 = styled.div`
display:flex;
flex-direction: column;
width: 60%;
`
const Titulo1 = styled.h1`
display:flex;
justify-content: center;
color:#FFE8CC;
`
const Form1 = styled.form`
color:#FFE8CC;
`

export default class Etapa1 extends Component {
  render() {
    return (
      <Container1>
        <Titulo1>Dados gerais</Titulo1>
        <Form1>Nome: </Form1>
        <input type={'text'} placeholder={"Digite seu nome"}/>
        <Form1>Idade: </Form1>
        <input type={'text'} placeholder={"Digite sua idade"} />
        <Form1>Email: </Form1>
        <input type={'text'} placeholder={"Digite seu email"}/>
        <Form1>Qual sua escolaridade?</Form1>
          <select >
            <option> </option>
            <option>Ensino Médio Incompleto.</option>
            <option>Ensino Médio Completo.</option>
            <option>Ensino Superior Incompleto.</option>
            <option>Ensino Superior Completo.</option>
          </select>
      

      </Container1>
    )
  }
}
