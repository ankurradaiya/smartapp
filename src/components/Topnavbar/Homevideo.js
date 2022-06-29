import React from 'react';
import { Nav, Navbar,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Homevideo = () => (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
        <Navbar.Brand href={void(0)}>Saved Videos</Navbar.Brand>
        <div className="btn-head">
            <Button as={Link} to="/createvideo" variant="success" type="button">Create New</Button>
        </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
)