import React, { useState, useEffect } from "react";
import API from "../../utils/API";

function Journal() {
    const [journalinput, setJourn] = useState({ quote: "" });

    useEffect(() => {
        API.getJournal().then(data => {
            console.log(data)
            setJourn(data.data);
        })
    }, [])

return(
    <div className="columns col-md-4">
    <div className="form-group">
      <h2 for="exampleFormControlTextarea1">Journal Entry</h2>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="20"></textarea>
    </div>
    <button type="submit" className="btn btn-primary" id="submit">Submit</button>
  </div>

)

};
export default Journal();