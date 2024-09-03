import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../App.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { FiUser } from "react-icons/fi";
import { GrBasket } from "react-icons/gr";
const Topbar = () => {
  return (
    <Navbar expand="lg" className=" main-navbar">
      <Container >
        <Navbar.Brand as ={Link}  to ='/' className=' '> <GrBasket className=" brand-icon mb-2 me-2"  />  NFT Marketplace </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="marketplace">Marketplace </Nav.Link>
            <Nav.Link as={Link} to="#action3">Rakings</Nav.Link>
            <Nav.Link  as={Link} to ="wallet">Connect  a wallet </Nav.Link>
            
          </Nav>
        
        </Navbar.Collapse>
        <Link to="/signup">
          <Button className='main-Button'>
            <FiUser className="me-1" /> Sign up
          </Button>
        </Link>
      </Container>
    </Navbar>

  )
}

export default Topbar