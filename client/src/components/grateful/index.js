import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function Grateful() {
    // const [gratefulList, setGrate] = useState({ quote: "" });

    // useEffect(() => {
    //     API.getGrate().then(data => {
    //         console.log(data)
    //         setGrate(data.data);
    //     })
    // }, [])

return(
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
);
}
export default Grateful();