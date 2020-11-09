import React, { useContext, useRef } from 'react';
import UserContext from "../UserContext";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import { fadeInDown } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
    fadeInDown: {
        animation: 'x 1.5s',
        animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    }
}


function SignUp(props) {
    const { email, setEmail, loggedin, setLoggedin } = useContext(UserContext);
    const emailInput = useRef();
    const passwordInput = useRef();
    const History = useHistory();
    const handleSubmit = function (event) {
        event.preventDefault();
        console.log(event + email + loggedin);
        console.log(emailInput.current.value);
        console.log(passwordInput.current.value);
        API.signup({ email: emailInput.current.value, password: passwordInput.current.value })
            .then(data => {
                console.log(data);

                setEmail(data.email);
                setLoggedin(true);
                History.push("/homepage");
            });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                <StyleRoot><h1 style={styles.fadeInDown}>Welcome to Life Point 2.0</h1>
                    <p style={styles.fadeInDown}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   </StyleRoot>
                    <StyleRoot>
                        <h2 style={styles.fadeInDown}>Signup Form</h2>
                    </StyleRoot>
                    <form className="login" onSubmit={event => handleSubmit(event)} />
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="email-input" placeholder="Email" ref={emailInput} />
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password-input" placeholder="Password" ref={passwordInput} />
                            <button type="submit" className="btn btn-default" onClick={event => handleSubmit(event)}>SignUp</button>
                        </div>
                        {/* <br/> */}
                        <p id="logintext">Or Login <a href="/login">here</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
