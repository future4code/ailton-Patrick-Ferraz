import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

export default function Post() {
  useProtectedPage()
  return (
    <div>Post</div>
  )
}
