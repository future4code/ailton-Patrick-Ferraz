import React, { Component } from 'react'
import styled from 'styled-components'

const InputUsuario = styled.input`
width: 20%;
height: 100%;
`

const InputMensagem = styled.input`
width: 60%;
height: 100%;
`

const Botao = styled.button`
width: 20%;
height: 100%;
`

export default class LayoutUsuario extends React.Component {
  render() {
    return (
      <div>
        <InputUsuario value={this.props.valorUsuario} onChange={this.props.aoMudarUsuario} placeholder={'Usuário'}/>
        <InputMensagem value={this.props.valorMensagem} onChange={this.props.aoMudarMensagem} placeholder={'Mensagem'}/>
        <Botao onClick={this.props.aoEnviar}>Enviar Mensagem</Botao>
      </div>
    )
  }
}
 