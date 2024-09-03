import React from 'react'
import '../App.css'
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

import img1 from '../assets/spacewalking.avif'
const Signup = () => {
  return (
    <Container>
    <div className='signup-section'>
        <Row>
            <Col md={6} >
            <img  src={img1} className="sign-img" fluid  aria-placeholder='Signup photo' />
            </Col>
            <Col md={6}  >
            <div className='create-account '>
                <h1> Create Account </h1>
                <p>
                   Welcome! Enter Your Details Start Creating Collecting
                    and Sellings
                   Your NFTs.
                </p>
                <Form>
          <Form.Group className="form_group">
           
            <InputGroup>
              <InputGroup.Text><FaUser /></InputGroup.Text>
              <Form.Control
                placeholder="Enter your username"
                className="form_style"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="form_group">
          
            <InputGroup>
            
              <InputGroup.Text>
              <FaEnvelope />
              </InputGroup.Text>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="form_style"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="form_group">
            
            <InputGroup>
              <InputGroup.Text><FaLock /></InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                className="form_style"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="form_group">
           
            <InputGroup>
              <InputGroup.Text><FaLock /></InputGroup.Text>
              <Form.Control
                type="password"
                placeholder="Confirm your password"
                className="form_style"
              />
            </InputGroup>
          </Form.Group>
          <Button className="btn mt-4 w-75 border rounded-5 s">Create Account</Button>
          
        </Form>
            </div>
            </Col>
        </Row>
    </div>
    </Container>
  )
}

export default Signup