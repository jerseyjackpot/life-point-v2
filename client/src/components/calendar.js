import React, { Component, useEffect } from 'react';
import Calendar from 'rc-year-calendar';
import "../pages/style.css";
import Nav from '../components/navbar';
 
 
  function CalendarLP() {


    const dayClickHandler = (date, events) => {


      console.log("dayclick", date)
    }

    return (
      <>
      <Nav />
        <Calendar onDayClick = {dayClickHandler}/>
      </>
    );
  }
  
  export default CalendarLP;