import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { useParams } from 'react-router-dom'
import useRequestData from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import { Loading } from '../../components/Loading/Loading'

export default function Post() {
  useProtectedPage()
  const params = useParams()
  const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)


const commentsList = comments && comments.map((comments)=>{
  return <div>
    <p>Por: {comments.username }</p>
    <p>{comments.body}</p>
  </div>
})

  return (
    <div>
      {commentsList.lenght >0 ? commentsList : <Loading/>}
    </div>
  )
}
