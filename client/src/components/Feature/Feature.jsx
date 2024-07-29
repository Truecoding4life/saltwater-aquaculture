import './style.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { FaTruckFast } from "react-icons/fa6";
import { FaShieldHalved } from "react-icons/fa6";







const Feature = () => {
    return (
        <div id="feature">

        
        <Container  className='text-center'>
            <Row >
                <Col className="d-flex justify-content-center align-items-center">  <p className='m-0'> <i> <FaPersonMilitaryRifle size={23} />
                </i> Military Discount </p>  </Col>
                <Col className="d-flex justify-content-center align-items-center">  <p className='m-0'> <i > <FaTruckFast size={23} />      </i> 45$ Flat Rate Nationwide Shipping </p>

                </Col>
                <Col className="d-flex justify-content-center align-items-center">  <p className='m-0'> <i> <FaShieldHalved size={23} /> </i> 100% Money Back Guarantee </p></Col>
            </Row>
        </Container></div>
    )
}


export default Feature