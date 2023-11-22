import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../../assets/products'

const HomePage = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product, i) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3}>
              {product.name}
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default HomePage