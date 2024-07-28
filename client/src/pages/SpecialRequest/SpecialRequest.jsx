import React from "react";
import './style.css';

import {useState} from 'react'; 


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const SpecialRequest = () => {

  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

  const handleEmailChange = (e)=>{
    setEmail(e.target.value);

  };

  const handleMessageChange = (e)=>{
    setMessage(e.target.value);
  };
  
    return (
      <Container className="request-container">
        <Row> <h3 className="header"> Special Request </h3></Row>
        <Row className="subheader">
          <p> At Saltwater Aquaculture we always listen to our customer to provide the best service to our customer, if you have question or just want to ask us anything just fill out the form, our team response time is less than 24 hours </p>
        </Row>
        <Row>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={handleEmailChange} placeholder="Enter email" />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" onChange={handleMessageChange} placeholder="Type Here" />
      </Form.Group>
     
      <Button className="form-button" onClick={()=>{alert(`email is ${email}. Text: ${message}`)}} variant="dark" type="submit">
        
        Submit
      </Button>
    </Form>
        </Row>
      </Container>
    );
};

export default SpecialRequest;