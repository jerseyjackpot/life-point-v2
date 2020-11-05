import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function Moods() {
  // const [moodList, setMoods] = useState({ quote: "" });

  // useEffect(() => {
  //   API.getMoods().then(data => {
  //     console.log(data)
  //     setMoods(data.data);
  //   })
  // }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2 className="date" id="date"></h2>
        </div>
      </div>
      <div className="columns col-md-4">
        <h2 className="Titles">Mood</h2>
        <div className="moods">
          <div className="imageCol">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png"
              alt="Grinning Face" className="moodimg" />
            <div className="form-check form-check-inline">
              <input className="form-check-input radioButton" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                value="1" />
            </div>
          </div>
          <div className="imageCol">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/slightly-smiling-face_1f642.png"
              alt="Slightly Smiling Face" className="moodimg" />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" />
            </div>
          </div>
          <div className="imageCol">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/neutral-face_1f610.png"
              alt="Neutral Face" className="moodimg" />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3" />
            </div>
          </div>
          <div className="imageCol">
            <img
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/slightly-frowning-face_1f641.png"
              alt="Slightly Frowning Face on Apple iOS 13.3" className="moodimg" />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4" />
            </div>
          </div>
          <div className="imageCol">
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/crying-face_1f622.png"
              alt="Crying Face" className="moodimg" />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5" />
            </div>
          </div>
          <div className="imageCol">
            <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/angry-face_1f620.png"
              alt="Angry Face" className="moodimg" />
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Moods;
