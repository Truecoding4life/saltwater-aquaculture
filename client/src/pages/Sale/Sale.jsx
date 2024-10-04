// style
import './style.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Product from '../../components/Product/Product';
import Animals from '../../utils/seed';

import { useParams } from 'react-router-dom';

const SalePage = () => {
    let { category } = useParams();
    let product = Animals[category];
    let data = [];
    for(let key in product){
        data.push(product[key])
    }
    console.log(data)
    if (!product) {
        return (
            <Container id='shop'>
                <Row>
                    <Col className='header'>
                        <h3  >Category Not Found</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Sorry, the category you are looking for does not exist.</p>
                    </Col>
                </Row>
            </Container>
        );
    }

    return (
        <Container id='shop'>
            <Row className='headline'>
                <Col className='header'>
                    {category === 'anemone' ? <h3>Anemone</h3> : <h3>Corals</h3>}
                </Col>
            </Row>
            <Row className='subheader'>
                <Col>
                    <p>
                        Here at Saltwater Aquaculture, we cultivate and propagate the most beautiful species for aquarium enthusiasts. Like you, we are passionate about rare and exotic anemones and corals that are rarely seen for sale in aquarium stores. Our goal is to offer our customers the most affordable prices and reliable services.
                    </p>
                </Col>
            </Row>
            <Row id='store' className=''>
                {data.map((item, index) => (
                    <Product key={index} product={item} category={category} />
                ))}
            </Row>
        </Container>
    );
};

export default SalePage;
