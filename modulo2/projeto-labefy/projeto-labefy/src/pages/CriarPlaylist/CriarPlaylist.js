import React, { Component } from "react";
import axios from "axios";
import { CardPlaylist } from "./styled";



export default class CriarPlaylist extends Component {
  state = {
    playlists: [],
    inputNomePlaylist: "",
  };

  componentDidMount() {
    this.pegarPlaylist();
  }

  criarPlaylist = () => {
    const body = {
      name: this.state.inputNomePlaylist,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        body,
        {
          headers: {
            Authorization: "patrick-ferraz-ailton",
          },
        }
      )
      .then((res) => {
        return (
          alert("Playlist Cadastrada"), this.setState({ inputNomePlaylist: "" })
        );
      })
      .catch((err) => {
        return alert(`${err.message}`);
      });
  };

  pegarPlaylist = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        {
          headers: {
            Authorization: "patrick-ferraz-ailton",
          },
        }
      )
      .then((res) => {
        this.setState({ playlists: res.data.result.list });
      })
      .catch((err) => {
        alert("Algo deu errado. Tente novamente!");
      });
  };

  onChangeInputNomePlaylist = (e) => {
    this.setState({ inputNomePlaylist: e.target.value });
  };

  deletarPlaylist = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
        {
          headers: {
            Authorization: "patrick-ferraz-ailton",
          },
        }
      )
      .then((res) => {
        alert("Playlist deletada!");
        this.pegarPlaylist();
      })
      .catch((err) => {
        alert("Ocorreu um erro, tente novamente");
      });
  };

  render() {
    const listaPlaylists = this.state.playlists.map((playlist) => {
      return (
        <CardPlaylist
          key={playlist.id}
          onClick={() => this.props.irPararDetalhesPlaylist(playlist.id)}
        >
          <p>{playlist.name}</p>
          <button onClick={() => this.deletarPlaylist(playlist.id)}>
            Deletar
          </button>
        </CardPlaylist>
      );
    });

    return (
      <div>
        <h3>Criar nova Playlist:</h3>
        <input
          onChange={this.onChangeInputNomePlaylist}
          value={this.state.inputNomePlaylist}
          placeholder="Nome da Playlist"
        />
        <button onClick={this.criarPlaylist}>Adicionar Playlist</button>
        <h3>Suas playlists:</h3>
        {listaPlaylists}
      </div>
    );
  }
}
