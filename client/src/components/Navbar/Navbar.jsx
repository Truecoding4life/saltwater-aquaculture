import { useState } from 'react';
import Cart from '../Cart/Cart';
import { Container, Button, Navbar, Offcanvas } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { FaCartShopping } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";


import { Link } from 'react-router-dom';
import './style.css'

const NavbarS = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogin = function name(params) {

  }
  return (
    < div id='navbar' >

      <Container>
        <Navbar style={{ margin: 'auto' }} className='d-flex justify-content-between'>


          <div>
            <Navbar.Brand id='nav-brand' href="/"> Marine Aquaculture </Navbar.Brand>


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

          <div className='navbar-button ms-auto'>
            <Button type='button' onClick={handleLogin} id='login-button' >

              <i className='bg-none'>  <IoMdPerson size={23} /></i>

            </Button>
            <Button type='button' onClick={handleShow} variant='none'>
              <i className="navbar-button bg-none"><FaCartShopping size={23} /></i>
            </Button>



          </div>









          <Cart show={show} handleClose={handleClose} />
        </Navbar>

      </Container>



    </ div>
  );
}

export default NavbarS