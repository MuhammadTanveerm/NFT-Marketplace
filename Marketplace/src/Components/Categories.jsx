import React from 'react'
import { Card, Row, Col, Container } from 'react-bootstrap';
// import Link from "react-router-dom"
import Categorie from "../Sampledata/Categorie.js"
const Categories = () => {
  return (
<Container className="categories">
  <h1>Brower  Categories</h1>
<Row>
  {
    Categorie.map((category, index) => (
<Col md={3}  key="index">
  <Card className="CatgoriesCard"> 
  <Card.Img variant="top"  src='' alt="Mr Fox" />
    <Card.Body>
    <h2>{category.name} </h2>
    </Card.Body>
  </Card>
  </Col>
    ))
  }
  
</Row>
</Container>
  )
}

export default Categories