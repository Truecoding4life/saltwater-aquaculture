import './style.css'
import background1 from '../../../public/images/background1.jpg'
import background2 from '../../../public/images/release.webp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Promotion = ()=> {
    return (
       <Container fluid>

        <Row>
            <Col className='container text-center'>
            <img id='promoteImage' src={background1} alt="promotion image" style={{width: '100%', height: 500}}/>
             <h1 id='promoteString'> 50% off Clownfish </h1>
            </Col>
            <Col className='container text-center'>
            <img id='promoteImage' src={background2} alt="release Image" style={{width: '100%', height:500, overflow:'hidden'}}/>

            <h1 id='releaseString'> New Release</h1>
            </Col>
        </Row>
       </Container>
    )
}

export default Promotion;