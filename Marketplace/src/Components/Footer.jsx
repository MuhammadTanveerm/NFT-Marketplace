import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaTwitter, FaYoutube, FaTwitch, FaInstagram } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import '../App.css'
const Footer = () => {
  return (
    <footer>
    <Container>
      <Row>
        <Col md={4} className="mb-4">
          <h5 className="footer-title">NFT Marketplace</h5>
          <p className="footer-text">NFT marketplace UI created with Anima for Figma.</p>
          <p className="footer-text">Join our community</p>
          <div className="footer-icons">
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </Link>
            <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </Link>
            <Link to="https://twitch.tv" target="_blank" rel="noopener noreferrer">
              <FaTwitch size={24} />
            </Link>
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </Link>
          </div>
        </Col>
        <Col md={4} className="mb-4">
          <h5 className="footer-title">Explore</h5>
          <ul className="footer-links">
            <li><Link to="#">Marketplace</Link></li>
            <li><Link to="#">Rankings</Link></li>
            <li><Link to="#">Connect a wallet</Link></li>
          </ul>
        </Col>
        <Col md={4} className="mb-4 ">
          <h5 className="footer-title">Join Our Weekly Digest</h5>
          <p className="footer-text">Get exclusive promotions & updates straight to your inbox.</p>
          <Form className="footer-form d-flex " >
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter your email here" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Subscribe
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer