import React from "react";
import { Form, Row, Col, Container } from 'react-bootstrap';
import textured from "./textured.jpg";
import '../../pages/style.css';

function Journal(props) {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={8}>
            <h2 for="exampleFormControlTextarea1">Journal Entry</h2>
            <Form.Group>
              <Form.Control ref={props.journalField} id="Journalstyle" as="textarea" rows={20} style={{ backgroundImage: `url(${textured})`, backgroundRepeat: 'no-repeat' }}></Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  )

};
export default Journal;