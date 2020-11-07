import React,{ useRef } from 'react';
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
    const rememberField1 = useRef();
    const rememberField2 = useRef();
    const rememberField3 = useRef();
    const rememberField4 = useRef();
    const rememberField5 = useRef();
    const gratefulField1 = useRef();
    const gratefulField2 = useRef();
    const gratefulField3 = useRef();
    const gratefulField4 = useRef();
    const gratefulField5 = useRef();
    const handleOnClick = function (event){
        console.log({
            rf1: rememberField1.current.value,
            rf2: rememberField2.current.value,
            rf3: rememberField3.current.value,
            rf4: rememberField4.current.value,
            rf5: rememberField5.current.value,
            gf1: gratefulField1.current.value,
            gf2: gratefulField2.current.value,
            gf3: gratefulField3.current.value,
            gf4: gratefulField4.current.value,
            gf5: gratefulField5.current.value
        } )
        
    }
    return (
        <>
            <Nav/>
            <Affirmation/>
            <Moods/>
            <Remembers 
            rememberField1={rememberField1}
            rememberField2={rememberField2} 
            rememberField3={rememberField3} 
            rememberField4={rememberField4} 
            rememberField5={rememberField5} />
            <Grateful
            gratefulField1={gratefulField1}
            gratefulField2={gratefulField2} 
            gratefulField3={gratefulField3} 
            gratefulField4={gratefulField4} 
            gratefulField5={gratefulField5}/>
            <Habitailment/>
            <Journal/>
            <Row className="w-100 justify-content-center">
    <Button as="input" type="submit lg" value="Submit" onClick={handleOnClick}/>{' '}
    </Row>
            
        </>
       
    )
}

export default Members;