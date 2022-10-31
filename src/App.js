import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route/>
      </Routes>
    </div>
  )
}

export default App