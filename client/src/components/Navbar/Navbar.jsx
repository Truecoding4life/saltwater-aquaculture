import {Container, Row, Nav, Navbar, NavDropdown} from 'react-bootstrap'
import "./style.css"
const NavbarCompt = () => {
    return (
        <Navbar expand="lg"   className="bg-body-tertiary fixed-top">
      <Container id='navbar'>
        <Navbar.Brand href="#home"> Live Aquarium Fish</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default NavbarCompt