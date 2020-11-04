import React, { useState, useEffect } from "react";
import API from "../../utils/API"

function Habitailment() {
    const [habinput, setHabit] = useState({ quote: "" });

    useEffect(() => {
        API.getHabitailment().then(data => {
            console.log(data)
            setHabit(data.data);
        })
    }, [])

return(
    <>
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
    </>
)
}
export default Habitailment;