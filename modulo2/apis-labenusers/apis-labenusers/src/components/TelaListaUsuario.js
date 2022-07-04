import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'


const ContainerTelaUsuarios = styled.div`
border: 1px solid black;
width: 50vw;
height: 50%;
margin-left: 300px;
margin-top: 50px;
display: flex;
flex-direction: column;
align-items: center;
border-radius: 100px;
background-color: #f9b84f;
padding: 10px;
`

const Teste1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;


`

const CardUsuarios = styled.div`
border: 1px solid black;
margin: 10px;
padding:10px;
width: 300px;
display: flex;
justify-content: space-between;
border-radius: 30px;
background-color: whitesmoke;
`

const BotaoDeletar = styled.button`
border-radius: 25px;
background-color: #70bfff;
`

const BotãoIrParaCadastro = styled.button`
border-radius: 25px;
background-color: #70bfff;
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
  <BotaoDeletar onClick={() => this.deletarUsuario(user.id)}>Deletar</BotaoDeletar>
  
  </CardUsuarios>)
 })

    return (
      <ContainerTelaUsuarios>
        <Teste1>
        <BotãoIrParaCadastro  onClick={this.props.irParaCadastro}>Ir para Tela de Cadastro</BotãoIrParaCadastro>
        <h2>Lista de Usuários</h2>
        {listaDeUsuarios}
        <img src="https://img.icons8.com/stickers/100/1A1A1A/finn.png"/>

        </Teste1>
     


      </ContainerTelaUsuarios>
    )
  }
}
