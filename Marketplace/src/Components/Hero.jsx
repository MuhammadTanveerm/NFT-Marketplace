import React from 'react'
import {Row, Col, Button, Card,Container} from 'react-bootstrap';
import { IoRocketOutline } from "react-icons/io5";
import  '../App.css'
import walking from '../assets/spacewalking.avif'
const Hero = () => {
  return (
    <Container>
        < div className='hero-section'> 
     <Row className=" justify-content-center">
        <Col className="" sm={12}  md={11}>
        <Row>

<Col xs={12} md={6} className="hero-text">

<div className="content-box p-2">

    <h1>Discover Digital art & Collect NFTs</h1>
    <p>Lorem ipsum, dolor sit amet consectetur
         adipisicing elit. Eveniet totam iure illum 
         et quos? Hic provident quo error omnis, aut corporis
          beatae blanditiis facere dolorum impedit 
      ?</p>
        <Button className='main-Button'> <IoRocketOutline className="me-3"  />Get Started</Button>
</div>
<div className='numbers d-flex justify-content-between my-4'>
  <span> <h3>140K+</h3> <p> Total Sale</p></span>
  <span> <h3>100K+</h3> <p> Auctions</p></span>
  <span> <h3>240+</h3> <p> Artists</p></span>
</div>
</Col>
<Col xs={12} md={6} className="hero-text">
<Card >
      <Card.Img variant="top"  className="fluid w-auto" src={walking} />
      <Card.Body>
        <Card.Title>Space Walking</Card.Title>
      
       <div className="d-flex  align-items-center "> <span> <img src={walking} alt="animakid"  className='mx-2' /></span> <p>Animakid</p></div>
      </Card.Body>
    </Card></Col>
</Row>
        </Col>
      </Row> 
    
    
     </div>
    </Container>
  )
}

export default Hero