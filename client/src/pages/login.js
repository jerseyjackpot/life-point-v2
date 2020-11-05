import React, { useContext, useRef } from 'react';
import UserContext from "../UserContext";
import API from "../utils/API";
import { useHistory } from "react-router-dom";

function Login(props) {
    const { email, setEmail, loggedin, setLoggedin } = useContext(UserContext);
    const emailInput = useRef("");
    const passwordInput = useRef("");
    const History = useHistory();
    const handleSubmit = function (event) {
        event.preventDefault();
        console.log(event);
        console.log(emailInput.current.value);
        console.log(passwordInput.current.value);
        API.login({ email: emailInput.current.value, password: passwordInput.current.value })
            .then(data => {
                console.log(data);
                History.push("/homepage")
                setEmail(data.email);
                setLoggedin(true);
            });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-md-offset-3">
                    <h2>Login Form</h2>
                    <form className="login" onSubmit={event => handleSubmit(event)}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email" ref={emailInput} />
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="password-input" placeholder="Password" ref={passwordInput} />
                                <button type="submit" className="btn btn-default" onClick={event => handleSubmit(event)}>Login</button>
                            </div>
                            <br />
                            <p>Or sign up <a href="/signup">here</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;