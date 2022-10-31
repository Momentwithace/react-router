import React from 'react'
import { useParams } from 'react-router-dom'


const users = [
    {id: 1, name: "ace", gender: "male"},
    {id: 2, name: "john", gender: "male"},
    {id: 3, name: "cole", gender: "male"},
    {id: 4, name: "ray", gender: "male"}
]

const UserDetails = () => {
    

   const {userId} = useParams()
  return (
    
    <div>UserDetails  &rarr; {userId}</div>
    // {users.map(user => <h1>{user.name} &rarr; is a {user.gender}</h1>)}
    
  )
}

export default UserDetails