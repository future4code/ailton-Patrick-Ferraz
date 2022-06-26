import axios from 'axios'
import React, { Component } from 'react'

export default class DetalhesPlaylist extends Component {

state={
  inputNomeMusica:"",
  inputArtista:"",
  inputUrlMusica:"",
}



  adicionarMusica = (id) => {
    const body = {
      name: this.state.inputNomeMusica,
      artist: this.state.inputArtista,
      url: this.state.inputUrlMusica,
    };

    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistClicada.id}/tracks`, body, {
        headers: {
          Authorization: "patrick-ferraz-ailton",
        },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      });
      console.log(this.props.playlistClicada.id)
  };


onChangeInputNomeMusica =(e) =>{
    this.setState({inputNomeMusica: e.target.value})
}
onChangeInputArtista =(e) =>{
    this.setState({inputArtista: e.target.value})
}
onChangeInputUrlMusica =(e) =>{
    this.setState({inputUrlMusica: e.target.value})
}

  render() {
    return (
      <div>
      <p>Playlist Atual: {this.props.playlistClicada}</p>
      <div>
        <h1>Adicionar Músicas</h1>
        <input onChange={this.onChangeInputNomeMusica} value={this.state.inputNomeMusica} placeholder={"Nome da música"} />
        <input onChange={this.onChangeInputArtista} value={this.state.inputArtista} placeholder={"Artista"} />
        <input onChange={this.onChangeInputUrlMusica} value={this.state.inputUrlMusica} placeholder={"url da música"} />
        <button onClick={this.adicionarMusica}>Adicionar música</button>
       </div>
      <button onClick={this.props.voltarParaCriarPlaylist}>Voltar para Playlists</button>
      </div>

    )
  }
}





