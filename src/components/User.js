import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const initialUsers = [
    {id: 1, name: "ace", gender: "male"},
    {id: 2, name: "john", gender: "male"},
    {id: 3, name: "cole", gender: "male"},
    {id: 4, name: "ray", gender: "male"}
]

const User = () => {
const [user, setUser] = useState(initialUsers)
const [params, setParams] = useSearchParams();

const gender = params.get("gender")

useEffect(() => {
    if(!gender) setUser(initialUsers);
    else setUser(initialUsers.filter((u) => u.gender === gender));
} , [gender])


  return (
    
    <div>
    <button
        onClick={() => {
            setParams({})
        }}>
            All User
        </button>

        <button
        onClick={() => {
            setParams({gender: "female"})
        }}>
            Female User
        </button>

        <button
        onClick={() => {
            setParams({gender: "male"})
        }}>
            Male User
        </button>

        {user.map((user) => {
            <h1 key={user.id}>
            {user.name} &rarr; is a {user.gender}
            </h1>
        })}
       
    <Outlet/>
    </div>
  )
}

export default User;