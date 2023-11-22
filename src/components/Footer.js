import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  const thisyear = new Date().getFullYear()

  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p className='text-center'>
              Happy Shopping &copy; {thisyear}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer