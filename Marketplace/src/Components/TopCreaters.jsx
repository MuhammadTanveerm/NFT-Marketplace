import React from 'react'
import { useSelector } from 'react-redux';
import { TopCreator } from '../feactures/productsSlice';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Container } from 'react-bootstrap';
import profile from '../assets/robot/m1.avif'
const TopCreaters = () => {
    const creators = useSelector(TopCreator);
  return (
    <div className=" top-creator">
<Container>
<h2>Trending Collections</h2>
<Row>

    <Col>
    <p>Checkout Top Rated Creators on NFT Marketplace</p>
    </Col>
    <Col>
    <button className="text-end">Vew Ranking</button>
    </Col>
</Row>

        <Row>
        {
    creators.map(top => (
        <Col md={3} className='my-1'>
        <Card key={top.id}>
        <span className='creatorid'> {top.id}</span>
        <Link to={`/creators/${top.id}`}>
           
            <Card.Img variant="top"  src={profile} alt="Mr Fox" />
<Card.Body>
<Card.Title>{top.creatername}</Card.Title>
<Card.Text>Total Sales:  <span className="text-light mx-1 ">{top.Totalsales} ETH</span></Card.Text>
</Card.Body>
</Link>
        </Card>
        </Col>
    ))
}

        </Row>
    
</Container>
</div>

  )
}

export default TopCreaters