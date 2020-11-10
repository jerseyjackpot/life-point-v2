import React, { useState, useeffect } from "react";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import NumericInput from 'react-numeric-input';
import Col from 'react-bootstrap/Col';


function Habitailment(props) {
  const [medTaken, setMedTaken] = useState(false);
  const [showeredToday, setShowerTaken] = useState(false);
  const [brushedToday, setBrushed] = useState(false);
  const [selfCares, setCares] = useState(false);
  const [headAches, setHeadache] = useState(false);
  const [nauseas, setNauseas] = useState(false);
  const [exhaustions, setExhaustions] = useState(false);
  const [insomnias, setInsomnias] = useState(false);
  const [menstruations, setMenstruations] = useState(false);

  const handClick = (event) => {
    setMedTaken(!medTaken);
    setShowerTaken(!showeredToday);
    setBrushed(!brushedToday);
    setCares(!selfCares);
    setHeadache(!headAches);
    setNauseas(!nauseas);
    setExhaustions(!exhaustions);
    setInsomnias(!insomnias);
    setMenstruations(!menstruations);
  }
  // used ...stuff to see whats there
  // then used actual names to get the values
  const handleNumericInput = (num, numStr, target) => {
    const stateName = target.getAttribute("data-name");
    console.log(stateName);
    switch (stateName) {
      case "setSleepTime":
        return props.setSleepTimeState(num);
      case "setExerciseTime":
        return props.setExerciseTimeState(num);
      case "setNapTime":
        return props.setNappingTimeState(num);
      case "setSleepTime":
        return props.setSleepTimeState(num);
      case "setCaffieneAmt":
        return props.setCaffieneState(num);
      case "setAlcoholAmt":
        return props.setAlcoholState(num);
      case "setMediaTime":
        return props.setMediaState(num);
      case "setSocialMinutes":
        return props.setSocialTimeState(num);

    }
    console.log(num);
    console.log(target);
    console.log(target);
    // props.setSleepTimeState(num);
    // props.setExerciseTimeState(num);
    // props.setNappingTimeState(num);
    // props.setCaffieneState(num);
    // props.setAlcoholState(num);
    // props.setMediaState(num);
    // props.setSocialTimeState(num);
  }

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
              <Form.Group>
                <Form.Check ref={props.medicationTaken} type="checkbox" value={medTaken} onClick={handClick} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
              <label for="sleepTime" className="col-sm col-form-label">Hours of Sleep?</label>
            </Col>
            <Col xs={4}>
              <NumericInput data-name="setSleepTime" value={props.sleepTimeState} onChange={handleNumericInput} ref={props.sleepHours} className="form-control" id="sleepTime" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
              <label for="exerciseTime" className="col-sm col-form-label">Minutes of Exercise?</label>
            </Col>
            <Col xs={4}>
              <NumericInput data-name="setExerciseTime" ref={props.exerciseMinutes} onChange={handleNumericInput} ref={props.exerciseTime} className="form-control" id="exerciseTime" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
              <label for="napTime" className="col-sm col-form-label">Minutes Napping?</label>
            </Col>
            <Col xs={4}>
              <NumericInput data-name="setNapTime" ref={props.nappingMinutes} onChange={handleNumericInput} ref={props.nappingTime} className="form-control" id="napTime" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
              <label for="caffieneCount" className="col-sm col-form-label">Servings of Caffeine?</label>
            </Col>
            <Col xs={4}>
              <NumericInput data-name="setCaffieneAmt" ref={props.caffeineServings} onChange={handleNumericInput} className="form-control" id="caffieneCount" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
              <label for="alcoholCount" className="col-sm col-form-label">Servings of Alcohol?</label>
            </Col>
            <Col xs={4}>
              <NumericInput data-name="setAlcoholAmt" ref={props.alcoholServings} onChange={handleNumericInput} className="form-control" id="alcoholCount" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
              <label for="mediaTime" className="col-sm col-form-label">Hours of Digital Media?</label>
            </Col>
            <Col xs={4}>
              <NumericInput data-name="setMediaTime" ref={props.digitalMediaHours} onChange={handleNumericInput} className="form-control" id="mediaTime" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>
              <label for="socialTime" className="col-sm col-form-label">Minutes Socializing?</label>
            </Col>
            <Col xs={4}>
              <NumericInput data-name="setSocialMinutes" ref={props.socialMinutes} onChange={handleNumericInput} className="form-control" id="socialTime" />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>Showered?</Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Check ref={props.showered} type="checkbox" value={showeredToday} />
              </Form.Group>

            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>Brush teeth?</Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Check ref={props.teethBrush} type="checkbox" value={brushedToday} />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={4}>Self Care?</Col>
            <Col xs={4}>
              <Form.Group>
                <Form.Check ref={props.selfCare} type="checkbox" value={selfCares} />
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
            <Form.Group>
              <Form.Check ref={props.headache} type="checkbox" />
            </Form.Group>
          </Col>

        </Row>
        <Row className="justify-content-center">
          <Col xs={4}>Nausea?</Col>
          <Col xs={4}>
            <Form.Group>
              <Form.Check ref={props.nausea} type="checkbox" />
            </Form.Group>
          </Col>

        </Row>
        <Row className="justify-content-center">
          <Col xs={4}>Exhaustion?</Col>
          <Col xs={4}>

            <Form.Group>
              <Form.Check ref={props.exhaustion} type="checkbox" />
            </Form.Group>
          </Col>

        </Row>
        <Row className="justify-content-center">
          <Col xs={4}>Insomnia?</Col>
          <Col xs={4}>

            <Form.Group>
              <Form.Check ref={props.insomnia} type="checkbox" />
            </Form.Group>
          </Col>

        </Row>
        <Row className="justify-content-center">
          <Col xs={4}>Menstruation?</Col>
          <Col xs={4}>

            <Form.Group>
              <Form.Check ref={props.menstruation} type="checkbox" />
            </Form.Group>
          </Col>

        </Row>
        <Row className="justify-content-center">
          <Col xs={8}>
            <Form.Group>
              <Form.Label>Appetite?</Form.Label>
              <Form.Control ref={props.appetite} as="select">
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