import React, {useContext, useRef} from 'react';
import UserContext from "../UserContext";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';



function SignUp(props){
    const {email, setEmail, loggedin, setLoggedin} = useContext (UserContext);
    const emailInput = useRef();
    const passwordInput = useRef();
    const History = useHistory();
    const handleSubmit = function(event){
        event.preventDefault();
        console.log(event + email + loggedin);
        console.log(emailInput.current.value);
        console.log(passwordInput.current.value);
        API.signup({email: emailInput.current.value, password: passwordInput.current.value})
        .then( data => {
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
            <ScrollAnimation animateIn="fadeIn">
            <h1>Signup Form</h1>
            </ScrollAnimation>
                <form className="login" onSubmit={ event => handleSubmit(event)}/>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email-input" placeholder="Email" ref={emailInput}/>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password-input" placeholder="Password" ref={passwordInput}/>
                        <button type="submit" className="btn btn-default" onClick={ event => handleSubmit(event)}>SignUp</button>
                    </div>
                    <br />
                    <p>Or Login <a href="/login">here</a></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp;
