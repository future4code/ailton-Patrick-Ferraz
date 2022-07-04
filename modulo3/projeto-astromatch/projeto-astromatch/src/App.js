import logo from './logo.svg';
import './App.css';
import Home from './pags/Home';
import MatchHistory from './pags/MatchHistory';
import { useState } from 'react';
import axios from "axios"

function App() {
  const [currentScreen, setCurrentScreen] = useState("home")

 const changeScreen = () =>{
    switch(currentScreen){
      case "home":
        return <Home goToMatches={goToMatches}/>;

        case "matches":
          return <MatchHistory goToHome={goToHome}/>

          default:
          return <Home goToMatches={goToMatches}/>;
        
    }
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
