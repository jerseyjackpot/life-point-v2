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
import API from '../utils/API';




function Members() {
    const [sleepTime, setSleepTime] = useState(0);
    const [mood, setMood] = useState(0);
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
    const handleMoodClick = function (event){
        console.log(event.target);
        console.log(event.target.value);
        setMood(event.target.value);
    }
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
            slh: sleepTime,

        } );
        API.postEntry({
           mood: mood, 
            // medication: req.body.medication,
            // hoursSleep: req.body.hoursSleep,
            // minutesExercise: req.body.minutesExercise,
            // minutesNapping: req.body.minutesNapping,
            // servingsCaffeine: req.body.servingsCaffeine,
            // servingsAlcohol: req.body.servingsAlcohol,
            // hoursTV: req.body.hoursTV,
            // showered: req.body.showered,
            // brushedTeeth: req.body.brushedTeeth,
            // selfCare: req.body.selfCare,
            // minutesSocial: req.body.minutesSocial,
            // headache: req.body.headache,
            // nausea: req.body.nausea,
            // exhaustion: req.body.exhaustion,
            // insomnia: req.body.insomnia,
            // appetite: req.body.appetite,
            // menstruation: req.body.menstruation,
            gratefulEntryOne: gratefulField1.current.value,
            gratefulEntryTwo: gratefulField2.current.value,
            gratefulEntryThree: gratefulField3.current.value,
            gratefulEntryFour: gratefulField4.current.value,
            gratefulEntryFive: gratefulField5.current.value,
            // journalEntry: journalField.current.value,
            journalEntryDate: req.body.journalEntryDate,
            rememberEntryOne: rememberField1.current.value,
            rememberEntryTwo: rememberField2.current.value,
            rememberEntryThree: rememberField3.current.value,
            rememberEntryFour: rememberField4.current.value,
            rememberEntryFive: rememberField5.current.value

        }).then(data => {
            console.log(data);
        }
            
        )
        
    }
    return (
        <>
            <Nav/>
            <Affirmation/>
            
            <Moods
            handleMoodClick={handleMoodClick}/>
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
    <Button as="input" type="submit lg" value="Submit" id="submitt" onClick={handleOnClick}/>
    </Row>
            
        </>
       
    )
}

export default Members;