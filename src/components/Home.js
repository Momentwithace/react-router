import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state?.name)
  return (
    <div>
      <h1>Welcome to our Home Page</h1>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Home