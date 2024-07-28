import './style.css'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { ButtonGroup, Button, Form, InputGroup } from 'react-bootstrap'
import Animals from '../../utils/seed.js';

import ProgressBar from 'react-bootstrap/ProgressBar';



const Detail = () => {
    let { id, category } = useParams();
    let [flowRequirement, setFlowRequirement] = useState(0);
    let [lightingRequirement, setLightingRequirement] = useState(0);
    let lightFromData = Animals[category]?.[id].light;
    let flowFromData = Animals[category]?.[id].flow;

    // useEffect(()=>{
    //     if(Animals[category][id] && Animals[category]){
    //       let flowFromData = Animals[category]?.[id].flow;

    //     let lightFromData = Animals[category]?.[id].light;

    //     switch(flowFromData){
    //         case 'l': setFlowRequirement(30);
    //         break;
    //         case 'm': setFlowRequirement(70);
    //         break;
    //         case 'h': setFlowRequirement(100);
    //         break;
    //         default: setFlowRequirement(0);
    //     }

    //     switch(lightFromData){
    //         case 'l': setLightingRequirement(30);
    //         break;
    //         case 'm': setLightingRequirement(70);
    //         break;
    //         case 'h': setLightingRequirement(100);
    //         break;
    //         default: setFlowRequirement(0);
    //     }
    //     }
    // }, [category, id])

    // eslint-disable-next-line react-hooks/exhaustive-deps




    let product = Animals[category]?.[id];
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
                    <img style={{ width: '100%' }} src={product.image} alt="" />
                </Col>
                <Col xl={8} className=''>
                    <div id='add-to-cart-section' style={{ paddingInlineEnd: '30%' }}  >
                        <h2 id='product-name'> {product.name}</h2>
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
                <Col xl={12} >
                    <h3> {product.name} </h3>
                    <p> {product.description} </p>
                </Col>
                <Col xl={6} style={{marginTop:'10px'}}>
                    <h3> Care Requirement</h3>
                    <p> {product.care}</p>

                </Col>

                <Col xl={6} className="d-flex flex-column justify-content-around" >
                    <div>
                        <h3> FLOW </h3>

                        {flowFromData === 'lm' ? (


                            <ProgressBar>

                                <ProgressBar animated variant="success" label={'Low to Medium Flow'} now={70} key={2} />
                                <ProgressBar animated variant="danger" label={'High Flow'} now={30} key={1} />

                            </ProgressBar>) :
                            <ProgressBar>

                                <ProgressBar animated variant="danger" label={'Low Flow'} now={30} key={1} />
                                <ProgressBar animated variant="success" label={'Medium to High Flow'} now={70} key={2} />

                            </ProgressBar>}
                    </div>
                    <div>
                        <h3> LIGHTING  </h3>
                        {lightFromData === 'lm' ? (


                            <ProgressBar>

                                <ProgressBar animated variant="success" label={'Low to Medium Light'} now={70} key={2} />
                                <ProgressBar animated variant="danger" label={'High Light'} now={30} key={1} />

                            </ProgressBar>) :
                            <ProgressBar>

                                <ProgressBar animated variant="danger" label={'Low Light'} now={30} key={1} />
                                <ProgressBar animated variant="success" label={'Medium to High Light'} now={70} key={2} />

                            </ProgressBar>}
                    </div>

                </Col>

            </Row>
        </Container>
    );
};

export default Detail;



