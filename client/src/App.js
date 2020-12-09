import React, { useState } from 'react';
import Homepage from './pages/homepage.js';
import Signup from './pages/signup.js';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Members from './pages/members.js';
import Calendar from './components/calendar.js';
import Resources from './pages/resources.js';
import Logout from './pages/logout.js';
import Login from './pages/login.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserContext from "./UserContext";
import SessionUser from "./utils/SessionUser";


function App() {
  const [email, setEmail] = useState("");
  const [loggedin, setLoggedin] = useState(false);
  SessionUser(setEmail, setLoggedin);
  return (

    <Router>
      <UserContext.Provider value={{ email, setEmail, loggedin, setLoggedin }}>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/homepage">
            <Homepage />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path={["/login", "/"]}>
            <Login />
          </Route>
          <Route exact path="/members">
            <Members />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>

  );
}
export default App;