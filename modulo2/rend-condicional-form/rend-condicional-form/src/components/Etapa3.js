import React, { Component } from 'react'
import styled from 'styled-components'

const Container3 = styled.div`
display:flex;
flex-direction: column;
width: 60%;
`
const Titulo3 = styled.h1`
display:flex;
justify-content: center;
color:#FFE8CC;
`
const Form3 = styled.form`
color:#FFE8CC;
`


export default class 
 extends Component {
  render() {
    return (
      <Container3>
        <Titulo3>Informações Gerais de Ensino</Titulo3>
        <Form3>Por que você não terminou um curso de graduação?</Form3>
        <input type={'text'} />
        <Form3>Você fez algum curso complementar?</Form3>
        <select >
            <option> </option>
            <option>Curso técnico.</option>
            <option>Cursos de inglês.</option>
            <option>Não fiz curso complementar.</option>
            </select>
      </Container3>
    )
  }
}
