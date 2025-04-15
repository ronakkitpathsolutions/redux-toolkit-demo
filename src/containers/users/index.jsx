import React from 'react'
import useUsers from './useUsers'

const Users = () => {

  const { users } = useUsers()

  if(users?.isLoading) {
    return <div>Loading...</div>
  }

  if(!users?.data?.length) {
    return <div>No users found.</div>
  }

  return (
    <div>
      {users?.data?.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}

export default Users