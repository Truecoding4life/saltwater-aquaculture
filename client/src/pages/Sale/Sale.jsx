// style
import './style.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SalePage = () => {
    return (
        <Container id='shop'>
            <Row>
                <Col id='header'>
                    <h1> Anemone  </h1>
                </Col>
            </Row>
            <Row id='subheader' >
                <Col>
                    <p>
                        Here at Anemone Aquaculture, we cultivate and propagate the most beautiful anemone species for aquarium enthusiasts. Like you, we are passionate about rare and exotic anemones that are rarely seen for sale in aquarium stores. Our goal is to offer our customers the most affordable prices and reliable services.
                    </p>
                </Col>
            </Row>
            <Row id='store' className=' p-2' >
                <Col xl={3}>
                    <Card className='product'>
                        <Card.Img variant="top"  src="https://coralsanonymous.com/cdn/shop/files/PC140981-Copy_b316c012-62f6-43f9-a6e7-a76e6ef3c189_1024x1024.jpg?v=1703901299" />
                        <Card.Body>
                            <Card.Title className='product-name'> Chicago Sunburst Anemone </Card.Title>
                           
                            <Button variant="dark">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                   
                </Col>
                
            </Row>

        </Container>
    )
}

export default SalePage