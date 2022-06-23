import React, { Component } from 'react'
import {Header} from "./styled"
import CriarPlaylist from '../components/CriarPlaylist'

export default class Home extends Component {
  render() {
    return (
      <div>
      <Header>Sou header </Header>
      <main>
     <CriarPlaylist>
       
     </CriarPlaylist>
      
      </main>
      <footer>Sou um footer</footer>
</div>
    )
  }
}
