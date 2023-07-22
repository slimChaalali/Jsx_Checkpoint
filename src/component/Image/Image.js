import React from 'react'
import product from '../Product'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const Image = () => {
  return (
    <Card.Img variant="top"  src={product.urlImage} />
  )
}

export default Image