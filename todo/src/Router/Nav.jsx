import React from 'react'
import './nav.css'
import { NavLink } from 'react-router-dom'
function Nav() {
  return (
    <nav>
      <NavLink to='/' >Home</NavLink>
<NavLink to='/login'>Login</NavLink>

    </nav>
  )
}

export default Nav
