import React, { useState, useEffect } from "react";
import API from "../../utils/API"

function Moods() {
    const [moodList, setMoods] = useState({ quote: "" });

    useEffect(() => {
        API.getMoods().then(data => {
            console.log(data)
            setMoods(data.data);
        })
    }, [])
    return (
        <div className="container">
    <form id="allDataForm">
  <div className="row">
    <div className="col-md-6 col-md-offset-3">
      <h2 className="date" id="date"></h2>
    </div>
  </div>
  <div className="columns col-md-4">
    <h2 className="Titles">
      Mood
    </h2>
    <div className="moods">
      <div className="imageCol">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png"
          alt="Grinning Face" className="moodimg"/>
        <div className="form-check form-check-inline">
          <input className="form-check-input radioButton" type="radio" name="inlineRadioOptions" id="inlineRadio1"
            value="1"/>
        </div>
      </div>
      <div className="imageCol">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/slightly-smiling-face_1f642.png"
          alt="Slightly Smiling Face" className="moodimg"/>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="2"/>
        </div>
      </div>
      <div className="imageCol">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/neutral-face_1f610.png"
          alt="Neutral Face" className="moodimg"/>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="3"/>
        </div>
      </div>
      <div className="imageCol">
        <img
          src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/slightly-frowning-face_1f641.png"
          alt="Slightly Frowning Face on Apple iOS 13.3" className="moodimg"/>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="4"/>
        </div>
      </div>
      <div className="imageCol">
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/crying-face_1f622.png"
          alt="Crying Face" className="moodimg"/>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" value="5"/>
        </div>
      </div>
      <div className="imageCol">
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/angry-face_1f620.png"
          alt="Angry Face" className="moodimg"/>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" value="6"/>
        </div>
      </div>
    </div>

    <h2 className="Titles">
      Habits
    </h2>
    <div className="habits">
      <div className="form-group row">
        <div className="col-sm-5">Medication taken?</div>
        <div className="col-sm-7">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="medication"/>
            
          </div>
        </div>
      </div>
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-5 col-form-label">Hours of Sleep?</label>
        <div className="col-sm-3">
          <input type="number" min="0" value="0" className="form-control" id="sleepTime"/>
        </div>
      </div>
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-5 col-form-label">Minutes of Exercise?</label>
        <div className="col-sm-3">
          <input type="number" min="0" value="0" className="form-control" id="exerciseTime"/>
        </div>
      </div>
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-5 col-form-label">Minutes Napping?</label>
        <div className="col-sm-3">
          <input type="number" min="0" value="0" className="form-control" id="napTime"/>
        </div>
      </div>
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-5 col-form-label">Servings of Caffiene?</label>
        <div className="col-sm-3">
          <input type="number" min="0" value="0" className="form-control" id="caffieneCount"/>
        </div>
      </div>
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-5 col-form-label">Servings of Alcohol?</label>
        <div className="col-sm-3">
          <input type="number" min="0" value="0" className="form-control" id="alcoholCount"/>
        </div>
      </div>
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-5 col-form-label">Hours of Digital Media?</label>
        <div className="col-sm-3">
          <input type="number" min="0" value="0" className="form-control" id="mediaTime"/>
        </div>
      </div>
      <div className="form-group row">
        <label for="inputEmail3" className="col-sm-5 col-form-label">Minutes Socializing?</label>
        <div className="col-sm-3">
          <input type="number" min="0" value="0" className="form-control" id="socialTime"/>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-5">Showered?</div>
        <div className="col-sm-7">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="showered"/>
            
          </div>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-5">Brush teeth?</div>
        <div className="col-sm-7">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="teeth"/>
            
          </div>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-5">Self Care?</div>
        <div className="col-sm-7">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="selfCare"/>
            
          </div>
        </div>
      </div>
    </div>

    <h2 className="Titles">
      Ailments
    </h2>
    <div className="form-group row">
      <div className="col-sm-5">Headache?</div>
      <div className="col-sm-7">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="headAche"/>
          
        </div>
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-5">Nausea?</div>
      <div className="col-sm-7">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="nausea"/>
          
        </div>
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-5">Exhaustion?</div>
      <div className="col-sm-7">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="exhaustion"/>
          
        </div>
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-5">Insomnia?</div>
      <div className="col-sm-7">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="insomnia"/>
          
        </div>
      </div>
    </div>
    <div className="form-group row">
      <div className="col-sm-5">Menstruation?</div>
      <div className="col-sm-7">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" id="menstruation"/>
          
        </div>
      </div>
    </div>
    <div className="dropdown">
      <button className="btn btn-secondary dropdown-toggle col-sm-7" type="button" id="appetiteDropdownButton"
        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-appetite="">
        Appetite?
      </button>
      <div className="dropdown-menu" aria-labelledby="appetiteDropdownButton" id="appetite">
        <a className="dropdown-item appetite-dropdown" data-appetite-value="1">Low</a>
        <a className="dropdown-item appetite-dropdown" data-appetite-value="2">Medium</a>
        <a className="dropdown-item appetite-dropdown" data-appetite-value="3">High</a>
        <a className="dropdown-item appetite-dropdown" data-appetite-value="4">Very High</a>
      </div>
    </div>
  </div>

  <div className="columns col-md-4">
    <h2 className="affirmation">
      Today's Affirmation:
      <br/>
      {/* {{this.affirmData}} */}
    </h2>

    <div className="grateful titles">
      <h2>Grateful For:</h2>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">1.</span>
        </div>
        <input type="text" className="form-control" placeholder="" aria-label="greatful1" aria-describedby="basic-addon1"
          id="grateful1"/>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">2.</span>
        </div>
        <input type="text" className="form-control" placeholder="" aria-label="greatful2" aria-describedby="basic-addon1"
          id="grateful2"/>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">3.</span>
        </div>
        <input type="text" className="form-control" placeholder="" aria-label="greatful3" aria-describedby="basic-addon1"
          id="grateful3"/>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">4.</span>
        </div>
        <input type="text" className="form-control" placeholder="" aria-label="greatful4" aria-describedby="basic-addon1"
          id="grateful4"/>
      </div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">5.</span>
        </div>
        <input type="text" className="form-control" placeholder="" aria-label="greatful5" aria-describedby="basic-addon1"
          id="grateful5"/>
      </div>
    </div>

    <h2 className="remember titles">
      Remember To:
    </h2>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">1.</span>
      </div>
      <input type="text" className="form-control" placeholder="" aria-label="remember1" aria-describedby="basic-addon1"
        id="remember1"/>
    </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">2.</span>
      </div>
      <input type="text" className="form-control" placeholder="" aria-label="remember2" aria-describedby="basic-addon1"
        id="remember2"/>
    </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">3.</span>
      </div>
      <input type="text" className="form-control" placeholder="" aria-label="remember3" aria-describedby="basic-addon1"
        id="remember3"/>
    </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">4.</span>
      </div>
      <input type="text" className="form-control" placeholder="" aria-label="remember4" aria-describedby="basic-addon1"
        id="remember4"/>
    </div>
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">5.</span>
      </div>
      <input type="text" className="form-control" placeholder="" aria-label="remember5" aria-describedby="basic-addon1"
        id="remember5"/>
    </div>
  </div>

  <div className="columns col-md-4">
    <div className="form-group">
      <h2 for="exampleFormControlTextarea1">Journal Entry</h2>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="37"></textarea>
    </div>
    <button type="submit" className="btn btn-primary" id="submit">Submit</button>
  </div>
  </form>
</div>
  );
}

export default Moods;


