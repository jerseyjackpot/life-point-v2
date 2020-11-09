import React from 'react';
import "./style.css";
import Nav from '../components/navbar';
import { fadeInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const styles = {
  fadeInUp: {
      animation: 'x 1.5s',
      animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  }
}

function Resources() {
    return (
      <>
      <Nav/>
        <div className="container fluid" id="resources">
            <StyleRoot><h1 className="text-center" style={styles.fadeInUp}>Resources</h1>
            <p className="text-center"style={styles.fadeInUp} >While we are confident Life Point will assist in helping with your day to day life, we
            have provided a list of resources should you require further assitance. Below you can find links to
            hotlines, virtual access to licensed proffesionals as well as apps to help you get through the rough
            times. Best of Luck!</p></StyleRoot>

            <h2 id="lead">Hotlines</h2>
            <ul>
                <li><strong><a href="https://suicidepreventionlifeline.org/">National Suicide Prevention Lifeline
        </a></strong>:
      <h2 id="lead">Call: <a href="tel:800-273-8255">800-273-8255</a></h2>
        The Lifeline provides 24/7, free and confidential support for people in distress, prevention and
        crisis resources for you or your loved ones, and best practices for professionals.
    </li>
                <li><strong><a href="https://www.samhsa.gov/find-help/national-helpline">Substance Abuse Mental Health
          Awareness National Helpline</a></strong>:
      <h2 id="lead">Call: <a href="tel:1-800-662-4357">1-800-662-HELP (4357)</a></h2>
        SAMHSA’s National Helpline is a free, confidential, 24/7, 365-day-a-year treatment referral and
        information service (in English and Spanish) for individuals and families facing mental and/or
        substance use disorders.
    </li>
                <li><strong><a href="https://www.crisistextline.org/">Crisis Textline</a></strong>:
      <h3 className="lead">Text: "HELP" to <a href="sms:741741">741741</a></h3>
        Connect with a Crisis Counselor with this free 24/7 support at your fingertips.
    </li>
            </ul>
            <ScrollAnimation animateIn="animate__fadeInUp"><h2 id="lead">Licensed Professionals</h2>
            <ul>
                <li><strong><a href="https://www.betterhelp.com/">BetterHelp </a></strong>Affordable, private online
      counseling. Talk with a licensed, professional therapist online.</li>
                    <li><strong><a href="https://www.talkspace.com/">TalkSpace </a></strong>Connect with a licensed therapist
                    from the palm of your hand, and experience the most convenient, affordable way to improve your mental
      health.</li>
  </ul></ScrollAnimation>


  <ScrollAnimation animateIn="animate__fadeInUp"><h2 id="lead">Apps To Help You Out <i className="fa fa-mobile" aria-hidden="true"></i></h2>
                    <ul>
                        <li><strong><a href="https://www.calm.com/">Calm </a></strong>Calm Is The #1 App For Mental Fitness,
      Famous For Its Guided Meditations & Sleep Stories.</li>
                           
                            <li><strong><a href="https://www.headspace.com/">Headspace </a></strong>Live a healthier, happier, more
      well-rested life in just a few minutes a day with the Headspace app.</li>
  </ul></ScrollAnimation>

</div>
</>

  );
}

export default Resources;