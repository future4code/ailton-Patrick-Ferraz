import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const ContainerTelaCadastro = styled.div`
border: 1px solid black;
width: 50vw;
height: 50vh;
margin-left: 300px;
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
border-radius: 100px;
background-color: #70bfff;
`
const BotaoCadastrar = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius: 25px;
background-color: #f9b84f;
border: 1px solid black;
`

const BotãoIrParaListaUsuarios = styled.button`
display: flex;
justify-content: center;
align-items: center;
border-radius: 25px;
background-color: #f9b84f;
border: 1px solid black;
`


export default class TelaCadastro extends Component {
  state = {
    inputNome: "",
    inputEmail: "",
  };

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  fazerCadastro = () =>{

    const body = {
        name:this.state.inputNome,
        email:this.state.inputEmail,
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body,{
        headers:{
            Authorization: "patrick-ferraz-ailton"
        }
    }).then((res)=>{
        alert("Usuário(a) cadastrado(a) com sucesso!")
        this.setState({inputNome:"", inputEmail:""})
    }).catch((err)=> {
        alert(err.response.data.message)
    })
  }


  render() {
    return (
      <ContainerTelaCadastro>
        <BotãoIrParaListaUsuarios onClick={this.props.irParaLista}>
          Ir para Lista de Usuario
        </BotãoIrParaListaUsuarios>
        <h2>Tela de Cadastro</h2>
        <input 
        placeholder="Nome"
        value={this.state.inputNome}
        onChange={this.onChangeNome}
        />
          <input 
        placeholder="E-mail"
        value={this.state.inputEmail}
        onChange={this.onChangeEmail}
        />
        <BotaoCadastrar onClick={this.fazerCadastro}>Cadastrar</BotaoCadastrar>
        <img src="https://img.icons8.com/stickers/100/1A1A1A/jake.png"/>
      </ContainerTelaCadastro>
    );
  }
}
