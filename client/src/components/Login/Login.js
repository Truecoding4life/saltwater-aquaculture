import React from "react";
import {
  Container,
  Button,
  Offcanvas,
  Row,
  Col,
  Form,
  InputGroup,
} from "react-bootstrap";

const Login = ({ clickedLogin, handleClose }) => {
  return (
    <Container>
      <Offcanvas>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default Login;
