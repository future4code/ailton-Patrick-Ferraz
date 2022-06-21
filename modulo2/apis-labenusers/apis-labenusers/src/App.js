import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    inputEmail: "",
    inputNome: "",
    listaUsuarios: [],
    inputProcurarUsuario: "",
  };

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeinputProcurarUsuario = (event) => {
    this.setState({ inputProcurarUsuario: event.target.value });
  };

getUsuarios = () => {
  const body = [
    {
        "id": Date.now(),
        "name": this.state.inputProcurarUsuario
    }
]
  axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
  {
    headers:{
      Authorization: "patrick-ferraz-ailton"
    }
  }).then((response) => {
    console.log(response)
  }).catch((error) => {
    console.log(error)
  })
}

  addUsuario = () => {
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "patrick-ferraz-ailton",
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <header></header>
        <h1>Cadastro de Usuários</h1>
        <main>
          <section>
            <label>
              Email:
              <input
                type={"text"}
                placeholder="Email"
                onChange={this.onChangeEmail}
                value={this.state.inputEmail}
              ></input>
              Nome:
              <input
                type={"text"}
                placeholder="Nome"
                onChange={this.onChangeNome}
                value={this.state.inputNome}
              ></input>
              <button onClick={this.addUsuario}>Adicionar</button>
            </label>
          </section>
          <section>
            <h1>Tela de Detalhes</h1>
            <button>Trocar de tela</button>
            <hr></hr>
            <h4>Procurar usuários</h4>
            <input
              type={"text"}
              placeholder="Nome exato para busca"
              onChange={this.onChangeinputProcurarUsuario}
              value={this.state.inputProcurarUsuario}
            ></input>
            <button>Salvar edição</button>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
