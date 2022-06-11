import logo from './logo.svg';
import './App.css';
import {Componente1} from './components/componente1/componente1'
import React from 'react';


class App extends React.Component{
  render () {
    return (
      <div className="App">
      <Componente1/>
      </div>

    );

    }
}

export default App;
