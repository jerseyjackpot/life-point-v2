import React from "react";
import { Row, Col, InputGroup, FormControl } from 'react-bootstrap';

function Remembers(props) {
  console.log(props);
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={8}>
          <h2 className="remember titles">
            Remember To:</h2>
          <InputGroup className="mb-3">
            <InputGroup.Prepend >
              <InputGroup.Text >1</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="remember1" ref={props.rememberField1}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>2</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="remember2" ref={props.rememberField2}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>3</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="remember3" ref={props.rememberField3}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>4</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="remember4" ref={props.rememberField4}/>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>5</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="remember5" ref={props.rememberField5}/>
          </InputGroup>
        </Col>
      </Row>
    </>
  )
}
export default Remembers;