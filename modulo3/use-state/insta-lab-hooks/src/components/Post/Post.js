import React, { useState } from 'react'
import { PostContainer, PostHeader, UserPhoto, PostPhoto, PostFooter, CommenrtContaine } from './styles'

import IconeComContador from '../IconeComContador/IconeComContador'
import SecaoComentario from '../SecaoComentario/SecaoComentario'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'

const Post = (props) => {

  const [curtido, setCurtido] = useState(false);
  const [numeroCurtidas, setNumeroCurtida] = useState(0);
  const [comentando,setComentado] = useState(false);
  const [numeroComentarios, setNumeroComentarios] = useState(0);
  const [comentarios,setComentarios] = useState([])

  const onClickCurtida = () => {
    if(curtido){
      setCurtido(!curtido);
      setNumeroCurtida(numeroCurtidas - 1)
    } else {
      setCurtido(!curtido)
      setNumeroCurtida(numeroCurtidas + 1)
    }
  };

  const onClickComentario = () => {
    setComentado(!comentando)
  };

  const enviarComentario = (comentario) => {
    const listaDeComentarios = [...comentarios, comentario]
      setComentarios(listaDeComentarios)
      setComentado(false)
      setNumeroComentarios(numeroComentarios + 1)
    
  }
  
  const iconeCurtida = curtido ? (iconeCoracaoPreto) : (iconeCoracaoBranco)
  const caixaDeComentario = comentando ? (
    <SecaoComentario enviarComentario={enviarComentario}/>
  ) : (
    comentarios.map(comentario => {
      return (
        <CommenrtContaine>
          <p>{comentario}</p>
        </CommenrtContaine>
      )
    })
  )

  return (
    <PostContainer>
      <PostHeader>
        <UserPhoto src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
         valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
         valorContador={numeroComentarios}
        />
      </PostFooter>
      {caixaDeComentario}
    </PostContainer>
  )
}

export default Post