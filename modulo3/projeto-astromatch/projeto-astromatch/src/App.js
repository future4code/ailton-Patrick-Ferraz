import logo from './logo.svg';
import './App.css';
import Home from './pags/Home/Home';
import MatchHistory from './pags/MatchHistory/MatchHistory';
import { useState } from 'react';
import axios from "axios"
import { aluno, url_base } from './components/constants';

function App() {
  const [currentScreen, setCurrentScreen] = useState("home")

 const changeScreen = () =>{
    switch(currentScreen){
      case "home":
        return <Home goToMatches={goToMatches} clear={clearAll}/>;

        case "matches":
          return <MatchHistory goToHome={goToHome} clear={clearAll}/>

          default:
          return <Home goToMatches={goToMatches} clear={clearAll}/>;
        
    }
  }

  const clearAll = () =>{
    axios
    .put(`${url_base}/${aluno}/clear`)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  const goToMatches = () => {
    setCurrentScreen("matches")
  }

  const goToHome = () =>{
    setCurrentScreen("home")
  }


  return (
    <div>
      {changeScreen()}
     
     
    </div>
  );
}

export default App;
