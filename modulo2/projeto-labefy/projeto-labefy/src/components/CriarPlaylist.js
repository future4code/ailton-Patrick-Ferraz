import React, { Component } from 'react'
import axios from "axios"
import styled from 'styled-components'

const CardPlaylist = styled.div`
border: 1px solid black;
padding: 10px;
margin: 10px;
`

export default class CriarPlaylist extends Component {

    state={
        
        playlists: [],
        inputNomePlaylist:"",
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



  render() {
    console.log(this.state.playlists)
    const listaPlaylists = this.state.playlists.map((playlist)=>{
        return <p>{playlist.name}</p>
    })

    return (
      <div>
         <input onChange={this.onChangeInputNomePlaylist} value={this.state.inputNomePlaylist}  placeholder='Nome da Playlist'/>
        <button onClick={this.criarPlaylist}>Adicionar Playlist</button>
        {listaPlaylists}
      </div>
    )
  }
}