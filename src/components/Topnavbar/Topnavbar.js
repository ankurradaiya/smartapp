import React, { useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export const Topnavbar = () => {
  
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Navbar.Brand onClick={handleShow}>Saying Hi to my customers <FontAwesomeIcon icon={faChevronDown} /></Navbar.Brand>
            <div className="btn-head">
              <Button as={Link} to="/home" variant="light" type="button">Cancel</Button>
              <Button as={Link} to="/home" variant="success" type="button">Save</Button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Model Popup to save tittle of video creation */}
      <Modal fullscreen='xxl-down' className='custom-map-modal' show={showModal}>
        <Modal.Body>
          <div className="descritpion-box">
            <p className="desc-title">Saying Hi to my customers</p>
            <p>Fusce quis magna vel ex pellentesque consequat sed et turpis. Vivamus bibendum rutrum euismod. Sed non sagittis est, semper</p>
            <Button>Email</Button>
            <Button>Marketing</Button>
            <Button>Greeting</Button>
            <Button>Email</Button>
            <Button>Marketing</Button>
            <Button>Greeting</Button>
            <div className="btnvideo mt-3">
              <Button onClick={handleClose} variant="success" type="button">Save</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
};