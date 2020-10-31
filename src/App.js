import React from 'react';
import Homepage from './homepage.js';
import Header from './header.js';
import Footer from './footer.js';
// import Members from './members.js';
import Calendar from './calendar.js';
import Resources from './resources.js';
import Login from './login.js';
import Signup from './signup.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DeveloperContext from "./DeveloperContext";


function App() {
  return (

    <Router>
      <Header />
        <Switch>
        <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/">
            <Signup />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
         
          {/* <Route exact path="/members">
            <Members />
          </Route> */}

          <Route exact path="/calendar">
            <Calendar />
          </Route>

          <Route exact path="/resources">
            <Resources />
          </Route>

          </Switch>
        <Footer />
     </Router>

  );
}
export default App;