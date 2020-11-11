import React,{useContext} from 'react';
import "./homepage.css";
import { Row, Col, Container } from 'react-bootstrap';
import UserContext from "../UserContext";
import { useHistory, Link } from "react-router-dom";


function Homepage() {
    const { email, loggedin} = useContext(UserContext);
    const History = useHistory();
    
    // if not logged in, it redirects to login page
    if(!loggedin){History.push("/login");}
    return (
        <>
           {console.log("user data",email,loggedin)} 
          
            <h2>Please click on the buttons below to log your progress, review history, or reach out to a professional:</h2>
            <Container className="center">
                <Row className="justify-content-center">
                    <Link to="/members"><button id="button-a" type="button" className="btn btn-outline-info btn-lg"> Daily
                    Entry</button></Link>
                    </Row>
                    <Row>
                        <Col xs={5}>
                    <Link to="/calendar"><button id="button-b" type="button"
                        className="btn btn-outline-info btn-lg">Calendar</button></Link>
                        </Col>
                        <Col xs={6}></Col>
                    <Link to="/resources"><button id="button-c" type="button"
                        className="btn btn-outline-info btn-lg">Resources</button></Link>
                </Row>
            </Container>
            
        </>
    );
}

export default Homepage;