import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const CardUsuarios = styled.div`
border: 1px solid black;
margin: 10px;
padding:10px;
width: 300px;
display: flex;
justify-content: space-between;
`

export default class TelaListaUsuario extends Component {

  state = {
    usuarios: [],
  }

componentDidMount(){
  this.pegarUsuarios()
}

pegarUsuarios = () =>{

axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',{
  headers:{
    Authorization: "patrick-ferraz-ailton"
  }
})
.then((res)=> {
this.setState({usuarios:res.data })
})
.catch((err) =>{
  alert("Ocorreu um problema. Tente novamente!")
})

}

deletarUsuario = (id) => {
 axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
  headers:{
    Authorization: "patrick-ferraz-ailton"
  }
 }).then((res)=>{
 alert ('Usuário(a) deletado(a)!')
 this.pegarUsuarios()
 }).catch((err)=>{
    alert("Ocorreu um erro, tente novamente.")
 })
}


  render() {
 const listaDeUsuarios = this.state.usuarios.map((user)=>{
  return (<CardUsuarios key={user.id}>{user.name}
  <button onClick={() => this.deletarUsuario(user.id)}>X</button>
  
  </CardUsuarios>)
 })

    return (
      <div>
        <button onClick={this.props.irParaCadastro}>Ir para Tela de Cadastro</button>
        <h2>Lista de Usuários</h2>
        {listaDeUsuarios}


      </div>
    )
  }
}
