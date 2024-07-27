// style
import './style.css'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Product from '../../components/Product/Product'
import Animals from '../../utils/seed'

import { useParams} from 'react-router-dom';



const SalePage = () => {

    let {category} = useParams();

    let product = Animals[category];
    console.log(product);
    return (
        <Container id='shop'>
            <Row>
                <Col id='header'>
                    {category === 'anemone' ? <h3> Anemone </h3> : <h3> Corals </h3>}
                </Col>
            </Row>
            <Row id='subheader' >
                <Col>
                    <p>
                        Here at Saltwater Aquaculture, we cultivate and propagate the most beautiful species for aquarium enthusiasts. Like you, we are passionate about rare and exotic anemones and corals that are rarely seen for sale in aquarium stores. Our goal is to offer our customers the most affordable prices and reliable services.
                    </p>
                </Col>
            </Row>
            <Row id='store' className=' ' >
                {}
                <Product product={product} />
            </Row>

        </Container>
    )
}

export default SalePage