import React from "react";
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';


function Moods(props) {
  return (
      <>
       <Row>
        <Col lg>
        <h2 className="justify-content-center">Mood</h2>
        </Col>
        </Row>
        <Row className="justify-content-center moods">
        
          <Col xs={2}>
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png"
              alt="Grinning Face" className="moodimg" />
            <div className="form-check form-check-inline">
              <input onClick={props.handleMoodClick} className="form-check-input radioButton" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                value="1" />
            </div>
            </Col>
          <Col xs={2}>
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/slightly-smiling-face_1f642.png"
              alt="Slightly Smiling Face" className="moodimg" />
            <div className="form-check form-check-inline">
              <input onClick={props.handleMoodClick} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
            </div>
         </Col>
          <Col xs={2}>
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/neutral-face_1f610.png"
              alt="Neutral Face" className="moodimg" />
            <div className="form-check form-check-inline">
              <input onClick={props.handleMoodClick} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
            </div>
          </Col>
          <Col xs={2}>
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/slightly-frowning-face_1f641.png"
              alt="Slightly Frowning Face on Apple iOS 13.3" className="moodimg" />
            <div className="form-check form-check-inline">
              <input onClick={props.handleMoodClick} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" />
            </div>
          </Col>
          <Col xs={2}>
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/crying-face_1f622.png"
              alt="Crying Face" className="moodimg" />
            <div className="form-check form-check-inline">
              <input onClick={props.handleMoodClick} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5" />
            </div>
          </Col>
          <Col xs={2}>
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/angry-face_1f620.png"
              alt="Angry Face" className="moodimg" />
            <div className="form-check form-check-inline">
              <input onClick={props.handleMoodClick} className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="6" />
            </div>
          </Col>
        </Row>
        </>

  )
}
export default Moods;
