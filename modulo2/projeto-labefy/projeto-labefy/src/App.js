import React, { Component } from 'react'
import Home from './pages/Home/Home'
import styled from 'styled-components';


const Container = styled.div`
margin: 0;
padding: 0;
box-sizing: border-box;
border: solid black 1px;
`

class App extends Component {

  render() {
    return (
      <Container>
      <Home>
        
      </Home>
      </Container>
    )
  }
}

export default App;