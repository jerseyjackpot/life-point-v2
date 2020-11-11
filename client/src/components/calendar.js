import React from 'react';
import Calendar from 'rc-year-calendar';
import "../pages/style.css";
import Nav from '../components/navbar';
import API from '../utils/API';
 
 
  function CalendarLP() {


    const dayClickHandler = (date, events) => {
      console.log("dayclick", date)
      API.getDate(date).then(() =>{console.log("did this work?")})
      API.getEntry(date);
    }

    return (
      <>
      <Nav />
        <Calendar onDayClick = {dayClickHandler}/>
      </>
    );
  }
  
  export default CalendarLP;