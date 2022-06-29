import React from "react";
import './Signup.scss'
import { Col, Row, Form, Card, Button, Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Homenav} from '../../components/Sidenav/Homenav';

const Signup = () => {
  return (
    <>
    <main>
    <Homenav />
    <span className="title-text">Create an account</span> 
    <div className="float-right">
       <span className="circle-one"></span>  
       <span className="circle-two"></span>  
       <span className="circle-three"></span>  
     </div>
   <section className="d-flex align-items-center mt-10">
     <Container>
       <Row className="justify-content-center">
         <Col md={6} className="d-flex align-items-center justify-content-center">
           <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
             <Form className="mt-4">
               <Form.Group id="email" className="mb-3">
                 <Form.Label>Full Name</Form.Label>
                 <InputGroup>
                  <Form.Control autoFocus type="email" placeholder="Enter your full name" />
                 </InputGroup>
               </Form.Group>

               <Form.Group id="email" className="mb-3">
                 <Form.Label>Email Address</Form.Label>
                 <InputGroup>
                  <Form.Control autoFocus type="email" placeholder="Enter your email" />
                 </InputGroup>
               </Form.Group>

               <Form.Group>
                 <Form.Group id="password" className="mb-3">
                   <Form.Label className="text-start">New Password</Form.Label>
                   <Card.Link className="small float-right">Strong</Card.Link>
                   <InputGroup>
                     <Form.Control type="password" placeholder="Enter your password"/>
                   </InputGroup>
                 </Form.Group>
               </Form.Group>
               <div className="text-center">
               <Button variant="success" type="submit">
                 Signup
               </Button>
               </div>
             </Form>

             <div className="d-flex justify-content-center align-items-center mt-5">
               <span className="fw-normal">
                Aleady user?
                 <Card.Link as={Link} to="/" className="fw-bold">
                   {` Login `}
                 </Card.Link>
               </span>
             </div>
           </div>
         </Col>
       </Row>
     </Container>
   </section>
 </main>
 </>
  )
}

export default Signup