import { Container, Button, Row, Nav, Navbar, NavDropdown, Form, Col } from 'react-bootstrap'
import "./style.css"
const NavbarCompt = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container id='navbar' className='justify-content-between'>
        <Navbar.Brand href="#home"> Live Aquarium Fish</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Sale</Nav.Link>
            <NavDropdown title="Sale" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Marine Fish</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Invertibrate
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"> Corals</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Contact Us
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
            <Form inline>
              <Row>
                <Col xs='auto'>
                 <Form.Control
                  placeholder="Search"
                  id='search'
                  aria-label="Username"
                  aria-describedby="basic-addon1">

                  </Form.Control>
                </Col>
                <Col xs='auto'>
                  <Button type='success' variant="success">Search</Button>
                </Col>
              </Row>
               
             
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarCompt