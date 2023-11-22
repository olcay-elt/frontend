import React from 'react'
import { Container } from 'react-bootstrap';

/** Components */
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Container className='mainContainer'>
        <div>Welcome Happy Shoppıng</div>
      </Container>
      <Footer />
    </>

  )
}

export default App;