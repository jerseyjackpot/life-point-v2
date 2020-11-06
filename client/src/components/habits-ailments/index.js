import React from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import NumericInput from 'react-numeric-input';
import Col from 'react-bootstrap/Col';


function Habitailment() {


  return (
    <>
      <Container>
        <h2 className="Titles">
          Habits
    </h2>
        <div className="habits">
        <Row className="justify-content-center">
            <Col xs={4}>Medication Taken?</Col>
            <Col xs={4}>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
          <Col xs={4}>
            <label for="inputEmail3" className="col-sm col-form-label">Hours of Sleep?</label>
            </Col>
            <Col xs={4}>
              <NumericInput className="form-control" id="sleepTime" />
            
            </Col>
          </Row>
          <Row className="justify-content-center">
          <Col xs={4}>
            <label for="inputEmail3" className="col-sm col-form-label">Minutes of Exercise?</label>
            </Col>
            <Col xs={4}>
              <NumericInput className="form-control" id="exerciseTime" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
            <label for="inputEmail3" className="col-sm col-form-label">Minutes Napping?</label>
            </Col>
            <Col xs={4}>
              <NumericInput className="form-control" id="napTime" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
            <label for="inputEmail3" className="col-sm col-form-label">Servings of Caffeine?</label>
            </Col>
            <Col xs={4}>
              <NumericInput className="form-control" id="caffieneCount" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
            <label for="inputEmail3" className="col-sm col-form-label">Servings of Alcohol?</label>
            </Col>
            <Col xs={4}>
              <NumericInput className="form-control" id="alcoholCount" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
            <label for="inputEmail3" className="col-sm col-form-label">Hours of Digital Media?</label>
            </Col>
            <Col xs={4}>
              <NumericInput className="form-control" id="mediaTime" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
            <label for="inputEmail3" className="col-sm col-form-label">Minutes Socializing?</label>
            </Col>
            <Col xs={4}>
              <NumericInput className="form-control" id="socialTime" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>Showered?</Col>
            <Col xs={4}>
              <Form.Group controlId="shower">
                <Form.Check type="checkbox" />
              </Form.Group>

            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>Brush teeth?</Col>
            <Col xs={4}>
              <Form.Group controlId="teeth?">
                <Form.Check type="checkbox" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>Self Care?</Col>
            <Col xs={4}>
              <Form.Group controlId="selfCare">
                <Form.Check type="checkbox" />
              </Form.Group>
            </Col>

          </Row>
        </div>
        <h2 className="Titles">
          Ailments
    </h2>
        <Row className="justify-content-center">
          <Col xs={4}>Headache?</Col>
          <Col xs={4}>
            <Form.Group controlId="headAche">
              <Form.Check type="checkbox" />
            </Form.Group>
          </Col>

        </Row>
        <Row className="justify-content-center">
          <Col xs={4}>Nausea?</Col>
          <Col xs={4}>
            <Form.Group controlId="nausea">
              <Form.Check type="checkbox" />
            </Form.Group>
          </Col>

        </Row>
        <Row className="justify-content-center">
          <Col xs={4}>Exhaustion?</Col>
          <Col xs={4}>

            <Form.Group controlId="exhaustion">
              <Form.Check type="checkbox" />
            </Form.Group>
          </Col>

        </Row>
        <Row className="justify-content-center">
          <Col xs={4}>Insomnia?</Col>
          <Col xs={4}>

            <Form.Group controlId="insomnia">
              <Form.Check type="checkbox" />
            </Form.Group>
          </Col>

        </Row>
        <Row className="justify-content-center">
          <Col xs={4}>Menstruation?</Col>
          <Col xs={4}>

            <Form.Group controlId="menstruation">
              <Form.Check type="checkbox" />
            </Form.Group>
          </Col>

        </Row>
        <Row className="justify-content-center">
        <Col xs={8}>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Appetite?</Form.Label>
              <Form.Control as="select">
                <option data-appetite-value="0">Select One</option>
                <option data-appetite-value="1">Low</option>
                <option data-appetite-value="2">Medium</option>
                <option data-appetite-value="3">High</option>
                <option data-appetite-value="4">Very High</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Habitailment;