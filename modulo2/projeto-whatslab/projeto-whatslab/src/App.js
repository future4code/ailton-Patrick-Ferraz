import "./App.css";
import styled from "styled-components";
import React from "react";
import LayoutUsuario from "./components/LayoutUsuario/LayoutUsuario";

const Container = styled.div`
  display: flex;
  border: 1px solid black;
  height: 100vh;
  width: 50vw;
  align-items: flex-end;
  flex-direction: column;
  margin-left: 25%;
`;
const Header = styled.header`
display: flex;
  background-color: yellow;
  width: 100%;
  height: 80px;
  align-items: center;
 justify-content: center;
 border: 1px solid black;
`;

const Footer = styled.footer`
  width: 100%;
  height: 25px;
`;

const Main = styled.main`
display: flex;
flex-direction: column-reverse;
width: 100%;
height: 100%;
`;

class App extends React.Component {
  state = {
    nomeUsuario: "",
    mensagemUsuario: "",
    listaMensagem: [],
  };

  onChangeUsuario = (event) => {
  this.setState({nomeUsuario: event.target.value})
  }

  onChangeMensagem = (event) => {
    this.setState({mensagemUsuario: event.target.value})
  }

  enviarMensagem = () => {
    let arrayMensagem = [...this.state.listaMensagem, {usuario: this.state.nomeUsuario, mensagem:this.state.mensagemUsuario}]
    this.setState({listaMensagem: arrayMensagem})
    this.setState({nomeUsuario:""})
    this.setState({mensagemUsuario:""})
  }

  render() {
    const mensagemTela = this.state.listaMensagem.map((mensagem,index) =>{
      return(
        <div key={index}>
          <p>{mensagem.usuario}: {mensagem.mensagem} </p>
        </div>
      )
    })

    return (
      <Container>
        <Header> WhatsLab</Header>
        <Main>
        {mensagemTela}
        </Main>
        <Footer>
          <LayoutUsuario
            valorUsuario={this.state.nomeUsuario}
            valorMensagem={this.state.mensagemUsuario}
            aoMudarUsuario={this.onChangeUsuario}
            aoMudarMensagem={this.onChangeMensagem}
            aoEnviar={this.enviarMensagem}
          />
        </Footer>
      </Container>
    );
  }
}

export default App;
