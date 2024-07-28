import React from 'react';
import './style.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FaEnvelope } from "react-icons/fa6";
import { FaMobile } from "react-icons/fa6";
import photo from '../../assets/about-us-photo.jpg';

const AboutUs = () => {
    return (
      <Container id='about-us-container'>
        <Row>
          <Col xl={12}>
            <h3 className='header'>About Us</h3>
          </Col>
          <Col xl={12}>
            <p>
              We are a small veteran owned business located in San Jose, California specializing in aquaculture anemone and some coral. Our mission is to provide the highest quality specimens using sustainable practices. We are committed to providing the best possible experience for our customers and are always looking for ways to improve our service. We are constantly working to expand our selection of specimens and are always looking for new and innovative ways to improve our aquaculture practices.
            </p>
          </Col>
        </Row>
        <Row>
          <h3 className='header'>Founder</h3>
          <div className='d-flex '>
             <p className=''>
          Jay, the founder of Saltwater Aquaculture, is a proud veteran of the United States Army National Guard with an unwavering passion for marine life. His dedication to excellence drives him to adhere to the highest standards of aquaculture, continually seeking out and integrating innovative techniques and practices. {"Jays'"}commitment ensures that he consistently provides top-quality specimens while promoting the importance of sustainable practices within the marine aquarium community.
          </p>
          </div>
          <Col xl={3}> </Col>
          <Col xl={8}></Col>
          
        </Row>
        <Row>
          <h3 className='header'>Shipping</h3>
          <p>
          When you place an order with Saltwater Aquaculture, you can rest assured that your specimens will be shipped with the utmost care and attention to detail.
          We do 45$ flat rate shipping to anywhere in the United States. We ship Monday through Wednesday and guarantee live arrival. If there are any issues with your order, please contact us within 24 hours of delivery.
          </p>
        </Row>
        <Row>
          <h3 className='header'>Contact</h3>
          <p><FaEnvelope/> <a href='mailto:nghiemjay@gmail.com' > NGHIEMJAY@GMAIL.COM  </a>  </p>   
          <p> <FaMobile /> (408)-242-5371</p>
        </Row>
      </Container>
    );
};

export default AboutUs;