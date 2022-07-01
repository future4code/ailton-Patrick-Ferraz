import React from 'react'
import{CardInfos} from './CardPequeno.styled'

const CardPequeno = (props) => {
  return (
    <CardInfos>
        <img src={props.icon2} />
        <p>{props.info}</p>

    </CardInfos>
  )
}

export default CardPequeno