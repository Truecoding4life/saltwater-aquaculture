import "./style.css";
import background1 from "../../../public/images/background.jpg";
import background2 from "../../../public/images/release.webp";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Promotion = () => {
  return (
    <Container fluid className="p-0">
      <Row style={{backgroundImage: `url(${background1})`}} className="text-center p-0 promote-image" >
       
          {/* <img
            id="promoteImage"
            src={background1}
            alt="anemone and clown fish background"
          ></img> */}
          <h3 id="promoteString" > We Aquaculture Coral and Anemone  </h3>
       
      </Row>
      <Row id="aquaculture" >
       
        <Col xl={6} id="context" >
          <h1 id="headline"> Aquaculture </h1>{" "}
         <p>
         Aquaculture is the practice of farming or breeding marine species in controlled environments. Our goal is to offer the highest quality specimens possible with the most sustainable practices.
        </p>
        </Col>
        <Col xl={6} className="text-center"> <img src="https://assets.technologynetworks.com/production/dynamic/images/content/380588/lab-grown-algae-can-help-coral-weather-bleaching-380588-960x540.jpg?cb=12537234"
            alt="Aquaculture" style={{width:'90%', height:'auto', borderRadius:'10px'}} /> </Col>
       
      </Row>
    </Container>
  );
};

export default Promotion;
