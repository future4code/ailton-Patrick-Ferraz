import React from 'react';
import {CardBio, ImgBio, TextoH4, Div1} from './CardGrande.styled'

function CardGrande(props) {
    return (
        <CardBio>
            <ImgBio src={ props.imagem } />
            <Div1>
                <TextoH4>{ props.nome }</TextoH4>
                <p>{ props.descricao }</p>
            </Div1>
        </CardBio>
    )
}

export default CardGrande;