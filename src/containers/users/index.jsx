import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../redux/slices/users.slice'

const Users = () => {

  const dispatch = useDispatch()
  const users = useSelector((store) => store.users.users)

  useEffect(() => {
      dispatch(fetchUsers({}))
  }, [dispatch])

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