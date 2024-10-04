import "./style.css";
import 'animate.css';
import background1 from "../../assets/clownfish.png";
import background2 from "../../assets/coral.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAngleUp } from "react-icons/fa6";
import { FiArrowDownRight } from "react-icons/fi";
import { Button } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

const Promotion = () => {
  return (
    <Container fluid className="p-0">
      <Row className=" p-0 promote promote-container" >
        <Col sm={12} className="text-center sale">
          <h3 className="promoteString" > Premium Marine Aquaculture   </h3>
          

        </Col  >
        <Col sm={12} className="text-center fish" style={{ position: 'relative' }}>
          <Row>
            <Col sm={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <p className="font-style"> Get your first coral with us today</p>
            <button onClick={() => window.location.href = '/anemone'} className=" sub-promote animate__animated animate__flash" > Go To Sale <i><FiArrowDownRight />
          </i></button>
            </Col>
            <Col sm={8}>
          <img src={background1} className="promote-image" ></img>
            </Col>

         

          </Row>
        {/* <Carousel>
      <Carousel.Item> 
        <img src={background1} className="promote-image" >
          </img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>        
          <img src={background2} className="promote-image"></img>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}

        </Col>


        {/* <img
            id="promoteImage"
            src={background1}
            alt="anemone and clown fish background"
          ></img> */}

      </Row>
      <Row id='about-us' className="text-center">

        <Col xl={12} id="context" >
          <i> <FaAngleUp size={32} className="animate__animated animate__heartBeat animate__delay-4s animate__repeat-3" />
          </i>
          <h1 className="header"> Why Choose Us </h1>{" "}
          <p>
            We are a veteran owned business dedicated to providing the highest quality specimens using sustainable practices. We are constantly working to expand our selection of specimens and are always looking for new and innovative ways to improve our aquaculture practices.
          </p>
        </Col>


      </Row>
    </Container>
  );
};

export default Promotion;
