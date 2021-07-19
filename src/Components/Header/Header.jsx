import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

import Logo from "../../assets/images/logo.png";

const mapStateToProps = (state) => ({
  token: state.token,
});

function Header(props) {
  const navLinks = props.token ? (
    <>
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
    </>
  ) : (
    <NavItem>
      <NavLink exact to="/register" className="navbar__nav-link">
        Register
      </NavLink>
      <NavLink exact to="/login" className="navbar__nav-link">
        Login
      </NavLink>
    </NavItem>
  );

  return (
    <Navbar className="navbar primary-accent">
      <div className="container">
        <NavbarBrand className="mr-auto ml-md-5 navbar__brand" href="/">
          <img src={Logo} className="navbar__logo" alt="burger builder logo" />
        </NavbarBrand>
        <Nav className="mr-md-5">{navLinks}</Nav>
      </div>
    </Navbar>
  );
}

export default connect(mapStateToProps)(Header);
