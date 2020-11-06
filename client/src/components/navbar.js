import React from 'react';
import { Navbar } from "react-bootstrap";
import "../pages/style.css";



function Nav() {
    return (
        <div>
            <Navbar expand="lg" variant="light" bg="light" className="justify-content-center">
                <Navbar.Brand id="navbar-br" href="/calendar">Calendar</Navbar.Brand>
                <Navbar.Brand id="navbar-br" href="/resources">Resources</Navbar.Brand>
                <Navbar.Brand id="navbar-br" href="/members">Daily Entry</Navbar.Brand>
                <Navbar.Brand id="navbar-br" href="/logout">Logout</Navbar.Brand>
            </Navbar>
        </div>
    );
}

export default Nav;