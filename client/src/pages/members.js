import React,{ useRef, useState } from 'react';
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
import CameraRecorder from '../components/video/Record';



function Members() {
    const [sleepTime, setSleepTime] = useState(0);
    const setSleepTimeState = function(num){
        console.log({prev: sleepTime});
        setSleepTime(num);
    }
    const [exerciseTime, setExerciseTime] = useState(0);
    const setExerciseTimeState = function(num){
        console.log({prev: exerciseTime});
        setExerciseTime(num);
    }
    const [nappingTime, setNappingTime] = useState(0);
    const setNappingTimeState = function(num){
        console.log({prev: nappingTime});
        setNappingTime(num);
    }
    const [caffieneServings, setCaffeineAmt] = useState(0);
    const setCaffieneState = function(num){
        console.log({prev: caffieneServings});
        setCaffeineAmt(num);
    }
    const [alcoholServing, setAlcoholServings] = useState(0);
    const setAlcoholState = function(num){
        console.log({prev: alcoholServings});
        setAlcoholServings(num);
    }
    const [digitalMediaTime, setMediaTime] = useState(0);
    const setMediaState = function(num){
        console.log({prev: digitalMediaTime});
        setMediaTime(num);
    }
    const [socialTime, setSocialTime] = useState(0);
    const setSocialTimeState = function(num){
        console.log({prev: socialTime});
        setSocialTime(num);
    }
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
    const journalField = useRef();
    const mood1 = useRef();
    const mood2 = useRef();
    const mood3 = useRef();
    const mood4 = useRef();
    const mood5 = useRef();
    const mood6 = useRef();
    const medicationTaken = useRef();
    const sleepHours = useRef();
    const exerciseMinutes = useRef();
    const nappingMinutes = useRef();
    const caffeineServings = useRef();
    const alcoholServings = useRef();
    const digitalMediaHours = useRef();
    const socialMinutes = useRef();
    const showered = useRef();
    const teethBrush = useRef();
    const selfCare = useRef();
    const headache = useRef();
    const nausea = useRef();
    const exhaustion = useRef();
    const insomnia = useRef();
    const menstruation = useRef();
    const appetite = useRef();

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
            gf5: gratefulField5.current.value, 
            medsTaken: medicationTaken.current.value,
            slh: sleepTime
        } )
        
    }
    return (
        <>
            <Nav/>
            <Affirmation/>
            <Moods
            mood1 = {mood1}
            mood2 = {mood2}
            mood3 = {mood3}
            mood4 = {mood4}
            mood5 = {mood5}
            mood5 = {mood6}/>
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
            <Habitailment
            medicationTaken = {medicationTaken}
            sleepHours = {sleepHours}
            sleepTimeState = {sleepTime}
            setSleepTimeState = {setSleepTimeState}
            exerciseMinutes = {exerciseMinutes}
            exerciseTimeState = {exerciseTime}
            setExerciseTimeState = {setExerciseTimeState}
            nappingMinutes = {nappingMinutes}
            nappingTimeState = {nappingTime}
            setNappingTimeState = {setNappingTimeState}
            caffeineServings = {caffeineServings}
            caffieneState = {caffieneServings}
            setCaffieneState = {setCaffieneState}
            alcoholServing = {alcoholServing}
            alcoholState = {alcoholServings}
            setAlcoholState = {setAlcoholState}
            digitalMediaHours = {digitalMediaHours}
            digitalState = {digitalMediaTime}
            setMediaState = {setMediaState}
            socialMinutes = {socialMinutes}
            socialState = {socialTime}
            setSocialTimeState = {setSocialTimeState}
            showered = {showered}
            teethBrush = {teethBrush}
            selfCare = {selfCare}
            headache = {headache}
            nausea = {nausea}
            exhaustion = {exhaustion}
            insomnia = {insomnia}
            menstruation = {menstruation}
            appetite = {appetite} />
            <Journal
            journalField = {journalField}/>
            <CameraRecorder />
            <Row className="w-100 justify-content-center">
    <Button as="input" type="submit lg" value="Submit" onClick={handleOnClick}/>{' '}
    </Row>
            
        </>
       
    )
}

export default Members;