import React, { useState, useEffect } from "react";
import API from "../../utils/API"

function Remembers() {
    const [RemList, setRems] = useState({ quote: "" });

    useEffect(() => {
        API.getRems().then(data => {
            console.log(data)
            setRems(data.data);
        })
    },
        [])

    return (
    <>
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
    </>
    )
}
export default Remembers;