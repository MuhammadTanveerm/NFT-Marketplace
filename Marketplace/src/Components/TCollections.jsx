import React from 'react'
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../feactures/productsSlice';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import profile from '../assets/robot/m1.avif'
const TCollections = () => {
  const products = useSelector(selectAllProducts);
  return (
    <Container className='Collections'>
      <h2>Trending Collections</h2>
      <p>Checkout our Weekly updated Trending Collections.</p>
     
  <Row>
    {
      products.map(product => (
        <Col md={4}>
          <Card key={product.id}>
            <Link to={`/product/${product.id}`}>
            <Card.Img variant="top" src={product.photo} alt={product.productName} />
            <div className="small-outer d-flex justify-content-between">
        <div className='small-inner'>
        {product.images.map((image, index) => (
              <img className='mx-2' key={index} src={image} alt={`${product.productName} ${index + 1}`} />
            ))}
          {/* <img src={c11} alt="small-box" /> */}
        </div>
        </div>
            </Link>
            <Card.Body>
        <Card.Title> {product.productName}</Card.Title>
        <div className="d-flex  align-items-center  founder text-white"> 
                        <span> <img src={profile} alt="animakid"  className='mx-2' />
                    </span> {product.creater}</div>
  
      </Card.Body>
          </Card>
        </Col>
      ))
    }
    {/* <Col md={4}>
    <Card >
      <Card.Img variant="top" src={c1} />
      <div className="small-outer d-flex justify-content-between">
        <div className='small-inner'>
          <img src={c11} alt="small-box" />
        </div>
        <div className='small-inner'>
          <img src={c11} alt="small-box" />
        </div>
        <div className='small-inner'>
          <img src={c11} alt="small-box" />
          <h4 className="overlay ">1025</h4>
        </div>
        
      </div>
      <Card.Body>
        <Card.Title>Magic Mushroom 0325</Card.Title>
        <div className="d-flex  align-items-center  founder text-white"> 
                        <span> <img src={c1} alt="animakid"  className='mx-2' />
                    </span> Shroomie</div>
  
      </Card.Body>
    </Card>
    </Col> */}
  </Row>


    </Container>

  )
}

export default TCollections