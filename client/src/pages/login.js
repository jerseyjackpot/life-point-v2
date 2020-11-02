// $(document).ready(() => {
//   // Getting references to our form and inputs
//   const loginForm = $("form.login");
//   const emailInput = $("input#email-input");
//   const passwordInput = $("input#password-input");

//   // When the form is submitted, we validate there's an email and password entered
//   loginForm.on("submit", event => {
//     event.preventDefault();
//     const userData = {
//       email: emailInput.val().trim(),
//       password: passwordInput.val().trim()
//     };

//     if (!userData.email || !userData.password) {
//       return;
//     }

//     // If we have an email and password we run the loginUser function and clear the form
//     loginUser(userData.email, userData.password);
//     emailInput.val("");
//     passwordInput.val("");
//   });

//   // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
//   function loginUser(email, password) {
//     $.post("/api/login", {
//       email: email,
//       password: password
//     })
//       .then(() => {
//         window.location.replace("/home");
//         // If there's an error, log the error
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   }
// });
import React, {useContext, useRef} from 'react';
import UserContext from "../UserContext";
import API from "../utils/API";

function Login(props){
    const {email, setEmail, loggedin, setLoggedin} = useContext (UserContext);
    const emailInput = useRef("");
    const passwordInput = useRef("");
    const handleSubmit = function(event){
        event.preventDefault();
        console.log(event);
        console.log(emailInput.current.value);
        console.log(passwordInput.current.value);
        API.login({email: emailInput.current.value, password: passwordInput.current.value})
        .then( data => {
            console.log(data);
            setEmail(data.email);
            setLoggedin(true);
        });
    }
    return (
        <div className="container">
            email: {email}, loggedin: {loggedin && "We are logged in"}
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <h2>Login Form</h2>
                <form className="login" onSubmit={ event => handleSubmit(event)}/>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email-input" placeholder="Email" ref={emailInput}/>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="password-input" placeholder="Password" ref={passwordInput}/>
                        <button type="submit" className="btn btn-default" onClick={ event => handleSubmit(event)}>Login</button>
                    </div>
                    <br />
                    <p>Or sign up <a href="/">here</a></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Login;