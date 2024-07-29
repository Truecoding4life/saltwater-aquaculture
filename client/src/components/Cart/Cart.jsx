import './style.css';
import React from 'react';
import { Container, Button, Navbar, Offcanvas } from 'react-bootstrap';


const Cart = ({show, handleClose})=>{
    return(
        <div>
            <Offcanvas show={show} onHide={handleClose} placement="end" style={{ width: '500px', height: '100vh' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas heading</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Woohoo, you are reading this text in an offcanvas!
        </Offcanvas.Body>
      </Offcanvas>
        </div>
    )
}

export default Cart