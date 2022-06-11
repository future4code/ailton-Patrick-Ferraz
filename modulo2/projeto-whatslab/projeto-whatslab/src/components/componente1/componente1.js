import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
border: 1px solid black;
height: 100vh;
width: 100vh;
`

export class Componente1 extends React.Component {
    state ={
        nome:"",
        mensagem:"",

        listaDeComentario:[
            {nome: "", mensagem:""}
        ]
    }


    onChangeNome = (event) => {
        this.setState({nome: event.target.value})
    }

    onChangeMensagem = (event) => {
        this.setState({mensagem: event.target.value})
    }

    novoComentario = () =>{
        const novoComentario = [...this.state.listaDeComentario, {nome: this.state.nome, mensagem: this.state.mensagem}]
        this.setState({listaDeComentario: novoComentario})
        this.setState({mensagem:""})
    }

  render() {

    const rederizarComentario = listaDeComentario.map((comentario,index)=> {
        return(
            <div key={index}>
                <p>{comentario.nome} , {comentario.mensagem}</p></div>
        )
    })

    return (

 <Container>
    <input value={this.state.nome} onChange={this.onChangeNome} placeholder={'Nome'}/>
    <input value={this.state.mensagem} onChange={this.onChangeMensagem} placeholder={'Mensagem'}/>
    <button onClick={this.novoComentario}>Oi</button>
 </Container>

     );
    }
}
