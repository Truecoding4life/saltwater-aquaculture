import { useState } from 'react';
import Cart from '../Cart/Cart';
import { Container, Button, Navbar, Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FaCartShopping } from "react-icons/fa6";


import { Link } from 'react-router-dom';
import './style.css'

const NavbarS = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    < div id='navbar' >

      <Container>
        <Navbar style={{ margin: 'auto' }} className='d-flex justify-content-between'>


          <div>
            <Navbar.Brand id='nav-brand' href="/"> Saltwater Aquaculture </Navbar.Brand>


            <Link to='anemone' className="inline-link">
              <h4>Anemone</h4>
            </Link>
            <Link to='coral' className="inline-link">
              <h4>Coral</h4>
            </Link>
            <Link to='special-request' className="inline-link">
              <h4>Special Request </h4>
            </Link>
          </div>



          <Button type='button' onClick={handleShow} variant='none'>
            <i className="bg-none text-white"><FaCartShopping size={23} /></i>
          </Button>





       


          <Cart show={show} handleClose={handleClose}  />
        </Navbar>

      </Container>



    </ div>
  );
}

export default NavbarS