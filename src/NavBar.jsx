import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  NavbarStyled,
  Logo,
  NavLinkStyled,
} from './StyledComponents/NavBar.styled'

const NavlinkStyled = {
  color: '#105991',
  padding: 20,
  fontSize: 50,
  float: 'right',
}

const NavBar = () => {
  return (
    <NavbarStyled>
      <NavLinkStyled>
        <Logo src="./img/email logo.png" alt="Email Logo" />
        <NavLink style={NavlinkStyled} to="/email">
          Email
        </NavLink>
        <NavLink style={NavlinkStyled} to="/template">
          Template
        </NavLink>
        <NavLink style={NavlinkStyled} to="/client">
          Client
        </NavLink>
        <NavLink style={NavlinkStyled} to="/">
          Home
        </NavLink>
      </NavLinkStyled>
    </NavbarStyled>
  )
}

export default NavBar
