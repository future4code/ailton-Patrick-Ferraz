import React, { Component } from "react";
import axios from "axios";
import TelaCadastro from "./components/TelaCadastro";
import TelaListaUsuario from "./components/TelaListaUsuario";

class App extends Component {
  state = {
    telaAtual: "cadastro"
  }

escolheTela = () => {
  switch (this.state.telaAtual){
    case "cadastro":
      return  <TelaCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro}/>
        default:
          return <div>Pág não encontrada</div>
  }
}

irParaCadastro = () =>{
  this.setState({telaAtual: "cadastro"})
}

irParaLista= () =>{
  this.setState({telaAtual: "lista"})
}

render(){
  return(
  <div>
   {this.escolheTela()}
    
  </div>
  )
}
}

export default App;
