import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
// import bound from "./bound.jpg";
import textured from "./textured.jpg";
import '../../pages/style.css';

function Journal(props) {
    
return(
    <>
  <Container>
    <Row className="justify-content-center">
      <Col xs={8}>
      <h2 for="exampleFormControlTextarea1">Journal Entry</h2>
            <Form.Group>
       <Form.Control ref={props.journalField} id="Journalstyle" as="textarea" rows={20} style={{ backgroundImage:`url(${textured})`, backgroundRepeat: 'no-repeat'}}></Form.Control>
  </Form.Group>
  </Col>
    </Row>
    </Container>
    </>
  

)

};
export default Journal;