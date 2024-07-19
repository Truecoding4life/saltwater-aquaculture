import './style.css'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
const NavLink = ()=>{
    return (
        <Container id='nav-link' >
        <Link to='sale' className="inline-link">
          <h2>Anemone</h2>
        </Link>    
        <Link to='shipping' className="inline-link">
          <h2>Shipping</h2>
        </Link>
        <Link to='special-request' className="inline-link">
          <h2>Special Request </h2>
        </Link>
        
     
        </Container>
    )
}

export default NavLink