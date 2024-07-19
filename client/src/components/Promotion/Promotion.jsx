import './style.css'
import background1 from '../../../public/images/background.jpg'
import background2 from '../../../public/images/release.webp'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Promotion = ()=> {
    return (
       <Container fluid className='p-0'>

        <Row className='text-center p-0'>
            <Col className='container'>
            <img id='promoteImage'  src={background1}  alt='anemone and clown fish background' ></img>
                <h2 id='promoteString'>
                    We Specialize in Bubble Tip Anemone
                </h2>
            </Col>           
        </Row>
        <Row>
            <h1>
                How We Taking Care of Our Nem ?
            </h1>
            <p> 
                We provides our anemone the with only the best environment to thrive and 
            </p>
        </Row>
       </Container>
    )
}

export default Promotion;