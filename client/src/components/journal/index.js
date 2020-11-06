import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import bound from "./bound.jpg";
import '../../pages/style.css';

function Journal() {
    
return(
    <>
  <Container>
    <Row className="justify-content-center">
      <Col xs={8}>
      <h2 for="exampleFormControlTextarea1">Journal Entry</h2>
            <Form.Group controlId="exampleForm.ControlTextarea1">
       <Form.Control id="Journalstyle" as="textarea" rows={20} style={{ backgroundImage:`url(${bound})`, backgroundRepeat: 'no-repeat'}}></Form.Control>
  </Form.Group>
  </Col>
    </Row>
    </Container>
    </>
  

)

};
export default Journal;