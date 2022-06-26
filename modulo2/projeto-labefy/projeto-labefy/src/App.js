import React, { Component } from 'react'
import {Header,Footer,Container,Main} from "./styled"
import CriarPlaylist from '../src/pages/CriarPlaylist/CriarPlaylist'
import DetalhesPlaylist from '../src/pages/Musicas/DetalhesPlaylist'


class App extends Component {
  state = {
    telaAtual: "playlist",
    playlistClicada: "",
  }
  
  irPararDetalhesPlaylist = (id) => {
  this.setState({telaAtual:"detalhes", playlistClicada:id})
  }
  
  voltarParaCriarPlaylist = () =>{
    this.setState({telaAtual: "playlist" , playlistClicada:""})
  }
  
  selecionarPagina = () =>{
    switch (this.state.telaAtual){
      case "playlist":
        return <CriarPlaylist   irPararDetalhesPlaylist ={this.irPararDetalhesPlaylist}/>
        case "detalhes":
          return <DetalhesPlaylist voltarParaCriarPlaylist={this.voltarParaCriarPlaylist}  playlistClicada={this.state.playlistClicada}/>
          default:
            return <CriarPlaylist  irPararDetalhesPlaylist ={this.irPararDetalhesPlaylist}/>
  
    }
  }
  
    render() {
     
      return (

        <Container>
        <Header><h1>Labefy</h1> </Header>
        <Main>
      
        {this.selecionarPagina()}
        
        </Main>
        <Footer>Sou um footer</Footer>
  </Container>
      )
    }
}

export default App;