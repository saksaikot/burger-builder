import React from 'react'

import { Navbar,NavbarBrand,Nav,NavItem,NavLink } from 'reactstrap';

import Logo from "../../assets/images/logo.png"

export default function Header() {
  return (
      <Navbar className="navbar">  
    <div className="container">

       <NavbarBrand className="mr-auto ml-md-5 navbar__brand" href="/"> <img src={Logo} className="navbar__logo"
       alt="burger builder logo" /></NavbarBrand>
      <Nav className="mr-md-5">

        <NavItem>
          <NavLink href="#" className="navbar__nav-link">Something</NavLink>
        </NavItem>
      </Nav>
      </div>
      </Navbar>
 
  )
}
