import logo from './logo.svg';
import './App.css';
import icon from './icon1.png';

function App() {
  const titulo = "Titulo do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
    }

  return (
   
    <div>
              <header>
              <div className="icone">
              <img src={icon} />
              <h3>Lab Tube</h3>
              </div>
  
            <input type="text" placeholder="Busca" id="campoDeBusca" />
            
        </header>

        <main>

            <nav className="menu-vertical">

                <ul>
                    <li className="botoes-meunu-vertical">Início</li>
                    <li className="botoes-meunu-vertical">Explorar</li>
                    <li className="botoes-meunu-vertical">Shorts</li>
                    <li className="botoes-meunu-vertical">Inscrições</li>
                    <li className="botoes-meunu-vertical">Biblioteca</li>
                </ul>

            </nav>

            <section className="painel-de-videos">


                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>

                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>

                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                </div>

                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                </div>

                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                </div>

                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                </div>

                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                </div>

                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                </div>

            </section>

        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>

    </div>

  );

}

export default App;
