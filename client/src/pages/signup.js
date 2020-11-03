// // When the page is loaded
// $(document).ready(() => {
//   // Getting references to our form and input
//   const signUpForm = $("form.signup");
//   const emailInput = $("input#email-input");
//   const passwordInput = $("input#password-input");

//   // When the signup button is clicked, we validate the email and password are not blank
//   signUpForm.on("submit", event => {
//     event.preventDefault();
//     const userData = {
//       email: emailInput.val().trim(),
//       password: passwordInput.val().trim()
//     };

//     if (!userData.email || !userData.password) {
//       return;
//     }
//     // If we have an email and password, run the signUpUser function
//     signUpUser(userData.email, userData.password);
//     emailInput.val("");
//     passwordInput.val("");
//   });

//   // Does a post to the signup route. If successful, we are redirected to the members page
//   // Otherwise we log any errors
//   function signUpUser(email, password) {
//     $.post("/api/signup", {
//       email: email,
//       password: password
//     })
//       .then(() => {
//         window.location.replace("/home");
//         // If there's an error, handle it by throwing up a bootstrap alert
//       })
//       .catch(handleLoginErr);
//   }

//   function handleLoginErr(err) {
//     $("#alert .msg").text(err.responseJSON);
//     $("#alert").fadeIn(500);
//   }
// });

import React, {useContext, useRef} from 'react';
import UserContext from "../UserContext";
import API from "../utils/API";

function SignUp(props){
    const {email, setEmail, loggedin, setLoggedin} = useContext (UserContext);
    const emailInput = useRef("");
    const passwordInput = useRef("");
    const handleSubmit = function(event){
        event.preventDefault();
        console.log(event);
        console.log(emailInput.current.value);
        console.log(passwordInput.current.value);
        API.signup({email: emailInput.current.value, password: passwordInput.current.value})
        .then( data => {
            console.log(data);
            setEmail(data.email);
            setLoggedin(true);
        });
    }
    return (
        <div className="container">
            {/* email: {email}, loggedin: {loggedin && "We are logged in"} */}
        <div className="row">
            <div className="col-md-6 col-md-offset-3">
                <h2>Signup Form</h2>
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
                    <p>Or Login<a href="/login">here</a></p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default SignUp;
