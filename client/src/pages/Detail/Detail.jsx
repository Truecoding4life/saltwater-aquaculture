import './style.css'
import React, { useState } from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ButtonGroup, Button, Form, InputGroup } from 'react-bootstrap'


const Animals = [ {coral: []}, {anemone: [ { 'Chicago Sun Burst': {name:'Chicago Sunburst', price : 400 , inStock: true, care: 'For Chicago Sunburst we recommend good water parameter, medium to high flow is extremely important to keep these guys happy and wavy. Feeding is not necessary for them because they can generate their own energy through photosynthesis that why having a decent LED from 200 to 300 PAR is ideally to bring our their stunning color.', description: 'The Chicago Sunburst Anemone is a stunning variant of the Bubble Tip Anemone (Entacmaea quadricolor). Its origin traces back to a specific lineage of Bubble Tip Anemones that displayed unique and vibrant coloration, primarily shades of orange and yellow, reminiscent of a sunburst.'}}]}, {fish: [ { 'Clown Fish': {name:'Clown Fish'}}]}]
const Detail = () => {
    let product = Animals[1].anemone[0]['Chicago Sun Burst'];
    const [quantity, setQuantity] = useState(1);
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };
    console.log(product)

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <Container className="container p-3 ">
            <Row>
                <Col xl={4} className='d-flex justify-content-center'>
                    <img style={{ width: '100%' }} src="https://coralsanonymous.com/cdn/shop/files/PC140981-Copy_b316c012-62f6-43f9-a6e7-a76e6ef3c189_1024x1024.jpg?v=1703901299" alt="" />
                </Col>
                <Col xl={8} className=''>
                    <div id='add-to-cart-section' style={{ paddingInlineEnd:'30%'}}  >
                        <h2 id='product-name'> Chicago Sunburst Anemone</h2>
                        <div id='price-display' className='d-flex justify-content-between'>
                            <h3 id='price'> ${product.price}</h3>
                            {product.inStock ? <p id='inStock'> In Stock</p> : <p id='outStock'> Out of Stock</p>}
                           
                        </div>

                        <Form>
                            <Form.Group className='d-flex align-items-center p-2'>
                                <InputGroup style={{ height: '50px', width: '130px', borderRadius: '0', border: ' 1px solid' }}>
                                    <Button variant='none' style={{ borderRadius: '0' }} onClick={handleDecrement}>-</Button>
                                    <Form.Control type='number' value={quantity} readOnly className='text-center' style={{ width: '20px', borderRadius: '0', border: 'none' }} />
                                    <Button variant='none' style={{ borderRadius: '0' }} onClick={handleIncrement}>+</Button>
                                </InputGroup>
                                <Button variant='dark' style={{ marginBlock: '10px', marginLeft: '10px', borderRadius: '0', height: '50px' }}>Add to Cart</Button>
                            </Form.Group>
                        </Form>
                        <p style={{ padding: '10px', fontFamily: 'Roboto' }}>
                            We usually ship within 1-2 business days. If you have any questions please contact us
                        </p>

                    </div>



                </Col>
            </Row>
            <Row id='product-description'>
                <Col xl={12}>
                    <h3> Chicago Sunburst Anemone </h3>
                    <p> The Chicago Sunburst Anemone is a stunning variant of the Bubble Tip Anemone (Entacmaea quadricolor). Its origin traces back to a specific lineage of Bubble Tip Anemones that displayed unique and vibrant coloration, primarily shades of orange and yellow, reminiscent of a sunburst.

                        The name Chicago Sunburst is derived from its distinct appearance and its identification or propagation by aquarium enthusiasts and breeders, particularly those in the Chicago area. Over time, these anemones were selectively bred and propagated in captivity to enhance and stabilize their striking coloration, leading to their popularity among marine aquarium hobbyists </p>
                </Col>
                <Col xl={12}>
                    <h3> Care Requirement</h3> 
                    <p> For Chicago Sunburst we recommend good water parameter, medium to high flow is extremely important to keep these guys happy and wavy. Feeding is not necessary for them because they can generate their own energy through photosynthesis that why having a decent LED from 200 to 300 PAR is ideally to bring our their stunning color.</p>
                </Col>

            </Row>
        </Container>
    );
};

export default Detail;



