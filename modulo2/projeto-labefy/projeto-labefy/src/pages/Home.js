import React, { Component } from 'react'
import {Header,Footer} from "./styled"
import CriarPlaylist from '../components/CriarPlaylist/CriarPlaylist'
import Musicas from '../components/Musicas/Musicas'

export default class Home extends Component {

state = {
  telaAtual: "playlist",
  playlistClicada: "",
}


irPararDetalhesPlaylist = (id) => {
this.setState({telaAtual:"musica", playlistClicada:id})
}

voltarParaCriarPlaylist = () =>{
  this.setState({telaAtual: "playlist" , playlistClicada:""})
}

selecionarPagina = () =>{
  switch (this.state.telaAtual){
    case "playlist":
      return <CriarPlaylist  url={this.state.playlistClicada} irPararDetalhesPlaylist ={this.irPararDetalhesPlaylist}/>
      case "musica":
        return <Musicas voltarParaCriarPlaylist={this.voltarParaCriarPlaylist}  url={this.state.playlistClicada}/>
        default:
          return <CriarPlaylist/>

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
