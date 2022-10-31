import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import ContactUs from './components/ContactUs'
import Register from './components/Register';
import UserDetails from './components/UserDetails';
import User from './components/User'
import PageNotFound from './components/PageNotFound';
import Welcome from './components/Welcome'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contactUs' element={<ContactUs />}/>

        <Route path='/user' element={<User />}>
           <Route path=':userId' element={<UserDetails />}/>
        </Route>
        
        <Route path='/register' element={<Register />}/>
        <Route path='*' element={<PageNotFound />}/>
        <Route path='/welcome' element={<Welcome />} />
      </Routes>
    </div>
  )
}

export default App