import React from 'react';
import "./style.css";
import Affirmation from "../components/affirmations/index";
import Moods from "../components/mood/index";
import Journal from "../components/journal/index";
import Grateful from "../components/grateful/index";
import Remembers from "../components/remember/index";
import Habitailment from '../components/habits-ailments';
import Nav from '../components/navbar';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';



function Members() {
    return (
        <>
            <Nav/>
            <Affirmation/>
            <Moods/>
            <Remembers/>
            <Grateful/>
            <Habitailment/>
            <Journal/>
            <Row className="w-100 justify-content-center">
    <Button as="input" type="submit lg" value="Submit" />{' '}
    </Row>
            
        </>
       
    )
}

export default Members;