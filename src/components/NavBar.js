import React, { Component } from 'react';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar className='nav-bar-container' inverse collapseOnSelect >
        <Navbar.Header>
          <Navbar.Brand>
            {/* <a href="#brand">Hard To Forget!</a> */}
            <div>Hard to Forget!</div>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#/planlists">
              Plan Lists
      </NavItem>
            <NavItem eventKey={2} href="#/calender">
              Calendar
      </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}><h1>Action</h1></MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
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