import React from "react";
import './Login.scss'
import { Col, Row, Form, Card, Button, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Homenav} from '../../components/Sidenav/Homenav';

const Login = () => {
  return (
    <main>
     <Homenav />
     <span className="title-text">Sign In</span>
      <div className="float-right">
        <span className="circle-one"></span>  
        <span className="circle-two"></span>  
        <span className="circle-three"></span>  
      </div>
    <section className="d-flex align-items-center mt-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} className="d-flex align-items-center justify-content-center">
            <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
              <Form className="mt-4 login-form">
                <Form.Group id="email" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <InputGroup>
                   <Form.Control autoFocus type="email" placeholder="Enter your email" />
                  </InputGroup>
                </Form.Group>
                <Form.Group>
                  <Form.Group id="password" className="mb-3">
                    <Form.Label className="text-start">Password</Form.Label>
                    <Card.Link className="small float-right">Forgot?</Card.Link>
                    <InputGroup>
                      <Form.Control type="password" placeholder="Enter your password"/>
                    </InputGroup>
                  </Form.Group>
                </Form.Group>
                <div className="text-center">
                <Button as={Link} to="/home" variant="success" type="submit">
                  Login
                </Button>
                </div>
              </Form>

              <div className="d-flex justify-content-center align-items-center mt-5">
                <span className="fw-normal">
                  New here?
                  <Card.Link as={Link} to="/signup" className="fw-bold">
                    {` Signup `}
                  </Card.Link>
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </main>
  )
}

export default Login