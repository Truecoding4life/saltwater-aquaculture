import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarS from './components/Navbar/Navbar'
import Feature from './components/Feature/Feature'
import NavLink from './components/NavLink/NavLink'
import Footer from './components/Footer/Footer'
import Promotion from './components/Promotion/Promotion';

function App() {

  return (
    <div  >

      <Container fluid>
        <Row>

          <NavbarS />
        </Row>
        <Row>
      <NavLink/>
        </Row>
        <Row>
          <Feature/>
        </Row>

       <Outlet className='text-center'/>

      <Row>
        <Footer/>
      </Row>
      </Container>
    </div>
  )
}

export default App
