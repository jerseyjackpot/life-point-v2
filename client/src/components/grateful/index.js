import React from "react";
import { Row, InputGroup, FormControl, Col } from 'react-bootstrap';


function Grateful(props) {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={8}>
          <h2>Grateful For:</h2>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>1</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="grateful1" ref={props.gratefulField1}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>2</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="grateful2" ref={props.gratefulField2}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>3</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="grateful3" ref={props.gratefulField3}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>4</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="grateful4" ref={props.gratefulField4}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>5</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="grateful5" ref={props.gratefulField5}/>
          </InputGroup>
        </Col>
      </Row>
    </>
  )
}
export default Grateful;