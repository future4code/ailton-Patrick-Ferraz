import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
border: 1px solid black;
height: 100vh;
width: 50vw;
align-items: flex-end;
flex-direction: column;
margin-left: 25%;
`
const MensagemTela = styled.div`
display: flex;
padding: 10px;
height:100%;
width: 100%;
justify-content: flex-start;
align-items: flex-start;
`

const MensagemEnviada = styled.p`

`

const InterfaceUsuario = styled.div`
display: flex;
width: 100%;
margin: 0;
`

const InputNomeUsuario = styled.input`
width:20%;
height:30px;
`

const InputMensagemUsuario = styled.input`
width:60%;
height:30px;
`
const Botao = styled.button`
width: 21%;
height:30px;
`

export class Componente1 extends React.Component {
    state ={
        listaDeComentario:[
            {nomeUsuario: "", mensagemUsuario:""}
        ],

        nome:"",
        mensagem:"",
    }

    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    onChangeMensagem = (event) => {
        this.setState({mensagem: event.target.value})
    }

    novoComentario = () =>{
        const novoComentario = [...this.state.listaDeComentario, {nomeUsuario: this.state.nome, mensagemUsuario: this.state.mensagem}]
        this.setState({listaDeComentario: novoComentario})
        this.setState({mensagem:""})
    }

  render() {

    const renderizarMensagem = this.state.listaDeComentario.map((usuario,index)=>{
        
        return(
            <MensagemTela key={index}>
            <MensagemEnviada>{usuario.nomeUsuario} </MensagemEnviada>
            <p>{usuario.mensagemUsuario}</p>
            </MensagemTela>
        );
    });

    return (

 <Container>

    {renderizarMensagem}

    <InterfaceUsuario>
    <InputNomeUsuario value={this.state.nome} onChange={this.onChangeNome} placeholder={'Usuário'}/>
    <InputMensagemUsuario value={this.state.mensagem} onChange={this.onChangeMensagem} placeholder={'Mensagem'}/>
    <Botao onClick={this.novoComentario}>Enviar Mensagem</Botao>
    </InterfaceUsuario>

 </Container>

     );
    }
}
