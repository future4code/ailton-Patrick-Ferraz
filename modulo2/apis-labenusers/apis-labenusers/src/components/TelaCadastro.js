import React, { Component } from "react";
import axios from "axios";

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
      <div>
        <button onClick={this.props.irParaLista}>
          Ir para Lista de Usuario
        </button>
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
        <button onClick={this.fazerCadastro}>Cadastrar</button>
      </div>
    );
  }
}
