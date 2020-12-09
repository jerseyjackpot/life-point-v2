import React from 'react';
import "./style.css";
import { fadeInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import "animate.css/animate.min.css";


const styles = {
    fadeInDown: {
        animation: 'x 1.5s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
  }
  

function Logout() {
    return (

<div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3"><br/>
                <StyleRoot><h1 style={styles.fadeInDown}>Take Care!</h1>
                    <p style={styles.fadeInDown}><br/>
                        Thank you for using Life Point today! We hope you're doing well and look forward to seeing you again soon. 
                    </p>
                   </StyleRoot>
                   </div></div></div>


  );

}
export default Logout;