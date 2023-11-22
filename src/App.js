import React from 'react'
import { Container } from 'react-bootstrap';

/** Components */
import Header from './components/Header';
import Footer from './components/Footer';

/** Pages */
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <>
      <Header />
      <Container className='mainContainer'>
        <HomePage />
      </Container>
      <Footer />
    </>

  )
}

export default App;
