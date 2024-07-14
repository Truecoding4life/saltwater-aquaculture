import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCompt from './components/Navbar/Navbar'
import Feature from './components/Feature/Feature'

function App() {

  return (
    <Container fluid>
      <Row>

        <NavbarCompt />
      </Row>
      <Row >
        <Feature />
      </Row>
      
    </Container>
  )
}

export default App
