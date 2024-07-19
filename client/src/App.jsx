import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCompt from './components/Navbar/Navbar'
import Feature from './components/Feature/Feature'
import Promotion from './components/Promotion/Promotion';

function App() {

  return (
    <>

      <Container fluid>
        <Row>

          <NavbarCompt />
        </Row>
       <Outlet/>

 
      </Container>
    </>
  )
}

export default App
