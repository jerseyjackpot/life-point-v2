import React from "react";
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';

function Grateful() {
  return (
    <>
      <Row className="justify-content-center">
        <Col xs={8}>
          <h2>Grateful For:</h2>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>1</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="grateful1" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>2</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="grateful2" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>3</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="grateful3" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>4</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="grateful4" />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text>5</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="grateful5" />
          </InputGroup>
        </Col>
      </Row>
    </>
  )
}
export default Grateful;