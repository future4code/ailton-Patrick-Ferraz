import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import foto from './Img/foto.png'
import icon1 from './Img/souls.png'
import email from './Img/email.png'
import endereco from './Img/endereco.png'

function App() {
  return (
    <div className="App">
      
      <div className="page-section-container">
        <h2>Dados pessoais</h2>

        <CardGrande 
          imagem={foto}
          nome="Patrick de Melo Ferraz" 
          descricao="Oi, eu sou o Patrick. Sou estudante FullStack pela Labenu. Amo videogame, animes, séries e RPG e qualquer coisa relacionada ao gêneros de fantasia e terror."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

     <CardPequeno
     icon2={email}
     info="Email: patrick.ferraz66@gmail.com"
     />

      <CardPequeno
      icon2={endereco}
      info="Endereço: Avenida da Bananinha"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudando desenvolvimento FullStack." 
        />
        
        <CardGrande 
          imagem={icon1}
          nome="Jogos" 
          descricao="Degustador de jogos do gênero Souls Like." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
