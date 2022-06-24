import React, { Component } from 'react'
import axios from "axios"
import styled from 'styled-components'

const CardPlaylist = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
width: 300px;
&:hover{
    cursor: pointer;
    background-color: red;
}
`

export default class CriarPlaylist extends Component {

    state={
        
        playlists: [],
        inputNomePlaylist:"",
        inputNomeMusica:"",
        inputArtistaRelacionado:"",
        inputUrlMusica:"",
    }


    componentDidMount(){
        this.pegarPlaylist()
    }

    criarPlaylist = () =>{
       

        const body = {
            name:this.state.inputNomePlaylist
        }


        axios.post( "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists" ,body,{
            headers:{
                Authorization: "patrick-ferraz-ailton"
            }
        } ).then((res)=>{
            return alert("Playlist Cadastrada"),
            this.setState({inputNomePlaylist:""})
        })
        .catch((err)=>{
            return alert(`${err.message}`)
        })
    }
 
    pegarPlaylist = () =>{

        axios.get( 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',{
            headers:{
                Authorization: "patrick-ferraz-ailton"
            }
        } ).then((res)=>{
            this.setState({playlists: res.data.result.list})
        })
        .catch((err)=>{
            alert("Algo deu errado. Tente novamente!")
        })
    }

    onChangeInputNomePlaylist =(e) =>{
        this.setState({inputNomePlaylist: e.target.value})
    }

    onChangeInputNomeMusica =(e) =>{
        this.setState({inputNomeMusica: e.target.value})
    }
    onChangeInputArtistaRelacionado =(e) =>{
        this.setState({inputArtistaRelacionado: e.target.value})
    }
    onChangeInputUrlMusica =(e) =>{
        this.setState({inputUrlMusica: e.target.value})
    }

    deletarPlaylist = (id) =>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,{
            headers:{
                Authorization: "patrick-ferraz-ailton"
            }
        })
        .then((res)=>{
            alert("Playlist deletada!")
            this.pegarPlaylist()
        })
        .catch((err)=>{
            alert("Ocorreu um erro, tente novamente")
        })

    }


  render() {
    console.log(this.state.playlists)
    const listaPlaylists = this.state.playlists.map((playlist)=>{
        return <CardPlaylist onClick={() => this.props.irPararDetalhesPlaylist(playlist.id)} key={playlist.id}>{playlist.name} <button onClick={() => this.deletarPlaylist(playlist.id)}>Deletar</button></CardPlaylist>
    })

    return (
      <div >
        <h1>Criar Playlist</h1>
         <input onChange={this.onChangeInputNomePlaylist} value={this.state.inputNomePlaylist}  placeholder='Nome da Playlist'/>
        <button onClick={this.criarPlaylist}>Adicionar Playlist</button>
        <h3>Suas playlists:</h3>
       {listaPlaylists}
       <div>
        <h1>Adicionar Músicas</h1>
        <input onChange={this.onChangeInputNomeMusica} value={this.state.inputNomeMusica} placeholder={"Nome da música"} />
        <input onChange={this.onChangeInputArtistaRelacionado} value={this.state.inputArtistaRelacionado} placeholder={"Artistas relacionados"} />
        <input onChange={this.onChangeInputUrlMusica} value={this.state.inputUrlMusica} placeholder={"url da música"} />
        <button>Adicionar música</button>
       </div>
      </div>

        

    )
  }
}