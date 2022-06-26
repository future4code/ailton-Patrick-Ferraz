import React, { Component } from 'react'
import {Header,Footer} from "./styled"
import CriarPlaylist from '../CriarPlaylist/CriarPlaylist'
import DetalhesPlaylist from '../Musicas/DetalhesPlaylist'

export default class Home extends Component {

state = {
  telaAtual: "playlist",
  playlistClicada: {},
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
      <div>
      <Header>Sou header </Header>
      <main>
    
    {this.selecionarPagina()}
      
      </main>
      <Footer>Sou um footer</Footer>
</div>
    )
  }
}
