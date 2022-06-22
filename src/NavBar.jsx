import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>

      <NavLink to="/client">Client</NavLink>

      <NavLink to="/template">Template</NavLink>

      <NavLink to="/email">Email</NavLink>
    </nav>
  )
}

export default NavBar
