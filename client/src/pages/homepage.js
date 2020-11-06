import React from 'react';
import "./homepage.css";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';



function Homepage() {
    return (
        <>
            
            <h2>Please click on the buttons below to log your progress, review history, or reach out to a professional:</h2>
            <Container className="center">
                <Row className="justify-content-center">
                    <a href="/members"><button id="button-a" type="button" className="btn btn-outline-info btn-lg"> Daily
                    Entry</button></a>
                    </Row>
                    <Row>
                        <Col xs={5}>
                    <a href="/calendar"><button id="button-b" type="button"
                        className="btn btn-outline-info btn-lg">Calendar</button></a>
                        </Col>
                        <Col xs={6}></Col>
                    <a href="/resources"><button id="button-c" type="button"
                        className="btn btn-outline-info btn-lg">Resources</button></a>
                </Row>
            </Container>
            
        </>
    );
}

export default Homepage;