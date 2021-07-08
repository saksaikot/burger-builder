import React from "react";
import { NavLink } from "react-router-dom";

import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <Navbar className="navbar primary-accent">
      <div className="container">
        <NavbarBrand className="mr-auto ml-md-5 navbar__brand" href="/">
          <img src={Logo} className="navbar__logo" alt="burger builder logo" />
        </NavbarBrand>
        <Nav className="mr-md-5">
          <NavItem>
            <NavLink exact to="/" className="navbar__nav-link">
              Burger Builder
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink exact to="/order" className="navbar__nav-link">
              Order
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    </Navbar>
  );
}
