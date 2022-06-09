import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    post:[
      {
          nomeUsuario:"paulinha",
          fotoUsuario:"https://picsum.photos/50/50",
          fotoPost:"https://picsum.photos/200/150",
      },
      {
        nomeUsuario:"patrick",
        fotoUsuario:"https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc",
        fotoPost:"https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I",
      },
      {
        nomeUsuario:"sandra",
        fotoUsuario:"https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
        fotoPost:"https://i.picsum.photos/id/1019/5472/3648.jpg?hmac=2mFzeV1mPbDvR0WmuOWSiW61mf9DDEVPDL0RVvg1HPs",
      }
        ],
        valorNomeUsuario:"",
        valorFotoUsuario:"",
        valorFotoPost:"",
  };
  

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorNomeUsuario,
      fotoUsuario: this.state.valorFotoUsuario,
      fotoPost: this.state.valorFotoPost,
    };

    const novosPosts = [...this.state.post, novoPost];
    this.setState({post: novosPosts});
    this.setState({valorNomeUsuario: ""});
    this.setState({valorFotoUsuario: ""});
    this.setState({valorFotoPost: ""});
    };

    onChangeInputNomeUsuario = (event) => {
      this.setState({valorNomeUsuario: event.target.value});
      this.setState({valorNomeUsuario:event.target.value})
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({valorFotoUsuario: event.target.value});
    
  };

  onChangeInputFotoPost = (event) => {
    this.setState({valorFotoPost: event.target.value})
  }

  
  render() {

    const listaDePosts = this.state.post.map((post,index) => {
      return(
     <Post key={index} nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost}/>
      );
    });



    return (
      <MainContainer>

      
       {listaDePosts}
        
        <div>
          
        <input
        value={this.state.valorNomeUsuario} 
        onChange = {this.onChangeInputNomeUsuario}
        placeholder = {"Nome de Usuario"}
        />

        <input
        value={this.state.valorFotoUsuario} 
        onChange = {this.onChangeInputFotoUsuario}
        placeholder = {"Foto de Usuario"}
        />
        
        <input
        value={this.state.valorFotoPost} 
        onChange = {this.onChangeInputFotoPost}
        placeholder = {"Foto de Post"}
        />

        <button onClick ={this.adicionarPost}>Adicionar post</button>
        </div>



      </MainContainer>
    );
  }
}

export default App;
