import './style.css';
import React from 'react';
import { Container, Button, Navbar, Offcanvas, Row, Col } from 'react-bootstrap';
import { useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

const Cart = ({ show, handleClose }) => {
    const [enterCoupon, setEnterCoupon] = useState(false)

    return (
        <div>
            <Offcanvas id='shopping-cart' show={show} onHide={handleClose} placement="end" style={{ width: '500px', height: '100vh' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title> <FaCartShopping />
                        Check out </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body >
                    <Row className='checkout-products d-flex align-items-center'>
                        <p className='text-center'>Your Cart is empty</p>
                    </Row>
                    <Row>
                        <Col xl={12} className='checkout-coupon'>
                            {enterCoupon ?
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Coupon Code"
                                        aria-label="Input for coupon"
                                        aria-describedby="checkout coupon code"
                                    />
                                    <Button variant="primary" id="button-addon2">
                                        Apply </Button>
                                </InputGroup>
                                :
                                <p onClick={() => { setEnterCoupon(true) }}>
                                    Have a Coupon Code? Click here
                                </p>
                            }

                        </Col>
                        <Col xl={12} className='d-flex justify-content-between checkout-total'>
                            <p>Subtotal</p>
                            <p> $ 400</p>
                        </Col>
                    </Row>
                    <Row>
                        <Button variant='success' className='m-auto'>Proceed to Check Out</Button>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Cart