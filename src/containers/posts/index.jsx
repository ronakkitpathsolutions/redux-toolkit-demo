import React from 'react'
import usePosts from './usePosts'

const Posts = () => {
  const { posts } = usePosts()

  if(posts?.isLoading) {
    return <div>Loading...</div>
  }

  if(!posts?.data?.length) {
    return <div>No posts found.</div>
  }

  return (
    <div>
      {posts?.data?.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
}

export default Posts