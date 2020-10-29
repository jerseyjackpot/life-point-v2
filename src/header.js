import React from 'react';
import "./style.css";



function Homepage() {
    return (
        <div>
            <header>
                <h1>Life-Point: To track your health and well-being.</h1>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <h2>Login Form</h2>
                        <form className="login" />
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="email-input" placeholder="Email" />
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="password-input" placeholder="Password" />
                                <button type="submit" className="btn btn-default">Login</button>
                            </div>
                            <br />
                            <p>Or sign up <a href="/">here</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;