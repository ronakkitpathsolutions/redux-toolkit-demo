import React from 'react'
import useComments from './useComments'

const Comments = () => {
  
  const { comments } = useComments()

  if(comments?.isLoading) {
    return <p>Loading...</p>;
  }

  if(!comments?.data?.length) {
    return <p>No comments found.</p>;
  }

  return (
    <div>
      {comments?.data?.map(comment => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
          <p><strong>{comment.email}</strong></p>
          <hr />
          <p>{comment.postId}</p>
        </div>
      ))}
    </div>
  )
}

export default Comments