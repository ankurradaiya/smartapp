import React from 'react';
import { Col, Row, Form, Button, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

export const Profile = () => (
    <div className="bg-white shadow-soft border rounded border-light">
    <img src="./assets/img_avatar.png" className="profile_avatar" alt="Avatar"></img>  
    <FontAwesomeIcon icon={faPencilAlt} />
    <Form>
      <Row >
        <Col md={4} >
          <Form.Group id="email" className="mb-3">
            <Form.Label className="float-left">Frist Name</Form.Label>
            <InputGroup>
              <Form.Control autoFocus type="text" placeholder="Ankur" />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col md={4} >
          <Form.Group>
            <Form.Group id="password" className="mb-3">
              <Form.Label className="float-left text-start">Last Name</Form.Label>
              <InputGroup>
                <Form.Control type="text" placeholder="Radadiya" />
              </InputGroup>
            </Form.Group>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Form.Group>
            <Form.Group id="password" className="mb-3">
              <Form.Label className="float-left text-start">Email</Form.Label>
              <InputGroup>
                <Form.Control type="text" placeholder="ankurradadiya@gmail.com" />
              </InputGroup>
            </Form.Group>
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col md={3}>
          <Button as={Link} to="/dashboard" className="float-left" variant="success" type="submit">
            Save Changes
          </Button>
        </Col>
      </Row>
    </Form>
  </div>
)