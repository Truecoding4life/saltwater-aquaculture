import "./style.css";
import background1 from "../../../public/images/background.jpg";
import background2 from "../../../public/images/release.webp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Promotion = () => {
  return (
    <Container fluid className="p-0">
      <Row className="text-center p-0">
        <Col className="container">
          <img
            id="promoteImage"
            src={background1}
            alt="anemone and clown fish background"
          ></img>
          <h2 id="promoteString">We Specialize in Bubble Tip Anemone</h2>
        </Col>
      </Row>
      <Row id="aquaculture">
       
        <Col xl={6} id="context">
          <h1 id="headline"> Aquaculture </h1>{" "}
         <p>
         Anemone aquaculture is the practice of farming or breeding sea anemones in controlled environments. Our goal is to offer the highest quality specimens possible with the most sustainable practices.
        </p>
        </Col>
        <Col xl={6} className="text-center"> <img src="https://tidalgardens.com/media/wysiwyg/pages/about-us/coral-farm2.png"
            alt="Aquaculture" style={{width:'90%', height:'auto', borderRadius:'10px'}} /> </Col>
       
      </Row>
    </Container>
  );
};

export default Promotion;
