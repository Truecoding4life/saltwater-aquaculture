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
                    <h3> Anemone  </h3>
                </Col>
            </Row>
            <Row id='subheader' >
                <Col>
                    <p>
                        Here at Anemone Aquaculture, we cultivate and propagate the most beautiful anemone species for aquarium enthusiasts. Like you, we are passionate about rare and exotic anemones that are rarely seen for sale in aquarium stores. Our goal is to offer our customers the most affordable prices and reliable services.
                    </p>
                </Col>
            </Row>
            <Row id='store' className=' ' >
                <Col xl={3}>
                    <Card className='product'>
                        <div className='product-img-box'>

                        <Card.Img className='product-img' variant="top" onClick={()=>{window.location.href = '/sale/1'}}  src="https://coralsanonymous.com/cdn/shop/files/PC140981-Copy_b316c012-62f6-43f9-a6e7-a76e6ef3c189_1024x1024.jpg?v=1703901299" />
                        </div>
                        <Card.Body className='product-name-box'>
                            <Card.Title className='product-name'> Chicago Sunburst Anemone </Card.Title>
                            <Card.Text className='product-price'> $400.00 </Card.Text>
                            {/* <Button variant="dark" href='/product/1' >Add to Cart</Button> */}
                        </Card.Body>
                    </Card>
                   
                </Col>
                
            </Row>

        </Container>
    )
}

export default SalePage