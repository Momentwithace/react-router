import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ContactUs from './ContactUs';

const Nav = () => {
  return (
    <ul>
        <li>
            <NavLink to='/home'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/contactUs'>ContactUs</NavLink>
        </li>
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
    </ul>
  )
}

export default Nav