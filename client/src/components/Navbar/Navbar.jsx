import { Container, Button, Navbar, Row, Col } from 'react-bootstrap';
let iconCart = (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
</svg>);

import { Link } from 'react-router-dom';
import './style.css'

const NavbarS = () => {
  return (
    < div id='navbar' >

      <Container>
 <Navbar style={{ margin:'auto'}} className='d-flex justify-content-between'>


        <div>
           <Navbar.Brand id='nav-brand' href="/"> Saltwater Aquaculture </Navbar.Brand>


            <Link to='sale' className="inline-link">
              <h4>Anemone</h4>
            </Link>
            <Link to='shipping' className="inline-link">
              <h4>Shipping</h4>
            </Link>
            <Link to='special-request' className="inline-link">
              <h4>Special Request </h4>
            </Link>
        </div>
         
           
      
         <Button type='button' variant='none'>
              <i className="bg-none text-white">{iconCart}</i>
            </Button>
     


        
           
      
       


      </Navbar>

      </Container>
     


    </ div>
  );
}

export default NavbarS