import logo from "./logo.svg";
import "./App.css";
import Home from "./pags/Home/Home";
import MatchHistory from "./pags/MatchHistory/MatchHistory";
import { useState } from "react";
import axios from "axios";
import { aluno, url_base } from "./components/constants";
import { GlobalStyle } from "./pags/Home/HomeStyled";

function App() {
  const [currentScreen, setCurrentScreen] = useState("homw");

  const changeScreen = () => {
    switch (currentScreen) {
      case "home":
        return <Home goToMatches={goToMatches} clear={clearAll} />;

      case "matches":
        return <MatchHistory goToHome={goToHome} clear={clearAll} />;

      default:
        return <Home goToMatches={goToMatches} clear={clearAll} />;
    }
  };

  const clearAll = () => {
    axios
      .put(`${url_base}/${aluno}/clear`)
      .then((res) => {
        alert("Lista de matches esvaziada.");
      })
      .catch((err) => {});
  };

  const goToMatches = () => {
    setCurrentScreen("matches");
  };

  const goToHome = () => {
    setCurrentScreen("home");
  };

  return (
    <div>
      {changeScreen()}
      <GlobalStyle />
    </div>
  );
}

export default App;
