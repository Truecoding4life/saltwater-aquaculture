import "./style.css";
import 'animate.css';
import background1 from "../../assets/background-test.jpg";
import background2 from "../../assets/background-2.jpg";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaAngleUp } from "react-icons/fa6";

const Promotion = () => {
  return (
    <Container fluid  className="p-0">
      <Row style={{backgroundImage: `url(${background1})`}} className=" p-0 promote-image" >
        <Col>      
            <h3 className="promoteString" > Premium Bubble Tip Anemone  </h3>
            <button onClick={()=>window.location.href = '/anemone'} className=" sub-promote animate__animated animate__flash" > go to collection</button>

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
