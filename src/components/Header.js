import React from 'react'
import { Navbar, Nav, Container, NavbarToggle, NavbarCollapse, NavLink } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='medium' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>
            Happy Shopping
          </Navbar.Brand>
          <NavbarToggle aria-controls='toggle' />
          <NavbarCollapse id='toggle' >
            <Nav className='ms-auto'>
              <Nav.Link href='/card'>
                <FaShoppingCart />
                <span className='px-2'>Cart</span>
              </Nav.Link>
              <Nav.Link href='/login'>
                <FaUser />
                <span className='px-2'>Login</span>
              </Nav.Link>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header