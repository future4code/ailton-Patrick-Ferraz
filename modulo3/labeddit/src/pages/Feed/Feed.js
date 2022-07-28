import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'

export default function Feed() {
  useProtectedPage()
  return (
    <div>Feed</div>
  )
}
