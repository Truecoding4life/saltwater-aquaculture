import './style.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Feature = () => {
    return (
        <Container fluid id="feature" className='text-center'>
            <Row className='p-2'>
                <Col>New Arrivals Every Week</Col>
                <Col>Free Shipping on 50$ + Orders</Col>
                <Col>100% Money Back Guarantee</Col>
                <Col>24/7 Customer Service</Col>
            </Row>
        </Container>
    ) 
}


export default Feature