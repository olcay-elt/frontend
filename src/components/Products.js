import React from 'react'
import {
  Card
} from 'react-bootstrap'

const Products = ({ product }) => {
  return (
    <>
      <Card className='mx-2 mb-3 '>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>

          <Card.Text>
            {product.description}
          </Card.Text>

        </Card.Body>
      </Card>
    </>
  )
}

export default Products
