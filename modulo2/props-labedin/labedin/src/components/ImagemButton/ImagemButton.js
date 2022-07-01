import React from 'react';
import{Button, ImgButton} from './ImagemButton.styled'

function ImagemButton(props) {
    return (
        <Button>
            <ImgButton src={ props.imagem }/>
            <p>{ props.texto }</p>
        </Button>

    )
}

export default ImagemButton;