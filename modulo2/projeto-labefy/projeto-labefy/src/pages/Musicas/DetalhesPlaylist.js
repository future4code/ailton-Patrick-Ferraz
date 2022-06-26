import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";

const CardPlaylistTrack = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
  width: 300px;
  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;

export default class DetalhesPlaylist extends Component {
  state = {
    inputNomeMusica: "",
    inputArtista: "",
    inputUrlMusica: "",
    playlistTrack: [],
    track: "",
  };

  componentDidMount() {
    this.pegarPlaylistTrack();
  }

  pegarPlaylistTrack = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistClicada}/tracks`,
        {
          headers: {
            Authorization: "patrick-ferraz-ailton",
          },
        }
      )
      .then((res) => {
        // console.log(res.data.result.tracks);
        this.setState({ playlistTrack: res.data.result.tracks });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  adicionarMusica = () => {
    const body = {
      name: this.state.inputNomeMusica,
      artist: this.state.inputArtista,
      url: this.state.inputUrlMusica,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistClicada}/tracks`,
        body,
        {
          headers: {
            Authorization: "patrick-ferraz-ailton",
          },
        }
      )
      .then((res) => {
        alert("Música adicionada com sucesso");
        this.setState({ track: res.result });
      })
      .catch((err) => {
        alert("Não foi possivel adicionar a música. Tente novamente");
      });
  };

  deletarMusica = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.playlistClicada}/tracks/${id}`,
        {
          headers: {
            Authorization: "patrick-ferraz-ailton",
          },
        }
      )
      .then((res) => {
        alert("Música deletada com sucesso.");
        this.pegarPlaylistTrack()
      })
      .catch((err) => {
        alert("Música não deletada.Tente novamente")
      });
  };

  onChangeInputNomeMusica = (e) => {
    this.setState({ inputNomeMusica: e.target.value });
  };
  onChangeInputArtista = (e) => {
    this.setState({ inputArtista: e.target.value });
  };
  onChangeInputUrlMusica = (e) => {
    this.setState({ inputUrlMusica: e.target.value });
  };

  render() {
    const listaMusicas = this.state.playlistTrack.map((musica) => {
      return (


        <CardPlaylistTrack key={musica.id}>
          <p>Nome da música:{musica.name}</p>
          <p>Nome do artista:{musica.artist}</p>
          <audio controls>
          <source src={musica.url}></source>
          </audio>
         
          <button onClick={() => this.deletarMusica(musica.id)}>Deletar Musica</button>
        </CardPlaylistTrack>
      );
    });

    return (
      <div>
        {listaMusicas}
        <div>
          <h3>Adicionar Músicas</h3>
          <input
            onChange={this.onChangeInputNomeMusica}
            value={this.state.inputNomeMusica}
            placeholder={"Nome da música"}
          />
          <input
            onChange={this.onChangeInputArtista}
            value={this.state.inputArtista}
            placeholder={"Artista"}
          />
          <input
            onChange={this.onChangeInputUrlMusica}
            value={this.state.inputUrlMusica}
            placeholder={"url da música"}
          />
          <button onClick={this.adicionarMusica}>Adicionar música</button>
        </div>
        <button onClick={this.props.voltarParaCriarPlaylist}>
          Voltar para Playlists
        </button>
      </div>
    );
  }
}
