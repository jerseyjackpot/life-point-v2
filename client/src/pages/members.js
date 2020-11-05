import React from 'react';
import "./style.css";
import Affirmation from "../components/affirmations/index";
import Moods from "../components/mood/index";
import Journal from "../components/journal/index";
import Grateful from "../components/grateful/index";
import Remembers from "../components/remember/index";
import Habitailment from '../components/habits-ailments';
import Nav from '../components/navbar';



function Members() {
    return (
        <div>
            <Nav/>
            <Affirmation/>
            <Moods/>
            <Remembers/>
            <Grateful/>
            <Journal/>
            <Habitailment/>
            {/* <button type="submit" className="btn btn-primary" id="submit">Submit</button> */}
        </div>
       
    )
}

export default Members;