import React from 'react';
import "./homepage.css";
import lotus from "../img/Lotus.png";


function Homepage() {
    return (
        <div style={{backgroundImage: lotus}}>
            
            <h2>Please click on the links below to log your progress:</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className=".col-12 .col-md-8">
                        <a href="/members"><button id="button-a" type="button" className="btn btn-outline-info btn-lg"> Daily
                    Entry</button></a>
                    </div>
                </div>
            </div>
            <section id="lotus-button">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className=".col-12 .col-md-8">
                            <a href="/calendar"><button id="button-b" type="button"
                                className="btn btn-outline-info btn-lg">Calendar</button></a>
                        </div>
                        <div className=".col-12 .col-md-8">
                            <a href="/resources"><button id="button-c" type="button"
                                className="btn btn-outline-info btn-lg">Resources</button></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homepage;