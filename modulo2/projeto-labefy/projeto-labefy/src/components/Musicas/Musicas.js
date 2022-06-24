import axios from 'axios'
import React, { Component } from 'react'

export default class Musicas extends Component {

//   state = {
//     playlist:{},
//   }

// componentDidMount(){
//   this.pegarInfoPlaylist()
// }

//   pegarInfoPlaylist = () => {
//     axios.get(this.props.url)
//     .then((res)=>{
//       console.log(res)
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   }

  render() {
    // console.log(this.state.playlist)
    return (
      <div>{this.props.url}</div>
    )
  }
}
