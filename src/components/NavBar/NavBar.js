import React, { Component } from 'react';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <Navbar className='nav-bar-container font-gugi f4' inverse collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>
            {/* <a href="#brand">Hard To Forget!</a> */}
            <div className='font-shri f2 b ttu'>Hard to Forget !</div>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#/planlists">
              Plan Lists
      </NavItem>
            <NavItem eventKey={2} href="#/card">
              Stickers
      </NavItem>
            <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="#/join-us">Join us</MenuItem>
              <MenuItem divider />
              {/* <MenuItem eventKey={3.3} href="#/contact">Contact</MenuItem> */}
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              Login
            </NavItem>
            <NavItem eventKey={2} href="#">
              Sign Up
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;