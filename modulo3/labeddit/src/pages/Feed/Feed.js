import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import {BASE_URL} from '../../constants/urls'
import {CardPosts} from './styled'
import { goToPost } from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'
import CreatePostForm from './CreatePostForm'



export default function Feed() {

  useProtectedPage()
  const navigate = useNavigate()
  const posts = useRequestData([], `${BASE_URL}/posts`)

  const onCLickCard = (id) =>{
    goToPost(navigate,id)
  }

  console.log(posts)
 
 const postsList = posts && posts.map((post)=>{
  return <CardPosts onClick={() => onCLickCard (post.id)}>
    <p>####### Enviado por: {post.username}</p>
    <h2>{post.title}</h2>
    <strong>AQUI É O BODY DO POST {post.body}</strong>
    </CardPosts>
 })


  return (
    <div>
      <CreatePostForm/>
      {postsList}
    </div>
  )
}
