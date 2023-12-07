import React from 'react'
import products from '../assets/products'
import { Row, Col } from 'react-bootstrap'
import Products from '../components/Products'

const HomePage = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {
          products.map((product, i) => (
            <Col key={i} sm={12} md={6} lg={4} xl={3}>
              <Products product={product} />
            </Col>
          ))
        }
      </Row>
    </>
  )
}

export default HomePage
