import { Container, Button, Row, Nav, Navbar, NavDropdown, Form, Col } from 'react-bootstrap'
import "./style.css"
let iconCart = (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
</svg>);

let iconSearch = (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>);

const NavbarCompt = () => {
  return (
    < Container fluid >
      <Navbar collapseOnSelect style={{ margin: 0, padding: 0 }} expand="false" className="bg-body-tertiary">
        <Container fluid id='navbar' className='justify-content-between' >
            <div >
               <Navbar.Toggle id='navbar-toggle' aria-controls="basic-navbar-nav" data-bs-toggle="collapse" style={{border:'none'}} />
          <Navbar.Brand href="/">Live Aquarium Fish</Navbar.Brand>
            </div>
         

          <Form inline>
            <Row className='justify-content-between'>
              <Col xs='auto' >
                <Form.Control
                  placeholder="Search"
                  id='search'
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </Col>
              <Col xs='auto'>
                <Button type='submit'  style={{borderRadius:20, backgroundColor:' #333'}}>{iconSearch}</Button>
              </Col>
            </Row>
          </Form>

          <Button type='button' variant='none'  >
            <i className="bg-none"> {iconCart}</i>
          </Button>

          <Navbar.Collapse id="basic-navbar-nav">
            <Container fluid className='justify-content-between'>
              <Nav className="me-auto justify-content-between">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">On Sale Items</Nav.Link>
              <NavDropdown title="Live Stocks" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Marine Fish</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Invertibrates</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Corals</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Contact Us</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#link">Contact Us</Nav.Link>

            </Nav>
            </Container>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id='saleOffer' onClick={() => alert('clicked Offer')} className="content-below-navbar" >

        <Row style={{ padding: 10 }} className='text-center'> 
          <Col >
            <h3 >July 4th Sale End In 24 Hours</h3>
          </Col>
        </Row>

      </div>
    </ Container>
  );
}

export default NavbarCompt