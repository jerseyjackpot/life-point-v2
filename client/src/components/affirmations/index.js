import React, {useState, useEffect} from "react";
import { Card } from "react-bootstrap";
import chalk from "./chalk.jpg";
import { getAffirmation } from "../../utils/API"

function Affirmation() {
const [affirmation, setAffirmation] = useState();

useEffect(() =>{
  getAffirmation().then(data =>{
    setAffirmation(data);
  })
})
  return (
    <>
      <Card className="affirmation" style={{ backgroundImage:`url(${chalk})` }}>
        <Card.Body>{JSON.stringify(affirmation.affirmation)}</Card.Body>
      </Card>
    </>
  );
}

export default Affirmation;
