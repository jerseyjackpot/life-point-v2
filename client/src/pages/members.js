import React, { useRef, useState } from 'react';
import "./style.css";
import Affirmation from "../components/affirmations/index";
import Moods from "../components/mood/index";
import Journal from "../components/journal/index";
import Grateful from "../components/grateful/index";
import Remembers from "../components/remember/index";
import Habitailment from '../components/habits-ailments';
import Nav from '../components/navbar';
import { Row, Button } from 'react-bootstrap';
import CameraRecorder from '../components/video/Record';
import API from '../utils/API';


function Members() {
    const [sleepTime, setSleepTime] = useState(0);
    const [mood, setMood] = useState(0);
    const setSleepTimeState = function (num) {
        console.log({ prev: sleepTime });
        setSleepTime(num);
    }
    const [exerciseTime, setExerciseTime] = useState(0);
    const setExerciseTimeState = function (num) {
        console.log({ prev: exerciseTime });
        setExerciseTime(num);
    }
    const [nappingTime, setNappingTime] = useState(0);
    const setNappingTimeState = function (num) {
        console.log({ prev: nappingTime });
        setNappingTime(num);
    }
    const [caffeineServings, setCaffeineAmt] = useState(0);
    const setCaffeineState = function (num) {
        console.log({ prev: caffeineServings });
        setCaffeineAmt(num);
    }
    const [alcoholServing, setAlcoholServings] = useState(0);
    const setAlcoholState = function (num) {
        console.log({ prev: alcoholServing });
        setAlcoholServings(num);
    }
    const [digitalMediaTime, setMediaTime] = useState(0);
    const setMediaState = function (num) {
        console.log({ prev: digitalMediaTime });
        setMediaTime(num);
    }
    const [socialTime, setSocialTime] = useState(0);
    const setSocialTimeState = function (num) {
        console.log({ prev: socialTime });
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
    const showered = useRef();
    const teethBrush = useRef();
    const selfCare = useRef();
    const headache = useRef();
    const nausea = useRef();
    const exhaustion = useRef();
    const insomnia = useRef();
    const menstruation = useRef();
    const appetite = useRef();
    const handleMoodClick = function (event) {

        setMood(event.target.value);
    }
    const handleOnClick = function (event) {
        console.log({
            medication: medicationTaken.current.value,
            hoursSleep: sleepTime,
            minutesExercise: exerciseTime,
            minutesNapping: nappingTime,
            servingsCaffeine: caffeineServings,
            servingsAlcohol: alcoholServing,
            hoursTV: digitalMediaTime,
            showered: showered.current.value,
            brushedTeeth: teethBrush.current.value,
            selfCare: selfCare.current.value,
            minutesSocial: socialTime,
            headache: headache.current.value,
            nausea: nausea.current.value,
            exhaustion: exhaustion.current.value,
            insomnia: insomnia.current.value,
            appetite: appetite.current.value,
            menstruation: menstruation.current.value,
            gratefulEntryOne: gratefulField1.current.value,
            gratefulEntryTwo: gratefulField2.current.value,
            gratefulEntryThree: gratefulField3.current.value,
            gratefulEntryFour: gratefulField4.current.value,
            gratefulEntryFive: gratefulField5.current.value,
            journalEntry: journalField.current.value,
            rememberEntryOne: rememberField1.current.value,
            rememberEntryTwo: rememberField2.current.value,
            rememberEntryThree: rememberField3.current.value,
            rememberEntryFour: rememberField4.current.value,
            rememberEntryFive: rememberField5.current.value,
            mood: mood

        });
        API.postEntry({
            medication: medicationTaken.current.value,
            hoursSleep: sleepTime,
            minutesExercise: exerciseTime,
            minutesNapping: nappingTime,
            servingsCaffeine: caffeineServings,
            servingsAlcohol: alcoholServing,
            hoursTV: digitalMediaTime,
            showered: showered.current.value,
            brushedTeeth: teethBrush.current.value,
            selfCare: selfCare.current.value,
            minutesSocial: socialTime,
            headache: headache.current.value,
            nausea: nausea.current.value,
            exhaustion: exhaustion.current.value,
            insomnia: insomnia.current.value,
            appetite: appetite.current.value,
            menstruation: menstruation.current.value,
            gratefulEntryOne: gratefulField1.current.value,
            gratefulEntryTwo: gratefulField2.current.value,
            gratefulEntryThree: gratefulField3.current.value,
            gratefulEntryFour: gratefulField4.current.value,
            gratefulEntryFive: gratefulField5.current.value,
            journalEntry: journalField.current.value,
            rememberEntryOne: rememberField1.current.value,
            rememberEntryTwo: rememberField2.current.value,
            rememberEntryThree: rememberField3.current.value,
            rememberEntryFour: rememberField4.current.value,
            rememberEntryFive: rememberField5.current.value,
            mood: mood

        }).then(result => {
            console.log(result);
            console.log("it worked!!!!");
        }).catch(err => {
            console.log(err);
        })

    };
    return (
        <>
            <Nav />
            <Affirmation />
            <Moods
                handleMoodClick={handleMoodClick} />
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
                gratefulField5={gratefulField5} />
            <Habitailment
                setSleepTimeState={setSleepTimeState}
                setExerciseTimeState={setExerciseTimeState}
                setNappingTimeState={setNappingTimeState}
                caffeineServings={setCaffeineAmt}
                setCaffeineState={setCaffeineState}
                alcoholState={setAlcoholServings}
                setAlcoholState={setAlcoholState}
                setMediaState={setMediaState}
                setSocialTimeState={setSocialTimeState}
                medicationTaken={medicationTaken}
                showered={showered}
                teethBrush={teethBrush}
                selfCare={selfCare}
                headache={headache}
                nausea={nausea}
                exhaustion={exhaustion}
                insomnia={insomnia}
                menstruation={menstruation}
                appetite={appetite} />
            <Journal
                journalField={journalField} />
            <CameraRecorder />
            <Row className="w-100 justify-content-center">
                <Button as="input" type="submit lg" value="Submit" id="submit" onClick={handleOnClick} />
            </Row>
        </>

    )
}

export default Members;