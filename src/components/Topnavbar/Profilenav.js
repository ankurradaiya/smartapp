import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';

export const Profilenav = () => (
  <Navbar expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        <Navbar.Brand href={void(0)}>My account</Navbar.Brand> 
        <Navbar.Brand href="/" className="logout-txt">Logout</Navbar.Brand>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)