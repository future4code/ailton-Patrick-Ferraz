import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Etapa4 from './components/Etapa4';

const Container = styled.div`
border: 1px solid black;
display:flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
margin: 100px 450px;
width: 500px;
height: 500px ;
background-color: #001834;
`


export default class App extends Component {
  state = {
    etapa: 1,
  }
  

  renderizarEtapa = () =>{
    switch(this.state.etapa){
      case 1:
        return <Etapa1 />
        break;
      case 2:
            return <Etapa2 />
            break;
      case 3:
             return <Etapa3 />
             break;
        case 4:
            return <Etapa4 />
            break;
    }
  }

  proximaEtapa = () =>{
    this.setState({etapa: this.state.etapa+1})
  }

  retornarFormulário =() =>{
    this.setState({etapa:1})
  }  
  render() {
    return (
      <Container>
        {this.renderizarEtapa()}
        {this.state.etapa !==4 
        ? <button  onClick={this.proximaEtapa}>Próxima Etapa</button>
         :<button  onClick={this.retornarFormulário}>Reniciar Formulário</button> }
     
      </Container>
    )
  }
}
