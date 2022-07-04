import React from 'react'
import { url_base,aluno } from '../components/constants'

export default function Home(props) {



  return (
    <div>
        <h1>astroMatch</h1>

<button onClick={props.goToMatches}>Matches</button>
    </div>
  )
}
